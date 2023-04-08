import { ReactNode } from "react";
import { Listbox as HListbox } from "@headlessui/react";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./ListBox.module.scss";
import { Button } from "../Button/Button";

export type ListItemsType = {
    value: string;
    content: ReactNode;
    disabled?: boolean;
};

type DropdownDirection = "top" | "bottom";

export interface ListboxProps {
    items?: ListItemsType[];
    className?: string;
    value?: string;
    defaultValue?: string;
    onChange: (value: string) => void;
    readonly?: boolean;
    direction?: DropdownDirection;
    label?: string;
}

const mapDirectionClass: Record<DropdownDirection, string> = {
    bottom: cls.optionsBottom,
    top: cls.optionsTop,
};

export function ListBox(props: ListboxProps) {
    const {
        items,
        className,
        onChange,
        value,
        defaultValue,
        readonly,
        direction = "bottom",
        label,
    } = props;
    const optionsClasses = [mapDirectionClass[direction]];
    return (
        <section className={cls.stack}>
            {label && <span>{label + ">"}</span>}
            <HListbox
                as='div'
                className={classNames(cls.ListBox, {}, [className])}
                value={value}
                onChange={onChange}
            >
                <HListbox.Button className={cls.trigger}>
                    <Button className={cls.btn} disabled={readonly}>
                        {value ?? defaultValue}
                    </Button>
                </HListbox.Button>
                <HListbox.Options
                    className={classNames(cls.options, {}, optionsClasses)}
                >
                    {items?.map((item) => (
                        <HListbox.Option
                            key={item.value}
                            value={item.value}
                            disabled={item.disabled}
                            className={cls.option}
                        >
                            {({ active, selected }) => (
                                <li
                                    className={classNames(cls.option, {
                                        [cls.active]: active,
                                        [cls.disabled]: item.disabled,
                                    })}
                                >
                                    {selected && ">"}
                                    {item.content}
                                </li>
                            )}
                        </HListbox.Option>
                    ))}
                </HListbox.Options>
            </HListbox>
        </section>
    );
}
