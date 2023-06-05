import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { useInitialEffect } from "shared/lib/hooks/useInitialEffect";
import { useSelector } from "react-redux";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppdispatch";
import { CommentForm } from "features/addCommentForm";
import { CommentList } from "entities/Comment";
import { Text } from "shared/ui/Text/Text";
import { fetchCommentsByArticleId } from "../../model/service/fetchCommentById";
import { getArticleCommentsIsLoading } from "../../model/selector/commentSelector";
import { addCommentForArticle } from "../../model/service/addCommentForArticle";
import { getArticleComments } from "../../model/slice/ArticleDetailsCommentSlice";

import cls from "./ArticleCommentDetails.module.scss";

interface ArticleCommentDetailsProps {
    className?: string;
    id: string;
}

export const ArticleCommentDetails = ({
    className,
    id,
}: ArticleCommentDetailsProps) => {
    const { t } = useTranslation();

    const comments = useSelector(getArticleComments.selectAll);

    const isLoading = useSelector(getArticleCommentsIsLoading);
    const dispatch = useAppDispatch();

    useInitialEffect(() => {
        dispatch(fetchCommentsByArticleId(id));
    });

    const sendComment = (value: string) => {
        dispatch(addCommentForArticle(value));
    };
    return (
        <>
            <Text title={t("Comments")} className={cls.commentTitle} />
            <CommentForm sendComment={sendComment} />
            <CommentList isLoading={isLoading} comments={comments} />
        </>
    );
};
