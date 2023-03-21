import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ScrollSchema } from "../types/ScrollSchema";

const initialState: ScrollSchema = {
    scroll: {},
};

export const saveScrollSlice = createSlice({
    name: "scroll",
    initialState,
    reducers: {
        setScrollPosition: (
            state,
            { payload }: PayloadAction<{ path: string; position: number }>
        ) => {
            state.scroll[payload.path] = payload.position;
        },
    },
});

export const { actions: scrollActions } = saveScrollSlice;

export const { reducer: scrollReducer } = saveScrollSlice;
