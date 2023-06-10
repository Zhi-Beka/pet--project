import { classNames } from "shared/lib/classNames/classNames";
import { DynamicModuleLoader } from "shared/lib/components/DynamicModuleLoader";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppdispatch";

import { useCallback } from "react";
import Page from "widgets/Page/Page";

import { articlesPageReducer } from "../../model/slice/ArticlesPageSlice";

import { fetchNextArticlesPage } from "../../model/service/fetchArticlesNextPage/fetchNextArticlesPage";
import ArticlesPageFilters from "../ArticlesPageFilters/ArticlesPageFilters";
import { ArticleInfiniteList } from "../ArticleInfiniteList/ArticleInfiniteList";

interface ArticlesPageProps {}

const reducers = {
    articles_page: articlesPageReducer,
};

const ArticlesPage = (props: ArticlesPageProps) => {
    const dispatch = useAppDispatch();

    const onLoadNextPart = useCallback(() => {
        dispatch(fetchNextArticlesPage());
    }, [dispatch]);

    return (
        <DynamicModuleLoader reducers={reducers}>
            <Page
                onScrollEnd={onLoadNextPart}
                className={classNames("", {}, [])}
            >
                <ArticlesPageFilters />
                <ArticleInfiniteList />
            </Page>
        </DynamicModuleLoader>
    );
};
export default ArticlesPage;
