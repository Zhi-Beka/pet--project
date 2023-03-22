import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider";
import { Article, ArticleType } from "entities/Article/models/types/article";
import { addQueryParams } from "shared/lib/url/addQueryParams/addQueryParams";
import {
    getArticlesByOrder,
    getArticlesBySearch,
    getArticlesBySort,
    getArticlesByType,
    getArticlesPageLimit,
    getArticlesPageNum,
} from "../selectors/articlesPageSelector";

export interface fetchArticlesProps {
    replace?: boolean;
}

export const fetchArticles = createAsyncThunk<
    Article[],
    fetchArticlesProps,
    ThunkConfig<string>
>("articles_page/fetchArticles", async (args, thunkApi) => {
    const { extra, rejectWithValue, getState } = thunkApi;

    const limit = getArticlesPageLimit(getState());
    const sort = getArticlesBySort(getState());
    const order = getArticlesByOrder(getState());
    const search = getArticlesBySearch(getState());
    const page = getArticlesPageNum(getState());
    const type = getArticlesByType(getState());

    try {
        addQueryParams({ sort, order, search });
        const response = await extra.api.get<Article[]>("/articles", {
            params: {
                _expand: "user",
                _limit: limit,
                _page: page,
                _sort: sort,
                _order: order,
                q: search,
                type: type === ArticleType.ALL ? undefined : type,
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
