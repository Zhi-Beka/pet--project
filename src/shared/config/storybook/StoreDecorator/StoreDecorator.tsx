/* eslint-disable indent */

import { Story } from "@storybook/react";
import { StateSchema, StoreProvider } from "app/providers/StoreProvider";
import { articleDetailsReducer } from "entities/Article/models/slice/ArticleDetailsSlice";
import { profileReducer } from "entities/Profile";
import { commentFormReducer } from "features/addCommentForm/model/slice/commentFormSlice";
import { loginReducer } from "features/AuthByUserName/model/slices/loginSlice";
import { articleDetailsCommentReducer } from "pages/articleDetailsPage/model/slice/ArticleDetailsCommentSlice";
import { ReducersList } from "shared/lib/components/DynamicModuleLoader";

const defaultAsyncReducers: ReducersList = {
    loginForm: loginReducer,
    profile: profileReducer,
    article_details: articleDetailsReducer,
    comment_form: commentFormReducer,
    article_details_comment: articleDetailsCommentReducer,
};

export const StoreDecorator =
    (state: DeepPartial<StateSchema>, asyncReducers?: ReducersList) =>
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
