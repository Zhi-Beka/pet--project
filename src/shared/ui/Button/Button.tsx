/* eslint-disable object-curly-newline */
import { classNames, Mods } from "shared/lib/classNames/classNames";
import { ButtonHTMLAttributes, FC, memo, ReactNode } from "react";
import cls from "./Button.module.scss";

export enum ThemeButton {
    CLEAR = "clear",
    OUTLINE = "outline",
    OUTLINE_RED = "outline_red",
    BACKGROUND = "background",
    BACKGROUND_INVERTED = "backgroundInverted",
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: ThemeButton;
    disabled?: boolean;
    children: ReactNode;
}

export const Button = memo((props: ButtonProps) => {
    const {
        className,
        children,
        theme = ThemeButton.OUTLINE,
        disabled,

        ...otherProps
    } = props;

    const mods: Mods = {
        [cls.disabled]: disabled,
        [cls[theme]]: true,
    };

    return (
        <button
            type='button'
            className={classNames(cls.button, mods, [className])}
            {...otherProps}
            disabled={disabled}
        >
            {children}
        </button>
    );
});
