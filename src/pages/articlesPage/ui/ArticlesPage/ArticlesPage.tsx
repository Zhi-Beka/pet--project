import { classNames } from "shared/lib/classNames/classNames";
import { ArticleList } from "entities/Article";
import { DynamicModuleLoader } from "shared/lib/components/DynamicModuleLoader";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppdispatch";
import { useInitialEffect } from "shared/lib/hooks/useInitialEffect";
import { useSelector } from "react-redux";
import { useCallback } from "react";
import Page from "widgets/Page/Page";
import { useSearchParams } from "react-router-dom";
import {
    articlesPageReducer,
    getArticles,
} from "../../model/slice/ArticlesPageSlice";
import {
    getArticlesPageIsLoading,
    getArticlesPageView,
} from "../../model/selectors/articlesPageSelector";
import { fetchNextArticlesPage } from "../../model/service/fetchArticlesNextPage/fetchNextArticlesPage";
import { initArticlesPage } from "../../model/service/initArticlesPage/initArticlesPage";
import ArticlesPageFilters from "../ArticlesPageFilters/ArticlesPageFilters";

interface ArticlesPageProps {}

const reducers = {
    articles_page: articlesPageReducer,
};

const ArticlesPage = (props: ArticlesPageProps) => {
    const dispatch = useAppDispatch();
    const data = useSelector(getArticles.selectAll);
    const isLoading = useSelector(getArticlesPageIsLoading);
    const view = useSelector(getArticlesPageView);
    const [searchParams] = useSearchParams();

    const onLoadNextPart = useCallback(() => {
        dispatch(fetchNextArticlesPage());
    }, [dispatch]);

    useInitialEffect(() => {
        dispatch(initArticlesPage(searchParams));
    });

    return (
        <DynamicModuleLoader reducers={reducers}>
            <Page
                onScrollEnd={onLoadNextPart}
                className={classNames("", {}, [])}
            >
                <ArticlesPageFilters />

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
