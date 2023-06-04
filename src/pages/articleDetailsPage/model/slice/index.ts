import { combineReducers } from "@reduxjs/toolkit";
import { ArticleDetailsPageSchema } from "../types";
import { articleDetailsCommentReducer } from "./ArticleDetailsCommentSlice";
import { articleDetailsRecommendationReducer } from "./ArticleDetailsPageRecommendationsSlice";

export const articleDetailsPageReducer =
    combineReducers<ArticleDetailsPageSchema>({
        recommendations: articleDetailsRecommendationReducer,
        comments: articleDetailsCommentReducer,
    });
