import { classNames } from "shared/lib/classNames/classNames";
import { ArticleList, ArticlesPageSelector, ViewType } from "entities/Article";
import { DynamicModuleLoader } from "shared/lib/components/DynamicModuleLoader";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppdispatch";
import { useInitialEffect } from "shared/lib/hooks/useInitialEffect";
import { useSelector } from "react-redux";
import { useCallback } from "react";
import Page from "widgets/Page/Page";
import {
    articlesPageAction,
    articlesPageReducer,
    getArticles,
} from "../model/slice/ArticlesPageSlice";
import {
    getArticlesPageIsLoading,
    getArticlesPageView,
} from "../model/selectors/articlesPageSelector";
import { fetchNextArticlesPage } from "../model/service/fetchArticlesNextPage/fetchNextArticlesPage";
import { initArticlesPage } from "../model/service/initArticlesPage/initArticlesPage";

interface ArticlesPageProps {}

const reducers = {
    articles_page: articlesPageReducer,
};

const ArticlesPage = (props: ArticlesPageProps) => {
    const dispatch = useAppDispatch();
    const data = useSelector(getArticles.selectAll);
    const isLoading = useSelector(getArticlesPageIsLoading);
    const view = useSelector(getArticlesPageView);

    useInitialEffect(() => {
        dispatch(initArticlesPage());
    });

    const onLoadNextPart = useCallback(() => {
        dispatch(fetchNextArticlesPage());
    }, [dispatch]);

    const onViewSelector = useCallback(
        (newView: ViewType) => {
            dispatch(articlesPageAction.setView(newView));
        },
        [dispatch]
    );

    return (
        <DynamicModuleLoader reducers={reducers}>
            <Page
                onScrollEnd={onLoadNextPart}
                className={classNames("", {}, [])}
            >
                <ArticlesPageSelector
                    view={view}
                    onViewClick={onViewSelector}
                />
                <ArticleList
                    view={view}
                    articles={data}
                    isLoading={isLoading}
                />
            </Page>
        </DynamicModuleLoader>
    );
};
export default ArticlesPage;
