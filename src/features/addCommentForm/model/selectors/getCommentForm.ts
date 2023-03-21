import { StateSchema } from "app/providers/StoreProvider";

export const getTextCommentForm = (state: StateSchema) =>
    state.comment_form?.text ?? "";

export const getErrorCommentForm = (state: StateSchema) =>
    state.comment_form?.error;
