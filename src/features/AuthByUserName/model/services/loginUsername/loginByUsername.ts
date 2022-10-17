import { userActions } from "entities/User";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import i18n from "shared/config/i18n/i18n";
import { USER_LOCALSTORAGE_KEY } from "shared/const/localStorage";
import { User } from "../../../../../entities/User/model/types/userTypes";

const url = "http://localhost:8000/login";

interface LoginByUsernameProps {
    username: string;
    password: string;
}

export const loginByUsername = createAsyncThunk<
    User,
    LoginByUsernameProps,
    { rejectValue: string }
>("login/loginByUsername", async (authData, thunkAPI) => {
    try {
        const response = await axios.post<User>(url, authData);

        if (!response.data) {
            throw new Error();
        }
        localStorage.setItem(
            USER_LOCALSTORAGE_KEY,
            JSON.stringify(response.data)
        );

        thunkAPI.dispatch(userActions.setAuthData(response.data));
        return response.data;
    } catch (error) {
        console.log(error);
        return thunkAPI.rejectWithValue("error");
    }
});
