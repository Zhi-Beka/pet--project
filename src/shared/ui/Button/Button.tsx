/* eslint-disable object-curly-newline */
import { classNames } from "shared/lib/classNames/classNames";
import { ButtonHTMLAttributes, FC } from "react";
import cls from "./Button.module.scss";

export enum ThemeButton {
    CLEAR = "clear",
    OUTLINE = "outline",
    BACKGROUND = "background",
    BACKGROUND_INVERTED = "backgroundInverted",
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: ThemeButton;
    disabled?: boolean;
}

export const Button: FC<ButtonProps> = (props) => {
    const {
        className,
        children,
        theme,
        disabled,

        ...otherProps
    } = props;

    return (
        <button
            type='button'
            className={classNames(cls.button, { [cls.disabled]: disabled }, [
                className,
                cls[theme],
            ])}
            {...otherProps}
            disabled={disabled}
        >
            {children}
        </button>
    );
};
