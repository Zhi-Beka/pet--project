/* eslint-disable react/jsx-no-undef */
/* eslint-disable i18next/no-literal-string */
import { classNames } from "shared/lib/classNames/classNames";
import { memo, useCallback, useState } from "react";
import { Button, ThemeButton } from "shared/ui/Button/Button";
import { useTranslation } from "react-i18next";
import { LoginModal } from "features/AuthByUserName";
import { useDispatch, useSelector } from "react-redux";
import { getUserAuthData, userActions } from "entities/User";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { RoutePath } from "app/providers/router/config/routeConfig";
import { Text, themeText } from "shared/ui/Text/Text";
import { Dropdown } from "shared/ui/Dropdown/Dropdown";
import { Avatar } from "shared/ui/Avatar/Avatar";
import cls from "./Navbar.module.scss";

interface NavbarProps {
    className?: string;
}

export const Navbar = memo(({ className }: NavbarProps) => {
    const { t } = useTranslation();
    const [isAuthModal, setIsAuthModal] = useState(false);
    const authData = useSelector(getUserAuthData);

    const onCloseModal = useCallback(() => {
        setIsAuthModal(false);
    }, []);
    const dispatch = useDispatch();

    const onShowModal = useCallback(() => {
        setIsAuthModal(true);
    }, []);

    const onLogout = useCallback(() => {
        dispatch(userActions.logout());
    }, [dispatch]);

    if (authData) {
        return (
            <header className={classNames(cls.navbar, {}, [className])}>
                <Text
                    title={t("Zhi_DEV")}
                    theme={themeText.INVERTED}
                    className={cls.appName}
                />
                <AppLink
                    theme={AppLinkTheme.SECONDARY}
                    to={RoutePath.article_create}
                >
                    {t("Create article")}
                </AppLink>
                <Dropdown
                    direction='bottom left'
                    className={cls.dropdown}
                    items={[
                        {
                            content: t("Log out"),
                            onClick: onLogout,
                        },
                        {
                            content: t("Profile"),
                            href: RoutePath.profile + authData.id,
                        },
                    ]}
                    trigger={<Avatar size={60} src={authData.avatar} />}
                />
            </header>
        );
    }

    return (
        <nav className={classNames(cls.navbar, {}, [className])}>
            <Button
                theme={ThemeButton.BACKGROUND_INVERTED}
                className={cls.links}
                onClick={onShowModal}
            >
                {t("Login")}
            </Button>

            {isAuthModal && (
                <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />
            )}
        </nav>
    );
});
