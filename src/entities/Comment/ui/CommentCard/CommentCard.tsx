/* eslint-disable i18next/no-literal-string */
import { RoutePath } from "app/providers/router/config/routeConfig";
import { IComment } from "entities/Comment/model/types/comment";
import { memo } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { AppLink } from "shared/ui/AppLink/AppLink";
import { Avatar } from "shared/ui/Avatar/Avatar";
import Skeleton from "shared/ui/Skeleton/Skeleton";
import { Text, TextAlign } from "shared/ui/Text/Text";

import cls from "./CommentCard.module.scss";

interface CommentCardProps {
    className?: string;
    comment?: IComment;
    isLoading?: boolean;
}

const CommentCard = memo((props: CommentCardProps) => {
    const { comment, className, isLoading } = props;

    if (isLoading) {
        return (
            <div
                className={classNames(cls.CommentCard, {}, [
                    className,
                    cls.loading,
                ])}
            >
                <div className={cls.avatar}>
                    <Skeleton width={30} height={30} border='50%' />
                    <Skeleton width='50%' height={20} />
                </div>
                <Skeleton width='100%' height={40} />
            </div>
        );
    }
    if (!comment) {
        return null;
    }
    return (
        <div className={classNames(cls.CommentCard, {}, [className])}>
            <AppLink
                to={`${RoutePath.profile}${comment.user?.id}`}
                className={cls.avatar}
            >
                {comment.user?.avatar ? (
                    <Avatar src={comment.user?.avatar} size={50} />
                ) : null}
                <Text title={comment.user?.username} />
            </AppLink>

            <Text text={comment.text} align={TextAlign.LEFT} />
        </div>
    );
});
export default CommentCard;
