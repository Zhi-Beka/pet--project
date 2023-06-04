import { StateSchema } from "app/providers/StoreProvider";

export const getArticleRecommendationIsLoading = (state: StateSchema) =>
    state.article_details_page?.recommendations.isLoading;
export const getArticleRecommendationError = (state: StateSchema) =>
    state.article_details_page?.recommendations.error;
