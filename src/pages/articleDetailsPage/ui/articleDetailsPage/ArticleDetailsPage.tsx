/* eslint-disable max-len */
/* eslint-disable i18next/no-literal-string */
import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { ArticleDetails } from "entities/Article";
import { useParams } from "react-router-dom";

import {
    DynamicModuleLoader,
    ReducersList,
} from "shared/lib/components/DynamicModuleLoader";

import Page from "widgets/Page/Page";
import { ArticleRecommendationsList } from "features/articleRecommendationsList";
import ArticleDetailsPageHeader from "../articleDetailsPageHeader/ArticleDetailsPageHeader";
import { articleDetailsPageReducer } from "../../model/slice";
import { ArticleCommentDetails } from "../articleCommentDetails/ArticleCommentDetails";

interface ArticleDetailsPageProps {}

const reducers: ReducersList = {
    article_details_page: articleDetailsPageReducer,
};

const ArticleDetailsPage = (props: ArticleDetailsPageProps) => {
    const { t } = useTranslation("article_details");
    const { id } = useParams<{ id: string }>();

    if (!id) {
        return (
            <Page className={classNames("", {}, [])}>
                {t("article not found")}
            </Page>
        );
    }

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <Page>
                <ArticleDetailsPageHeader />
                <ArticleDetails id={id} />
                <ArticleRecommendationsList />
                <ArticleCommentDetails id={id} />
            </Page>
        </DynamicModuleLoader>
    );
};
export default ArticleDetailsPage;
