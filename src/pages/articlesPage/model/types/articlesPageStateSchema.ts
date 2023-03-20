import { EntityState } from "@reduxjs/toolkit";
import { Article, ViewType } from "entities/Article/models/types/article";

export interface ArticlesPageStateSchema extends EntityState<Article> {
    isLoading?: boolean;
    error?: string;
    view: ViewType;
    limit?: number;
    page: number;
    hasMore: boolean;
}
