import { ViewType } from "entities/Article/models/types/article";
import { memo } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { Button, ThemeButton } from "shared/ui/Button/Button";
import TileIcon from "../../../../shared/assets/icons/tiled.svg";
import ListIcon from "../../../../shared/assets/icons/list.svg";

import cls from "./ArticlesPageSelector.module.scss";

interface ArticlesPageSelectorProps {
    view?: ViewType;
    onViewClick?: (viewArg: ViewType) => void;
}

export const ArticlesPageSelector = memo((props: ArticlesPageSelectorProps) => {
    const { view, onViewClick } = props;

    const selectorType = [
        {
            view: ViewType.TILE,
            icon: <TileIcon />,
        },
        {
            view: ViewType.LIST,
            icon: <ListIcon />,
        },
    ];

    const onClick = (newView: ViewType) => () => {
        if (onViewClick) {
            onViewClick(newView);
        }
    };

    return (
        <div className={classNames(cls.ArticlesPageSelector, {}, [])}>
            {selectorType.map((el) => {
                return (
                    <Button
                        key={el.view}
                        onClick={onClick(el.view)}
                        theme={ThemeButton.CLEAR}
                        className={classNames(
                            "",
                            {
                                [cls.notSelected]: el.view !== view,
                            },
                            [cls.icon]
                        )}
                    >
                        {el.icon}
                    </Button>
                );
            })}
        </div>
    );
});
