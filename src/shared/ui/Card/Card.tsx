import { HTMLAttributes, memo, ReactNode } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Card.module.scss";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
    className?: string;
    children: ReactNode;
}

const Card = (props: CardProps) => {
    const { className, children, ...otherProps } = props;

    return (
        <article
            className={classNames(cls.Card, {}, [className])}
            {...otherProps}
        >
            {children}
        </article>
    );
};
export default Card;
