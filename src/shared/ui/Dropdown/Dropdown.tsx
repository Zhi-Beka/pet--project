/* eslint-disable i18next/no-literal-string */
import { Menu } from "@headlessui/react";
import { classNames } from "shared/lib/classNames/classNames";
import { Fragment, ReactNode } from "react";
import { t } from "i18next";
import { DropdownDirection } from "shared/types/ui";
import cls from "./Dropdown.module.scss";
import { AppLink } from "../AppLink/AppLink";

export type DropdownType = {
    value?: string;
    content: string;
    disabled?: boolean;
    href?: string;
    onClick?: () => void;
};

interface DropDownProps {
    className: string;
    items: DropdownType[];
    trigger: ReactNode;
    direction?: DropdownDirection;
}

const mapDirectionClass: Record<DropdownDirection, string> = {
    "bottom right": cls.bottomRight,
    "bottom left": cls.bottomLeft,
    "top right": cls.topRight,
    "top left": cls.topLeft,
};

export function Dropdown(props: DropDownProps) {
    const { className, items, trigger, direction = "bottom right" } = props;

    const menuClasses = [mapDirectionClass[direction]];

    return (
        <Menu as='div' className={classNames(cls.Dropdown, {}, [className])}>
            <Menu.Button className={cls.btn}>{trigger}</Menu.Button>
            <Menu.Items className={classNames(cls.menu, {}, menuClasses)}>
                {items.map((item) => {
                    const content = ({ active }: { active: boolean }) => (
                        <button
                            key={item.value}
                            disabled={item.disabled}
                            type='button'
                            className={classNames(
                                cls.item,
                                { [cls.active]: active },
                                [className]
                            )}
                            onClick={item.onClick}
                        >
                            {item.content}
                        </button>
                    );

                    if (item.href) {
                        return (
                            <Menu.Item
                                as={AppLink}
                                to={item.href}
                                disabled={item.disabled}
                            >
                                {content}
                            </Menu.Item>
                        );
                    }
                    return (
                        <Menu.Item as={Fragment} disabled={item.disabled}>
                            {content}
                        </Menu.Item>
                    );
                })}
            </Menu.Items>
        </Menu>
    );
}
