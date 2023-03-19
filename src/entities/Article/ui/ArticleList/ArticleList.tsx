/* eslint-disable i18next/no-literal-string */
import { memo } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { Article, ViewType } from "../../models/types/article";
import cls from "./ArticleList.module.scss";
import { ArticleListItem } from "../ArticleListItem/ArticleListItem";
import { ArticleListItemSkeleton } from "../ArticleListItem/ArticleListItemSkeleton";

interface ArticleListProps {
    articles: any; // Article[];
    isLoading?: boolean;
    view?: ViewType;
}

const getSkeletons = (view: ViewType) =>
    new Array(view === ViewType.TILE ? 9 : 3)
        .fill(0)
        .map((item, index) => (
            <ArticleListItemSkeleton
                className={cls.card}
                key={view}
                view={view}
            />
        ));

export const ArticleList = memo((props: ArticleListProps) => {
    const { articles, isLoading, view = ViewType.TILE } = props;

    if (isLoading) {
        return (
            <div className={classNames(cls.ArticleList, {}, [cls[view]])}>
                {getSkeletons(view)}
            </div>
        );
    }

    const renderArticle = (article: Article) => {
        return <ArticleListItem article={article} view={view} />;
    };

    return (
        <div className={classNames(cls.ArticleList, {}, [])}>
            {articles.length > 0 ? articles.map(renderArticle) : null}
        </div>
    );
});
