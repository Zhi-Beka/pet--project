/* eslint-disable max-len */
/* eslint-disable i18next/no-literal-string */
import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { ArticleDetails } from "entities/Article";
import { Text } from "shared/ui/Text/Text";
import { useParams } from "react-router-dom";
import { CommentList } from "entities/Comment";
import {
    DynamicModuleLoader,
    ReducersList,
} from "shared/lib/components/DynamicModuleLoader";
import { useSelector } from "react-redux";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppdispatch";
import { useCallback } from "react";
import { CommentForm } from "features/addCommentForm";
import cls from "./ArticleDetailsPage.module.scss";
import {
    articleDetailsCommentReducer,
    getArticleComments,
} from "../model/slice/ArticleDetailsCommentSlice";
// eslint-disable-next-line import/order
import { useInitialEffect } from "shared/lib/hooks/useInitialEffect";
import { fetchCommentsByArticleId } from "../model/service/fetchCommentById";
import { getArticleCommentsIsLoading } from "../model/selector/commentSelector";
import { addCommentForArticle } from "../model/service/addCommentForArticle";

interface ArticleDetailsPageProps {}

const reducers: ReducersList = {
    article_details_comment: articleDetailsCommentReducer,
};

const ArticleDetailsPage = (props: ArticleDetailsPageProps) => {
    const { t } = useTranslation("article_details");
    const { id } = useParams<{ id: string }>();
    const comments = useSelector(getArticleComments.selectAll);
    const dispatch = useAppDispatch();
    const isLoading = useSelector(getArticleCommentsIsLoading);
    useInitialEffect(() => {
        dispatch(fetchCommentsByArticleId(id));
    });

    if (!id) {
        return (
            <div className={classNames("", {}, [])}>
                {t("article not found")}
            </div>
        );
    }

    const sendComment = (value: string) => {
        dispatch(addCommentForArticle(value));
    };

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div className={classNames("", {}, [])}>
                <ArticleDetails id={id} />
                <Text title={t("Comments")} className={cls.commentTitle} />
                <CommentForm sendComment={sendComment} />
                <CommentList isLoading={isLoading} comments={comments} />
            </div>
        </DynamicModuleLoader>
    );
};
export default ArticleDetailsPage;
