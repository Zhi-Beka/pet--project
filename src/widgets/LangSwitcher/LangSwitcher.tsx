import { memo } from "react";
import { useTranslation } from "react-i18next";
import { Button, ThemeButton } from "shared/ui/Button/Button";

interface LangSwitcherProps {
    className?: string;
}

export const LangSwitcher = memo(({ className }: LangSwitcherProps) => {
    const { t, i18n } = useTranslation();

    const toggle = () => {
        i18n.changeLanguage(i18n.language === "en" ? "ru" : "en");
    };

    return (
        <Button theme={ThemeButton.CLEAR} onClick={toggle}>
            {t("Language")}
        </Button>
    );
});
