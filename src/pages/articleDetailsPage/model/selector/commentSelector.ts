import { StateSchema } from "app/providers/StoreProvider";

export const getArticleCommentsIsLoading = (state: StateSchema) =>
    state.article_details_comment?.isLoading;
export const getArticleCommentsError = (state: StateSchema) =>
    state.article_details_comment?.error;
