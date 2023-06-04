import {
    createEntityAdapter,
    createSlice,
    PayloadAction,
} from "@reduxjs/toolkit";
import { StateSchema } from "app/providers/StoreProvider";
import { Article } from "entities/Article";
import { ArticleDetailsRecommendationSchema } from "../types/articleDetailsRecommendationsSchema";
import { fetchRecommendations } from "../service/fetchArticleRecommendations";

const recommendationAdapter = createEntityAdapter<Article>({
    selectId: (article) => article.id,
});

export const getArticleRecommendation =
    recommendationAdapter.getSelectors<StateSchema>(
        (state) =>
            state.article_details_page?.recommendations ||
            recommendationAdapter.getInitialState()
    );

const articleDetailsRecommendationSlice = createSlice({
    name: "recommendation_slice",
    initialState:
        recommendationAdapter.getInitialState<ArticleDetailsRecommendationSchema>(
            {
                isLoading: false,
                error: undefined,
                ids: [],
                entities: {},
            }
        ),
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchRecommendations.pending, (state) => {})
            .addCase(
                fetchRecommendations.fulfilled,
                (state, action: PayloadAction<Article[]>) => {
                    state.isLoading = false;
                    recommendationAdapter.setAll(state, action.payload);
                }
            )
            .addCase(fetchRecommendations.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { reducer: articleDetailsRecommendationReducer } =
    articleDetailsRecommendationSlice;
