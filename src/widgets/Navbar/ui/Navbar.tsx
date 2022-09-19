import cls from "./Navbar.module.scss";
import { classNames } from "shared/lib/classNames";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <div className={cls.links}>
        <AppLink theme={AppLinkTheme.PRIMARY} to={"/"}>
          MainPage
        </AppLink>
        <AppLink theme={AppLinkTheme.RED} to={"/about"}>
          About
        </AppLink>
      </div>
    </div>
  );
};
