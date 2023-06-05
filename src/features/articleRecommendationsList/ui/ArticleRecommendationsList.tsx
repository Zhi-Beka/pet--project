import { Text } from "shared/ui/Text/Text";
import { ArticleList } from "entities/Article";
import { getArticleRecommendationIsLoading } from "pages/articleDetailsPage/model/selector/recommendationSelector";
import { getArticleRecommendation } from "pages/articleDetailsPage/model/slice/ArticleDetailsPageRecommendationsSlice";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import cls from "./ArticleRecommendationsList.module.scss";
import { useArticleRecommendationListApi } from "../api/articleRecommendationsApi";

interface ArticleRecommendationsListProps {
    className?: string;
}

export const ArticleRecommendationsList = ({
    className,
}: ArticleRecommendationsListProps) => {
    const { t } = useTranslation();
    const {
        data: articles,
        isLoading,
        error,
    } = useArticleRecommendationListApi(4);

    if (isLoading || error) {
        return null;
    }

    return (
        <>
            <Text title={t("Recommendations")} className={cls.commentTitle} />
            <ArticleList
                articles={articles}
                isLoading={isLoading}
                className={cls.recommendations}
                // eslint-disable-next-line i18next/no-literal-string
                target='_blank'
            />
        </>
    );
};
