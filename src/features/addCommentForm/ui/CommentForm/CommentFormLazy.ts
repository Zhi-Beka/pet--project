import { lazy, FC } from "react";
import { CommentFormProps } from "./CommentForm";

export const CommentFormLazy = lazy<FC<CommentFormProps>>(
    () => import("./CommentForm")
);
