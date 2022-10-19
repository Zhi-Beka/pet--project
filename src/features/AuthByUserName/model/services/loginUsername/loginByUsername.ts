import { userActions, User } from "entities/User";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { USER_LOCALSTORAGE_KEY } from "shared/const/localStorage";

const url = "http://localhost:8000/login";

interface LoginByUsernameProps {
    username: string;
    password: string;
}

export const loginByUsername = createAsyncThunk<
    User,
    LoginByUsernameProps,
    { rejectValue: string }
>("login/loginByUsername", async (AuthData, thunkAPI) => {
    try {
        const response = await axios.post<User>(url, AuthData);

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
