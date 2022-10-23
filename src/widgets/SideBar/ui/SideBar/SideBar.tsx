import { ThemeSwitcher } from "widgets/ThemeSwitcher";
import { classNames } from "shared/lib/classNames/classNames";
import { memo, useState } from "react";
import { LangSwitcher } from "widgets/LangSwitcher/LangSwitcher";
import { Button, ThemeButton } from "shared/ui/Button/Button";
import { SidebarItemList } from "widgets/SideBar/modal/item";
import cls from "./SideBar.module.scss";
import { SidebarItem } from "../SidebarItem/SidebarItem";

interface SideBarProps {
    className?: string;
}

export const SideBar = memo(({ className }: SideBarProps) => {
    const [collapsed, setCollapsed] = useState(false);

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
                {SidebarItemList.map((item) => (
                    <SidebarItem
                        key={item.path}
                        item={item}
                        collapsed={collapsed}
                    />
                ))}
            </div>

            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher />
            </div>
        </div>
    );
});
