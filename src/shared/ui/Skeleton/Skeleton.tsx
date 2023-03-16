/* eslint-disable i18next/no-literal-string */
import { CSSProperties } from "react";
import { classNames } from "shared/lib/classNames/classNames";

import cls from "./Skeleton.module.scss";

interface SkeletonProps {
    className?: string;
    height?: string | number;
    width?: string | number;
    border?: string;
}

const Skeleton = (props: SkeletonProps) => {
    const { height, width, border, className } = props;

    const styles: CSSProperties = {
        width,
        height,
        borderRadius: border,
    };

    return <div className={classNames(cls.Skeleton, {}, [])} style={styles} />;
};
export default Skeleton;
