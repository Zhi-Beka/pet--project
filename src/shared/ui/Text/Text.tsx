import { classNames } from "shared/lib/classNames/classNames";
import { Template } from "webpack";
import cls from "./Text.module.scss";

export enum themeText {
    PRIMARY = "primary",
    ERROR = "error",
}
interface TextProps {
    className?: string;
    title?: string;
    text?: string;
    theme?: themeText;
}

export const Text = ({
    className,
    text,
    title,
    theme = themeText.PRIMARY,
}: TextProps) => {
    return (
        <div
            className={classNames(cls.Text, { [cls[theme]]: true }, [
                className,
            ])}
        >
            {title && <p className={cls.title}>{title}</p>}
            {text && <p className={cls.text}>{text}</p>}
        </div>
    );
};
