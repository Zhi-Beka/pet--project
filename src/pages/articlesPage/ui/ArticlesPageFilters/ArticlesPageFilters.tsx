import { memo, useCallback } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import {
    ArticleSelectSort,
    ArticlesPageSelector,
    ViewType,
} from "entities/Article";
import { articlesPageAction } from "pages/articlesPage/model/slice/ArticlesPageSlice";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppdispatch";
import {
    getArticlesByOrder,
    getArticlesBySearch,
    getArticlesBySort,
    getArticlesByType,
    getArticlesPageView,
} from "pages/articlesPage/model/selectors/articlesPageSelector";
import { useSelector } from "react-redux";

import { Input } from "shared/ui/Input/Input";

import {
    OrderType,
    SortField,
} from "pages/articlesPage/model/types/articlesPageStateSchema";
import { fetchArticles } from "pages/articlesPage/model/service/fetchArticles";
import { useDebounce } from "shared/lib/hooks/useDebounce/useDebounce";
import Tabs, { TabItem } from "shared/ui/Tabs/Tabs";
import { ArticleType } from "entities/Article/models/types/article";
import cls from "./ArticlesPageFilters.module.scss";

interface ArticlesPageFiltersProps {}

const ArticlesPageFilters = memo((props: ArticlesPageFiltersProps) => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const view = useSelector(getArticlesPageView);
    const sort = useSelector(getArticlesBySort);
    const order = useSelector(getArticlesByOrder);
    const search = useSelector(getArticlesBySearch);
    const type = useSelector(getArticlesByType);

    const fetchData = useCallback(() => {
        dispatch(fetchArticles({ replace: true }));
    }, [dispatch]);

    const debounceFetchData = useDebounce(fetchData, 1000);

    const onViewSelector = useCallback(
        (newView: ViewType) => {
            dispatch(articlesPageAction.setView(newView));
        },
        [dispatch]
    );
    const onChangesSort = useCallback(
        (newSort: SortField) => {
            dispatch(articlesPageAction.setSort(newSort));
            dispatch(articlesPageAction.setPage(1));
            debounceFetchData();
        },
        [dispatch, debounceFetchData]
    );
    const onChangeOrder = useCallback(
        (newOrder: OrderType) => {
            dispatch(articlesPageAction.setOrder(newOrder));
            dispatch(articlesPageAction.setPage(1));
            debounceFetchData();
        },
        [dispatch, debounceFetchData]
    );

    const onChangeSearch = useCallback(
        (newValue: string) => {
            dispatch(articlesPageAction.setSearch(newValue));
            dispatch(articlesPageAction.setPage(1));
            debounceFetchData();
        },
        [dispatch, debounceFetchData]
    );

    const onHandleTabs = useCallback(
        (tab: TabItem) => {
            dispatch(articlesPageAction.setType(tab.value as ArticleType));
            dispatch(articlesPageAction.setPage(1));
            debounceFetchData();
        },
        [dispatch, debounceFetchData]
    );
    const typeTabs: TabItem[] = [
        {
            value: ArticleType.ALL,
            content: t("Все статьи"),
        },
        {
            value: ArticleType.IT,
            content: t("Айти"),
        },
        {
            value: ArticleType.ECONOMICS,
            content: t("Экономика"),
        },
        {
            value: ArticleType.SCIENCE,
            content: t("Наука"),
        },
    ];

    return (
        <div className={classNames(cls.ArticlesPageFilters, {}, [])}>
            <div className={cls.filtersBox}>
                <ArticleSelectSort
                    sort={sort}
                    order={order}
                    onChangeOrder={onChangeOrder}
                    onChangeSort={onChangesSort}
                />

                <Input
                    placeholder={t("search")}
                    value={search}
                    onChange={onChangeSearch}
                />

                <Tabs tabs={typeTabs} value={type} onTabClick={onHandleTabs} />
            </div>

            <ArticlesPageSelector view={view} onViewClick={onViewSelector} />
        </div>
    );
});
export default ArticlesPageFilters;
