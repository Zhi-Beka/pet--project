/* eslint-disable no-unreachable */
import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider/config/StateSchema";
import { Article } from "../types/article";

export const fetchArticleById = createAsyncThunk<
    Article,
    string,
    ThunkConfig<string>
>("article_details/fetchArticleById", async (id, thunkApi) => {
    const { extra, rejectWithValue } = thunkApi;
    try {
        const response = await extra.api.get<Article>(`/articles/${id}`);

        if (!response.data) {
            throw new Error("");
        }
        return response.data;
    } catch (error) {
        return rejectWithValue("error!");
    }
});
