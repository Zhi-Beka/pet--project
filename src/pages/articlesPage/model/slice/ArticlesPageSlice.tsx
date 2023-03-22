import {
    createEntityAdapter,
    createSlice,
    PayloadAction,
} from "@reduxjs/toolkit";
import { StateSchema } from "app/providers/StoreProvider";
import {
    Article,
    ArticleType,
    ViewType,
} from "entities/Article/models/types/article";
import { ARTICLE_VIEW_LOCALSTORAGE_KEY } from "shared/const/localStorage";
import { fetchArticles } from "../service/fetchArticles";
import {
    ArticlesPageStateSchema,
    OrderType,
    SortField,
} from "../types/articlesPageStateSchema";

const articlesAdapter = createEntityAdapter<Article>({
    selectId: (article) => article.id,
});

export const getArticles = articlesAdapter.getSelectors<StateSchema>(
    (state) => state.articles_page || articlesAdapter.getInitialState()
);

const articlesPageSlice = createSlice({
    name: "articles_page_slice",
    initialState: articlesAdapter.getInitialState<ArticlesPageStateSchema>({
        isLoading: false,
        error: undefined,
        ids: [],
        entities: {},
        view: ViewType.TILE,
        page: 1,
        hasMore: true,
        _init: false,
        limit: 9,
        sort: SortField.CREATED,
        order: "asc",
        search: "",
        type: ArticleType.ALL,
    }),
    reducers: {
        setView: (state, action: PayloadAction<ViewType>) => {
            state.view = action.payload;
            localStorage.setItem(ARTICLE_VIEW_LOCALSTORAGE_KEY, action.payload);
        },
        setSort: (state, action: PayloadAction<SortField>) => {
            state.sort = action.payload;
        },
        setOrder: (state, action: PayloadAction<OrderType>) => {
            state.order = action.payload;
        },
        setSearch: (state, action: PayloadAction<string>) => {
            state.search = action.payload;
        },
        setPage: (state, action: PayloadAction<number>) => {
            state.page = action.payload;
        },
        setType: (state, action: PayloadAction<ArticleType>) => {
            state.type = action.payload;
        },
        initState: (state) => {
            const view = localStorage.getItem(
                ARTICLE_VIEW_LOCALSTORAGE_KEY
            ) as ViewType;
            state.view = view;
            state.limit = view === ViewType.LIST ? 4 : 9;
            state._init = true;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchArticles.pending, (state, action) => {
                state.error = undefined;
                state.isLoading = true;
                if (action.meta.arg.replace) {
                    articlesAdapter.removeAll(state);
                }
            })
            .addCase(fetchArticles.fulfilled, (state, action) => {
                state.isLoading = false;
                state.hasMore = action.payload.length >= state.limit;

                if (action.meta.arg.replace) {
                    articlesAdapter.setAll(state, action.payload);
                } else {
                    articlesAdapter.addMany(state, action.payload);
                }
            })
            .addCase(fetchArticles.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { reducer: articlesPageReducer, actions: articlesPageAction } =
    articlesPageSlice;
