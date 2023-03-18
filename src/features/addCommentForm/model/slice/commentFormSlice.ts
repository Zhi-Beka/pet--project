import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CommentFormStateSchema } from "../types/commentFormType";

const initialState: CommentFormStateSchema = {
    text: "",
    error: "",
};

export const commentFormSlice = createSlice({
    name: "comment_form",
    initialState,
    reducers: {
        setText: (state, action: PayloadAction<string>) => {
            state.text = action.payload;
        },
    },
    // extraReducers: (builder) => {
    //     builder
    //         .addCase(loginByUsername.pending, (state) => {
    //             state.error = undefined;
    //             state.isLoading = true;
    //         })
    //         .addCase(loginByUsername.fulfilled, (state) => {
    //             state.isLoading = false;
    //         })
    //         .addCase(loginByUsername.rejected, (state, action) => {
    //             state.isLoading = false;
    //             state.error = action.payload;
    //         });
    // },
});

export const { actions: commentFormActions } = commentFormSlice;

export const { reducer: commentFormReducer } = commentFormSlice;
