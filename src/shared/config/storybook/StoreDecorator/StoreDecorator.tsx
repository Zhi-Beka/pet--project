/* eslint-disable indent */
import { DeepPartial, ReducersMapObject } from "@reduxjs/toolkit";
import { Story } from "@storybook/react";
import { StateSchema, StoreProvider } from "app/providers/StoreProvider";
import { profileReducer } from "entities/Profile";
import { loginReducer } from "features/AuthByUserName/model/slices/loginSlice";

const defaultAsyncReducers: DeepPartial<ReducersMapObject<StateSchema>> = {
    loginForm: loginReducer,
    profile: profileReducer,
};

export const StoreDecorator =
    (
        state: DeepPartial<StateSchema>,
        asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>
    ) =>
    (StoryComponent: Story) => {
        return (
            <StoreProvider
                initialState={state}
                asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}
            >
                <StoryComponent />
            </StoreProvider>
        );
    };
