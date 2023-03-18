import {
    getProfileData,
    getProfileReadOnly,
    profileActions,
    updateProfileData,
} from "entities/Profile";
import { getUserAuthData } from "entities/User";
import { useCallback } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { classNames } from "shared/lib/classNames/classNames";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppdispatch";
import { Button, ThemeButton } from "shared/ui/Button/Button";
import { Text } from "shared/ui/Text/Text";
import cls from "./ProfilePageHeader.module.scss";

interface ProfileHeaderProps {}

const ProfilePageHeader = (props: ProfileHeaderProps) => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const readonly = useSelector(getProfileReadOnly);
    const authData = useSelector(getUserAuthData);
    const profileData = useSelector(getProfileData);
    const canEdit = authData?.id === profileData?.id;

    const onEdit = useCallback(() => {
        dispatch(profileActions.setReadOnly(false));
    }, [dispatch]);

    const onCancelEdit = useCallback(() => {
        dispatch(profileActions.cancelEdit());
    }, [dispatch]);

    const onSave = useCallback(() => {
        dispatch(updateProfileData());
    }, [dispatch]);

    return (
        <div className={classNames(cls.ProfilePageHeader, {}, [])}>
            <Text title={t("Profile")} />
            {canEdit && (
                <div className={cls.btnBox}>
                    {readonly ? (
                        <Button
                            className={cls.editBtn}
                            theme={ThemeButton.OUTLINE}
                            onClick={onEdit}
                        >
                            {" "}
                            {t("Edit")}{" "}
                        </Button>
                    ) : (
                        <>
                            <Button
                                className={cls.editBtn}
                                theme={ThemeButton.OUTLINE_RED}
                                onClick={onCancelEdit}
                            >
                                {t("Discard")}
                            </Button>
                            <Button
                                className={cls.saveBtn}
                                theme={ThemeButton.OUTLINE}
                                onClick={onSave}
                            >
                                {t("Save")}
                            </Button>
                        </>
                    )}
                </div>
            )}
        </div>
    );
};

export default ProfilePageHeader;
