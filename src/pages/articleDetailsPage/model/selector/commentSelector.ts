import { StateSchema } from "app/providers/StoreProvider";

export const getArticleCommentsIsLoading = (state: StateSchema) =>
    state.article_details_page?.comments.isLoading;
export const getArticleCommentsError = (state: StateSchema) =>
    state.article_details_page?.comments.error;
