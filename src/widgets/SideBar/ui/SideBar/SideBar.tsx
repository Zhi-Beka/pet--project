import { ThemeSwitcher } from "widgets/ThemeSwitcher";
import { classNames } from "shared/lib/classNames/classNames";
import { useState } from "react";
import { LangSwitcher } from "widgets/LangSwitcher/LangSwitcher";
import { Button, ThemeButton } from "shared/ui/Button/Button";
import { useTranslation } from "react-i18next";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { RoutePath } from "app/providers/router/config/routeConfig";
import MainIcon from "shared/assets/icons/main.svg";
import HomeIcon from "shared/assets/icons/home.svg";
import cls from "./SideBar.module.scss";

interface SideBarProps {
    className?: string;
}

export const SideBar = ({ className }: SideBarProps) => {
    const [collapsed, setCollapsed] = useState(false);
    const { t } = useTranslation();

    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };

    return (
        <div
            data-testid='sidebar'
            className={classNames(cls.sidebar, { [cls.collapsed]: collapsed }, [
                className,
            ])}
        >
            <Button
                data-testid='toggleBtn'
                type='button'
                onClick={onToggle}
                className={cls.collapsedBtn}
                theme={ThemeButton.BACKGROUND_INVERTED}
            >
                {collapsed ? ">" : "<"}
            </Button>

            <div className={cls.items}>
                <AppLink
                    className={cls.item}
                    theme={AppLinkTheme.PRIMARY}
                    to={RoutePath.main}
                >
                    <MainIcon className={cls.icon} />
                    <span className={cls.link}>{t("Main page")}</span>
                </AppLink>
                <AppLink
                    className={cls.item}
                    theme={AppLinkTheme.PRIMARY}
                    to={RoutePath.about}
                >
                    <HomeIcon className={cls.icon} />
                    <span className={cls.link}>{t("About us")}</span>
                </AppLink>
            </div>

            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher />
            </div>
        </div>
    );
};
