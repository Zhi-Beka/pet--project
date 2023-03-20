import { classNames } from "shared/lib/classNames/classNames";
import { ArticleList, ArticlesPageSelector, ViewType } from "entities/Article";
import { DynamicModuleLoader } from "shared/lib/components/DynamicModuleLoader";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppdispatch";
import { useInitialEffect } from "shared/lib/hooks/useInitialEffect";
import { useSelector } from "react-redux";
import { useCallback } from "react";
import Page from "shared/ui/Page/Page";
import {
    articlesPageAction,
    articlesPageReducer,
    getArticles,
} from "../model/slice/ArticlesPageSlice";
import { fetchArticles } from "../model/service/fetchArticles";
import {
    getArticlesPageError,
    getArticlesPageHasMore,
    getArticlesPageIsLoading,
    getArticlesPageNum,
    getArticlesPageView,
} from "../model/selectors/articlesPageSelector";
import { fetchNextArticlesPage } from "../model/service/fetchArticlesNextPage/fetchNextArticlesPage";

interface ArticlesPageProps {}

const reducers = {
    articles_page: articlesPageReducer,
};

const ArticlesPage = (props: ArticlesPageProps) => {
    const dispatch = useAppDispatch();
    const data = useSelector(getArticles.selectAll);
    const error = useSelector(getArticlesPageError);
    const isLoading = useSelector(getArticlesPageIsLoading);
    const view = useSelector(getArticlesPageView);
    const page = useSelector(getArticlesPageNum);
    const hasMore = useSelector(getArticlesPageHasMore);

    useInitialEffect(() => {
        dispatch(articlesPageAction.initState());
        dispatch(fetchArticles({ page: 1 }));
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
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
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
