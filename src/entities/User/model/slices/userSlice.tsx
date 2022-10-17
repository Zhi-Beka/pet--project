import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { USER_LOCALSTORAGE_KEY } from "shared/const/localStorage";
import { UserSchema, User } from "../types/userTypes";

const initialState: UserSchema = {};

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setAuthData: (state, action: PayloadAction<User>) => {
            state.AuthData = action.payload;
        },
        initAuthData: (state) => {
            const user = localStorage.getItem(USER_LOCALSTORAGE_KEY);
            if (user) {
                state.AuthData = JSON.parse(user);
            }
        },
        logout: (state) => {
            state.AuthData = undefined;
            localStorage.removeItem(USER_LOCALSTORAGE_KEY);
        },
    },
});

export const { actions: userActions } = userSlice;

export const { reducer: userReducer } = userSlice;
