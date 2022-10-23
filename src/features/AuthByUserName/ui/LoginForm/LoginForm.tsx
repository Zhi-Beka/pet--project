import { memo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { classNames } from "shared/lib/classNames/classNames";
import { Button } from "shared/ui/Button/Button";
import { Input } from "shared/ui/Input/Input";
import { themeText, Text } from "shared/ui/Text/Text";
import {
    DynamicModuleLoader,
    ReducersList,
} from "shared/lib/components/DynamicModuleLoader";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppdispatch";
import { loginByUsername } from "../../model/services/loginUsername/loginByUsername";
import { loginActions, loginReducer } from "../../model/slices/loginSlice";
import cls from "./LoginForm.module.scss";
import { getLoginUserName } from "../../model/selectors/getLoginUserName/getLoginUsername";
import { getLoginPassword } from "../../model/selectors/getLoginPasswordState/getLoginPasswordState";
import { getLoginIsLoading } from "../../model/selectors/getLoginLoadingState/getLoadingState";
import { getLoginError } from "../../model/selectors/getLoginErrorState/getLoginErrorState";

export interface LoginFormProps {
    className?: string;
    onSuccess: () => void;
}

const initialReducers: ReducersList = {
    loginForm: loginReducer,
};

const LoginForm = memo(({ className, onSuccess }: LoginFormProps) => {
    const username = useSelector(getLoginUserName);
    const password = useSelector(getLoginPassword);
    const isLoading = useSelector(getLoginIsLoading);
    const error = useSelector(getLoginError);
    const { t } = useTranslation();
    const dispatch = useAppDispatch();

    const onChangeUsername = useCallback(
        (value: string) => {
            dispatch(loginActions.setUsername(value));
        },
        [dispatch]
    );

    const onChangePassword = useCallback(
        (value: string) => {
            dispatch(loginActions.setPassword(value));
        },
        [dispatch]
    );

    const loginOnCLick = useCallback(async () => {
        const result = await dispatch(loginByUsername({ username, password }));
        if (result.meta.requestStatus === "fulfilled") {
            onSuccess();
        }
    }, [dispatch, onSuccess, username, password]);

    return (
        // eslint-disable-next-line i18next/no-literal-string
        <DynamicModuleLoader
            removeAfterUnmount
            // eslint-disable-next-line i18next/no-literal-string

            reducers={initialReducers}
        >
            <div className={classNames(cls.loginForm, {}, [className])}>
                <Text title={t("Authorization form")} />
                {error && (
                    <Text
                        text={t("Incorrect username or password")}
                        theme={themeText.ERROR}
                    />
                )}

                <Input
                    placeholder={t("username")}
                    type='text'
                    className={cls.input}
                    autoFocus
                    onChange={onChangeUsername}
                    value={username}
                />
                <Input
                    placeholder={t("password")}
                    type='text'
                    className={cls.input}
                    onChange={onChangePassword}
                    value={password}
                />
                <Button
                    className={cls.inputBtn}
                    onClick={loginOnCLick}
                    disabled={isLoading}
                >
                    {t("Login")}
                </Button>
            </div>
        </DynamicModuleLoader>
    );
});

export default LoginForm;
