/* eslint-disable i18next/no-literal-string */
import { HTMLAttributeAnchorTarget, memo, useCallback } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { Text, TextAlign } from "shared/ui/Text/Text";
import Card from "shared/ui/Card/Card";
import { Avatar } from "shared/ui/Avatar/Avatar";
import { useNavigate } from "react-router-dom";
import { RoutePath } from "app/providers/router/config/routeConfig";
import { Button } from "shared/ui/Button/Button";
import EyeIcon from "shared/assets/icons/eye.svg";
import { AppLink } from "shared/ui/AppLink/AppLink";
import {
    Article,
    ArticleBlockType,
    ArticleTextBlock,
    ViewType,
} from "../../models/types/article";
import cls from "./ArticleListItem.module.scss";
import ArticleTextBlockComponent from "../ArticleTextBlock/ArticleTextBlockComponent";

interface ArticleListItemProps {
    className?: string;
    article: Article;
    view?: ViewType;
    isLoading?: boolean;
    target?: HTMLAttributeAnchorTarget;
}

export const ArticleListItem = memo((props: ArticleListItemProps) => {
    const { t } = useTranslation();
    const {
        article,
        view = ViewType.LIST,
        className,
        isLoading,
        target,
    } = props;

    const types = (
        <Text
            text={article.type.join(", ")}
            className={cls.types}
            align={TextAlign.LEFT}
        />
    );
    const views = (
        <>
            <Text text={String(article.views)} className={cls.views} />
            <EyeIcon />
        </>
    );

    if (view === ViewType.LIST) {
        const textBlock = article.blocks.find(
            (block) => block.type === ArticleBlockType.TEXT
        ) as ArticleTextBlock;

        return (
            <div
                className={classNames(cls.ArticleListItem, {}, [
                    className,
                    cls[view],
                ])}
            >
                <Card className={cls.card}>
                    <div className={cls.header}>
                        <Avatar size={30} src={article.user.avatar} />
                        <Text
                            text={article.user.username}
                            className={cls.username}
                        />
                        <Text text={article.createdAt} className={cls.date} />
                    </div>
                    <Text title={article.title} className={cls.title} />
                    {types}
                    <img
                        src={article.img}
                        className={cls.img}
                        alt={article.title}
                    />
                    {textBlock && (
                        <ArticleTextBlockComponent
                            block={textBlock}
                            className={cls.textBlock}
                        />
                    )}
                    <div className={cls.footer}>
                        <AppLink
                            target={target}
                            to={RoutePath.articles_details + article.id}
                        >
                            <Button>{t("Читать далее...")}</Button>
                        </AppLink>

                        {views}
                    </div>
                </Card>
            </div>
        );
    }

    return (
        <AppLink
            target={target}
            to={RoutePath.articles_details + article.id}
            className={classNames(cls.ArticleListItem, {}, [
                className,
                cls[view],
            ])}
        >
            <Card className={cls.card}>
                <div className={cls.imageWrapper}>
                    <img
                        alt={article.title}
                        src={article.img}
                        className={cls.img}
                    />
                    <Text text={article.createdAt} className={cls.date} />
                </div>
                <div className={cls.infoWrapper}>
                    {types}
                    {views}
                </div>
                <Text text={article.title} className={cls.title} />
            </Card>
        </AppLink>
    );
});
