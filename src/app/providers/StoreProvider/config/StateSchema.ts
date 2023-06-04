import { ArticleDetailsPageSchema } from "pages/articleDetailsPage";
import { ScrollSchema } from "features/saveScrollPosition/model/types/ScrollSchema";
import { LoginSchema } from "features/AuthByUserName/model/types/LoginSchema";
import { CounterSchema } from "entities/Counter";
import { UserSchema } from "entities/User";
import {
    AnyAction,
    EnhancedStore,
    Reducer,
    ReducersMapObject,
} from "@reduxjs/toolkit";
// eslint-disable-next-line import/no-extraneous-dependencies
import { CombinedState } from "redux";
import { ProfileSchema } from "entities/Profile/model/types/profile";
import { AxiosInstance } from "axios";
import { ArticleDetailsSchema } from "entities/Article/";
import { ArticlesPageStateSchema } from "../../../../pages/articlesPage/model/types/articlesPageStateSchema";
import { CommentFormStateSchema } from "../../../../features/addCommentForm/model/types/commentFormType";

export interface StateSchema {
    counter: CounterSchema;
    user: UserSchema;
    scroll_position: ScrollSchema;

    // async reducers
    loginForm?: LoginSchema;
    profile?: ProfileSchema;
    article_details?: ArticleDetailsSchema;
    comment_form?: CommentFormStateSchema;
    articles_page?: ArticlesPageStateSchema;
    article_details_page?: ArticleDetailsPageSchema;
}
export type StateSchemaKey = keyof StateSchema;

export interface ReducerManager {
    getReducerMap: () => ReducersMapObject<StateSchema>;
    reduce: (
        state: StateSchema,
        action: AnyAction
    ) => CombinedState<StateSchema>;
    add: (key: StateSchemaKey, reducer: Reducer) => void;
    remove: (key: StateSchemaKey) => void;
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
    reducerManager: ReducerManager;
}
export interface ThunkExtraArg {
    api: AxiosInstance;
    // navigate?: (to: To, options?: NavigateOptions) => void;
}
export interface ThunkConfig<T> {
    rejectValue: T;
    extra: ThunkExtraArg;
    state: StateSchema;
}
