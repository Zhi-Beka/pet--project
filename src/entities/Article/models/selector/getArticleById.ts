import { StateSchema } from "app/providers/StoreProvider";

export const getArticleIsLoading = (state: StateSchema) =>
    state?.article_details?.isLoading;
export const getArticleError = (state: StateSchema) =>
    state?.article_details?.error;
export const getArticleData = (state: StateSchema) =>
    state?.article_details?.data;
