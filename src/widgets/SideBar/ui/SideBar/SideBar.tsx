import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { classNames } from 'shared/lib/classNames/classNames';
import { useState } from 'react';
import { LangSwitcher } from 'widgets/LangSwitcher/LangSwitcher';
import { t } from 'i18next';
import cls from './SideBar.module.scss';

interface SideBarProps {
    className?: string;
}

export const SideBar = ({ className }: SideBarProps) => {
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
            <button data-testid='toggleBtn' type='button' onClick={onToggle}>
                {t('toggle')}
            </button>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher />
            </div>
        </div>
    );
};
