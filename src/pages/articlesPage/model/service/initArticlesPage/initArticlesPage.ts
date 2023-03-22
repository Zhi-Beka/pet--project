import { SortField } from "pages/articlesPage/model/types/articlesPageStateSchema";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider";
import { OrderType } from "../../types/articlesPageStateSchema";
import { getArticlesInit } from "../../selectors/articlesPageSelector";
import { articlesPageAction } from "../../slice/ArticlesPageSlice";
import { fetchArticles } from "../fetchArticles";

export const initArticlesPage = createAsyncThunk<
    void,
    URLSearchParams,
    ThunkConfig<string>
>("articles_page/initArticlesPage", async (searchParams, thunkApi) => {
    const { getState, dispatch } = thunkApi;
    const init = getArticlesInit(getState());
    const sortFromUrl = searchParams.get("sort") as SortField;
    const orderFromUrl = searchParams.get("order") as OrderType;
    const searchFromUrl = searchParams.get("search");

    if (!init) {
        if (sortFromUrl) {
            dispatch(articlesPageAction.setSort(sortFromUrl));
        }
        if (orderFromUrl) {
            dispatch(articlesPageAction.setOrder(orderFromUrl));
        }
        if (searchFromUrl) {
            dispatch(articlesPageAction.setSearch(searchFromUrl));
        }

        dispatch(articlesPageAction.initState());
        dispatch(fetchArticles({}));
    }
});
