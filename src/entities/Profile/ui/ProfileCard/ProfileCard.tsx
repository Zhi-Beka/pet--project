import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { getProfileData } from "entities/Profile/model/selectors/getProfileData/getProfileData";
import { getProfileError } from "entities/Profile/model/selectors/getProfileError/getProfileError";
import { getProfileLoading } from "entities/Profile/model/selectors/getProfleLoading/getProfileLoading";
import { Text } from "shared/ui/Text/Text";
import { Button, ThemeButton } from "shared/ui/Button/Button";
import { Input } from "shared/ui/Input/Input";
import cls from "./ProfileCard.module.scss";

interface ProfileCardProps {
    className?: string;
}

export const ProfileCard = ({ className }: ProfileCardProps) => {
    const { t } = useTranslation();
    const data = useSelector(getProfileData);
    console.log(data, "data");
    const error = useSelector(getProfileError);
    const isLoading = useSelector(getProfileLoading);

    return (
        <div className={classNames(cls.ProfileCard, {}, [className])}>
            <div>
                <Text title={t("profile")} />
                <Button theme={ThemeButton.OUTLINE}>{t("edit")}</Button>
            </div>
            <div className={cls.data}>
                <Input
                    value={data?.first}
                    placeholder={t("Your name")}
                    className={cls.input}
                />
                <Input
                    value={data?.lastName}
                    placeholder={t("Your last name")}
                    className={cls.input}
                />
            </div>
        </div>
    );
};
