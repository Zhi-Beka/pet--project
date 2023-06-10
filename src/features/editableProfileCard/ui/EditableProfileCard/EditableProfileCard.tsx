import { classNames } from "shared/lib/classNames/classNames";
import { Country } from "entities/Country/models/types/country";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppdispatch";
import { useCallback } from "react";
import { useSelector } from "react-redux";
import { Currency } from "entities/Currency/models/currency";
import { Text, themeText } from "shared/ui/Text/Text";
import { ValidateProfileError } from "entities/Profile/model/types/profile";
import { useInitialEffect } from "shared/lib/hooks/useInitialEffect";

import {
    DynamicModuleLoader,
    ReducersList,
} from "shared/lib/components/DynamicModuleLoader";
import { VStack } from "shared/ui/Stack";
import { useTranslation } from "react-i18next";
import { getProfileForm } from "features/editableProfileCard/model/selectors/getProfileForm/getProfileForm";
import { getProfileError } from "features/editableProfileCard/model/selectors/getProfileError/getProfileError";
import { getProfileLoading } from "features/editableProfileCard/model/selectors/getProfileLoading/getProfileLoading";
import { getProfileReadOnly } from "features/editableProfileCard/model/selectors/getProfileReadOnly/getProfileReadOnly";
import { getProfileValidateError } from "features/editableProfileCard/model/selectors/getProfileValidateError/getProfileValidateError";
import {
    profileActions,
    profileReducer,
} from "features/editableProfileCard/model/slice/ProfileSlice";
import { fetchProfileData } from "features/editableProfileCard/model/service/fetchProfileData/fetchProfileData";
import { ProfileCard } from "entities/Profile";
import EditableProfilePageHeader from "../EditableProfileCardHeader/EditableProfilePageHeader";

interface EditableProfileCardProps {
    className?: string;
    id?: string;
}

export const EditableProfileCard = ({
    className,
    id,
}: EditableProfileCardProps) => {
    const dispatch = useAppDispatch();
    const data = useSelector(getProfileForm);
    const error = useSelector(getProfileError);
    const isLoading = useSelector(getProfileLoading);
    const readonly = useSelector(getProfileReadOnly);
    const errors = useSelector(getProfileValidateError);
    const { t } = useTranslation("profile");
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

    const reducers: ReducersList = {
        profile: profileReducer,
    };

    useInitialEffect(() => {
        if (id) {
            dispatch(fetchProfileData(id));
        }
    });

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
            <VStack>
                <EditableProfilePageHeader />
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
            </VStack>
        </DynamicModuleLoader>
    );
};
