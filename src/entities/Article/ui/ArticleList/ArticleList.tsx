/* eslint-disable react/no-unused-prop-types */
/* eslint-disable i18next/no-literal-string */
import { HTMLAttributeAnchorTarget, memo } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { Article, ViewType } from "../../models/types/article";
import cls from "./ArticleList.module.scss";
import { ArticleListItem } from "../ArticleListItem/ArticleListItem";
import { ArticleListItemSkeleton } from "../ArticleListItem/ArticleListItemSkeleton";

interface ArticleListProps {
    className?: string;
    articles: Article[];
    isLoading?: boolean;
    view?: ViewType;
    target?: HTMLAttributeAnchorTarget;
}

const getSkeletons = (view: ViewType) =>
    new Array(view === ViewType.TILE ? 9 : 3).fill(0).map((item, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <ArticleListItemSkeleton key={index} className={cls.card} view={view} />
    ));

export const ArticleList = memo((props: ArticleListProps) => {
    const {
        articles,
        isLoading,
        view = ViewType.TILE,
        className,
        target,
    } = props;

    const renderArticle = (article: Article) => {
        return (
            <ArticleListItem
                key={article.id}
                article={article}
                view={view}
                className={cls.articleItem}
                target={target}
            />
        );
    };

    return (
        <div
            className={classNames(cls.ArticleList, {}, [className, cls[view]])}
        >
            {articles.length > 0 ? articles.map(renderArticle) : null}
            {isLoading && getSkeletons(view)}
        </div>
    );
});
