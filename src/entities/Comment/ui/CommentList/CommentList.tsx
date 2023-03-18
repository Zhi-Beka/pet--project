/* eslint-disable i18next/no-literal-string */
import { IComment } from "entities/Comment/model/types/comment";
import { memo } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import { Text } from "shared/ui/Text/Text";
import CommentCard from "../CommentCard/CommentCard";
import cls from "./CommentList.module.scss";

interface CommentListProps {
    comments?: IComment[];
    isLoading?: boolean;
}

const CommentList = memo((props: CommentListProps) => {
    const { comments, isLoading } = props;
    const { t } = useTranslation("");

    if (isLoading) {
        return (
            <div className={classNames(cls.CommentList, {}, [])}>
                <CommentCard isLoading />
                <CommentCard isLoading />
                <CommentCard isLoading />
            </div>
        );
    }

    return (
        <div className={classNames(cls.CommentList, {}, [])}>
            {comments?.length ? (
                comments?.map((comment) => {
                    return (
                        <CommentCard
                            key={comment.id}
                            comment={comment}
                            className={cls.comment}
                            isLoading={isLoading}
                        />
                    );
                })
            ) : (
                <Text text={t("Comments not found")} />
            )}
        </div>
    );
});
export default CommentList;
