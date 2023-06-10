import { Text } from "shared/ui/Text/Text";
import { ArticleList } from "entities/Article";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppdispatch";
import { useInitialEffect } from "shared/lib/hooks/useInitialEffect";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
    getArticlesPageError,
    getArticlesPageIsLoading,
    getArticlesPageView,
} from "../../model/selectors/articlesPageSelector";
import { initArticlesPage } from "../../model/service/initArticlesPage/initArticlesPage";
import { getArticles } from "../../model/slice/ArticlesPageSlice";

interface ArticleInfiniteListProps {
    className?: string;
}

export const ArticleInfiniteList = ({
    className,
}: ArticleInfiniteListProps) => {
    const [searchParams] = useSearchParams();
    const dispatch = useAppDispatch();
    const data = useSelector(getArticles.selectAll);
    const isLoading = useSelector(getArticlesPageIsLoading);
    const error = useSelector(getArticlesPageError);
    const view = useSelector(getArticlesPageView);
    const { t } = useTranslation();

    useInitialEffect(() => {
        dispatch(initArticlesPage(searchParams));
    });

    if (error) {
        return <Text title={t("An error occured on loading proccess")} />;
    }
    return <ArticleList view={view} articles={data} isLoading={isLoading} />;
};
