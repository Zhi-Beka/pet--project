import { memo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { classNames } from "shared/lib/classNames/classNames";
import { Button } from "shared/ui/Button/Button";
import { Input } from "shared/ui/Input/Input";
import { themeText, Text } from "shared/ui/Text/Text";
import { loginByUsername } from "../../model/services/loginUsername/loginByUsername";
import { getLoginState } from "../../model/selectors/getLoginState/getLoginState";
import { loginActions } from "../../model/slices/loginSlice";
import cls from "./LoginForm.module.scss";

interface LoginFormProps {
    className?: string;
}

export const LoginForm = memo(({ className }: LoginFormProps) => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const { username, password, error, isLoading } = useSelector(getLoginState);

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

    const loginOnCLick = useCallback(() => {
        dispatch(loginByUsername({ username, password }));
    }, [dispatch, username, password]);

    return (
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
    );
});
