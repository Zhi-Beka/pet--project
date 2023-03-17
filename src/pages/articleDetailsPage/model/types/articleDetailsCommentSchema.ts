import { EntityState } from "@reduxjs/toolkit";
import { IComment } from "entities/Comment/model/types/comment";

export interface ArticleDetailsCommentSchema extends EntityState<IComment> {
    isLoading?: boolean;
    error?: string;
}
