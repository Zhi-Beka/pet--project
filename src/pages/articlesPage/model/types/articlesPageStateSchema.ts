import { EntityState } from "@reduxjs/toolkit";
import {
    Article,
    ArticleType,
    ViewType,
} from "entities/Article/models/types/article";

export type OrderType = "desc" | "asc";

export const enum SortField {
    VIEWS = "views",
    TITLE = "title",
    CREATED = "createdAt",
}

export interface ArticlesPageStateSchema extends EntityState<Article> {
    isLoading?: boolean;
    error?: string;

    // pagination
    limit: number;
    page: number;
    hasMore: boolean;

    // filters
    view: ViewType;
    sort: SortField;
    order: OrderType;
    search: string;
    type: ArticleType;

    _init: boolean;
}
