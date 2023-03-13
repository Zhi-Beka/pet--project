import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import {
    DynamicModuleLoader,
    ReducersList,
} from "shared/lib/components/DynamicModuleLoader";
import {
    fetchProfileData,
    getProfileReadOnly,
    getProfileValidateError,
    profileActions,
    ProfileCard,
    profileReducer,
} from "entities/Profile";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppdispatch";
import { useCallback, useEffect } from "react";
import { useSelector } from "react-redux";
import { Currency } from "entities/Currency/models/currency";
import { Text, themeText } from "shared/ui/Text/Text";
import { ValidateProfileError } from "entities/Profile/model/types/profile";
import { Country } from "../../../entities/Country/models/types/country";
import {
    getProfileLoading,
    getProfileError,
    getProfileForm,
} from "../../../entities/Profile";
import ProfilePageHeader from "./ProfilePageHeader/ProfilePageHeader";

interface ProfilePageProps {
    className?: string;
}
const reducers: ReducersList = {
    profile: profileReducer,
};

const ProfilePage = ({ className }: ProfilePageProps) => {
    const { t } = useTranslation("profile");
    const dispatch = useAppDispatch();
    const data = useSelector(getProfileForm);
    const error = useSelector(getProfileError);
    const isLoading = useSelector(getProfileLoading);
    const readonly = useSelector(getProfileReadOnly);
    const errors = useSelector(getProfileValidateError);
    const validateErrorTranslate = {
        [ValidateProfileError.SERVER_ERROR]: t(
            "Серверная ошибка при сохранении"
        ),
        [ValidateProfileError.INCORRECT_COUNTRY]: t("Некорректный регион"),
        [ValidateProfileError.NO_DATA]: t("Данные не указаны"),
        [ValidateProfileError.INCORRECT_USER_DATA]: t(
            "Имя и фамилия обязательны"
        ),
        [ValidateProfileError.INCORRECT_AGE]: t("Некорректный возраст"),
    };

    useEffect(() => {
        dispatch(fetchProfileData());
    }, [dispatch]);

    const onChangeFirstName = useCallback(
        (value?: string) => {
            dispatch(profileActions.setUpdateProfile({ first: value || "" }));
        },
        [dispatch]
    );

    const onChangeLastName = useCallback(
        (value?: string) => {
            dispatch(
                profileActions.setUpdateProfile({ lastName: value || "" })
            );
        },
        [dispatch]
    );
    const onChangeAge = useCallback(
        (value?: number | string) => {
            dispatch(profileActions.setUpdateProfile({ age: value || "" }));
        },
        [dispatch]
    );

    const onChangeCity = useCallback(
        (value?: string) => {
            dispatch(profileActions.setUpdateProfile({ city: value || "" }));
        },
        [dispatch]
    );

    const onChangeUsername = useCallback(
        (value?: string) => {
            dispatch(
                profileActions.setUpdateProfile({ username: value || "" })
            );
        },
        [dispatch]
    );
    const onChangeAvatar = useCallback(
        (value?: string) => {
            dispatch(profileActions.setUpdateProfile({ avatar: value || "" }));
        },
        [dispatch]
    );

    const onChangeCountry = useCallback(
        (country: Country) => {
            dispatch(profileActions.setUpdateProfile({ country }));
        },
        [dispatch]
    );

    const onChangeCurrency = useCallback(
        (currency: Currency) => {
            dispatch(profileActions.setUpdateProfile({ currency }));
        },
        [dispatch]
    );

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div className={classNames("", {}, [className])}>
                <ProfilePageHeader />
                {errors?.length &&
                    errors.map((err) => {
                        return (
                            <Text
                                key={err}
                                theme={themeText.ERROR}
                                text={validateErrorTranslate[err]}
                            />
                        );
                    })}
                <ProfileCard
                    data={data}
                    error={error}
                    isLoading={isLoading}
                    onChangeLastName={onChangeLastName}
                    onChangeFirstName={onChangeFirstName}
                    onChangeAge={onChangeAge}
                    onChangeCity={onChangeCity}
                    onChangeAvatar={onChangeAvatar}
                    onChangeUsername={onChangeUsername}
                    onChangeCountry={onChangeCountry}
                    onChangeCurrency={onChangeCurrency}
                    readonly={readonly}
                />
            </div>
        </DynamicModuleLoader>
    );
};
export default ProfilePage;
