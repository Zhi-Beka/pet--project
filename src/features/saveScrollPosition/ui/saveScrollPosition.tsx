import { classNames } from "shared/lib/classNames/classNames";

import cls from "./saveScrollPosition.module.scss";

interface saveScrollPositionProps {
    className?: string;
}

const saveScrollPosition = (props: saveScrollPositionProps) => {
    const { className } = props;

    return (
        // eslint-disable-next-line i18next/no-literal-string
        <div className={classNames(cls.saveScrollPosition, {}, [])}>
            saveScrollPosition
        </div>
    );
};
export default saveScrollPosition;
