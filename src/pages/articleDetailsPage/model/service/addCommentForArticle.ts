import { commentFormActions } from "features/addCommentForm/model/slice/commentFormSlice";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider";
import { IComment } from "entities/Comment/model/types/comment";
import { getArticleData } from "entities/Article/models/selector/getArticleById";
import { getUserAuthData } from "../../../../entities/User/model/selector/getUserAuthData/getUserAuthData";
import { fetchCommentsByArticleId } from "./fetchCommentById";

export const addCommentForArticle = createAsyncThunk<
    IComment,
    string,
    ThunkConfig<string>
>("send_comment", async (text, thunkApi) => {
    const { extra, dispatch, rejectWithValue, getState } = thunkApi;

    const userData = getUserAuthData(getState());

    const article = getArticleData(getState());

    if (!userData || !text || !article) {
        return rejectWithValue("not found");
    }

    try {
        const response = await extra.api.post<IComment>("/comments", {
            articleId: article?.id,
            userId: userData?.id,
            text,
        });

        if (!response.data) {
            throw new Error();
        }
        dispatch(fetchCommentsByArticleId(article.id));
        return response.data;
    } catch (e) {
        return rejectWithValue("error");
    }
});
