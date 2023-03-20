import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider";
import { Article } from "entities/Article/models/types/article";
import { getArticlesPageLimit } from "../selectors/articlesPageSelector";

export interface fetchArticlesProps {
    page: number;
}

export const fetchArticles = createAsyncThunk<
    Article[],
    fetchArticlesProps,
    ThunkConfig<string>
>("articles_page/fetchArticles", async (args, thunkApi) => {
    const { extra, rejectWithValue, getState } = thunkApi;
    const { page = 1 } = args;
    const limit = getArticlesPageLimit(getState());
    try {
        const response = await extra.api.get<Article[]>("/articles", {
            params: {
                _expand: "user",
                _limit: limit,
                _page: page,
            },
        });

        if (!response.data) {
            throw new Error();
        }

        return response.data;
    } catch (e) {
        return rejectWithValue("error");
    }
});
