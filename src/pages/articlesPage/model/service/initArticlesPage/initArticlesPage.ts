import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider";
import { getArticlesInit } from "../../selectors/articlesPageSelector";
import { articlesPageAction } from "../../slice/ArticlesPageSlice";
import { fetchArticles } from "../fetchArticles";

export const initArticlesPage = createAsyncThunk<
    void,
    void,
    ThunkConfig<string>
>("articles_page/initArticlesPage", async (_, thunkApi) => {
    const { getState, dispatch } = thunkApi;
    const init = getArticlesInit(getState());

    if (!init) {
        dispatch(articlesPageAction.initState());
        dispatch(fetchArticles({ page: 1 }));
    }
});
