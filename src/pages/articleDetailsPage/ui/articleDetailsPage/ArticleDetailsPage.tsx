/* eslint-disable max-len */
/* eslint-disable i18next/no-literal-string */
import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { ArticleDetails, ArticleList } from "entities/Article";
import { Text } from "shared/ui/Text/Text";
import { useParams } from "react-router-dom";
import { CommentList } from "entities/Comment";
import {
    DynamicModuleLoader,
    ReducersList,
} from "shared/lib/components/DynamicModuleLoader";
import { useSelector } from "react-redux";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppdispatch";
import { CommentForm } from "features/addCommentForm";
import Page from "widgets/Page/Page";
import { useInitialEffect } from "shared/lib/hooks/useInitialEffect";
import cls from "./ArticleDetailsPage.module.scss";
import {
    articleDetailsCommentReducer,
    getArticleComments,
} from "../../model/slice/ArticleDetailsCommentSlice";

import { fetchCommentsByArticleId } from "../../model/service/fetchCommentById";
import { getArticleCommentsIsLoading } from "../../model/selector/commentSelector";
import { addCommentForArticle } from "../../model/service/addCommentForArticle";
import ArticleDetailsPageHeader from "../articleDetailsPageHeader/ArticleDetailsPageHeader";
import { getArticleRecommendation } from "../../model/slice/ArticleDetailsPageRecommendationsSlice";
import { getArticleRecommendationIsLoading } from "../../model/selector/recommendationSelector";
import { fetchRecommendations } from "../../model/service/fetchArticleRecommendations";
import { articleDetailsPageReducer } from "../../model/slice";

interface ArticleDetailsPageProps {}

const reducers: ReducersList = {
    article_details_page: articleDetailsPageReducer,
};

const ArticleDetailsPage = (props: ArticleDetailsPageProps) => {
    const { t } = useTranslation("article_details");
    const { id } = useParams<{ id: string }>();
    const comments = useSelector(getArticleComments.selectAll);
    const recommendations = useSelector(getArticleRecommendation.selectAll);
    const isLoadingRecommendation = useSelector(
        getArticleRecommendationIsLoading
    );
    const isLoading = useSelector(getArticleCommentsIsLoading);
    const dispatch = useAppDispatch();

    useInitialEffect(() => {
        dispatch(fetchCommentsByArticleId(id));
        dispatch(fetchRecommendations());
    });

    if (!id) {
        return (
            <Page className={classNames("", {}, [])}>
                {t("article not found")}
            </Page>
        );
    }

    const sendComment = (value: string) => {
        dispatch(addCommentForArticle(value));
    };

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <Page className={classNames("", {}, [])}>
                <ArticleDetailsPageHeader />
                <ArticleDetails id={id} />
                <Text
                    title={t("Recommendations")}
                    className={cls.commentTitle}
                />
                <ArticleList
                    articles={recommendations}
                    isLoading={isLoadingRecommendation}
                    className={cls.recommendations}
                    target='_blank'
                />

                <Text title={t("Comments")} className={cls.commentTitle} />
                <CommentForm sendComment={sendComment} />
                <CommentList isLoading={isLoading} comments={comments} />
            </Page>
        </DynamicModuleLoader>
    );
};
export default ArticleDetailsPage;
