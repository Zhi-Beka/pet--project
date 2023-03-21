import { ViewType } from "entities/Article/models/types/article";
import { StateSchema } from "app/providers/StoreProvider";

export const getArticlesPageIsLoading = (state: StateSchema) =>
    state.articles_page?.isLoading;
export const getArticlesPageError = (state: StateSchema) =>
    state.articles_page?.error;

export const getArticlesPageView = (state: StateSchema) =>
    state.articles_page?.view || ViewType.TILE;

export const getArticlesPageNum = (state: StateSchema) =>
    state.articles_page?.page || 1;
export const getArticlesPageLimit = (state: StateSchema) =>
    state.articles_page?.limit || 9;
export const getArticlesPageHasMore = (state: StateSchema) =>
    state.articles_page?.hasMore;

export const getArticlesInit = (state: StateSchema) =>
    state.articles_page?._init;
