/* eslint-disable max-len */
/* eslint-disable i18next/no-literal-string */
import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { ArticleDetails } from "entities/Article";
import { Text } from "shared/ui/Text/Text";
import { useNavigate, useParams } from "react-router-dom";
import { CommentList } from "entities/Comment";
import {
    DynamicModuleLoader,
    ReducersList,
} from "shared/lib/components/DynamicModuleLoader";
import { useSelector } from "react-redux";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppdispatch";
import { useCallback } from "react";
import { CommentForm } from "features/addCommentForm";
import { Button } from "shared/ui/Button/Button";
import { RoutePath } from "app/providers/router/config/routeConfig";
import Page from "widgets/Page/Page";
import { useInitialEffect } from "shared/lib/hooks/useInitialEffect";
import cls from "./ArticleDetailsPage.module.scss";
import {
    articleDetailsCommentReducer,
    getArticleComments,
} from "../model/slice/ArticleDetailsCommentSlice";

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
    const navigate = useNavigate();
    const isLoading = useSelector(getArticleCommentsIsLoading);

    const backToList = useCallback(() => {
        navigate(RoutePath.articles);
    }, [navigate]);

    useInitialEffect(() => {
        dispatch(fetchCommentsByArticleId(id));
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
                <Button onClick={backToList}>Back</Button>
                <ArticleDetails id={id} />
                <Text title={t("Comments")} className={cls.commentTitle} />
                <CommentForm sendComment={sendComment} />
                <CommentList isLoading={isLoading} comments={comments} />
            </Page>
        </DynamicModuleLoader>
    );
};
export default ArticleDetailsPage;
