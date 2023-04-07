import { AboutPage } from "pages/aboutPage";
import { ArticleDetailsPage } from "pages/articleDetailsPage";
import { ArticleEditPage } from "pages/articleEditPage";
import { ArticlesPage } from "pages/articlesPage";
import { MainPage } from "pages/mainPage/";
import { PageNotFound } from "pages/notFoundPage";
import { ProfilePage } from "pages/profilePage";
import { RouteProps } from "react-router-dom";

export type AppRoutesProps = RouteProps & {
    authOnly?: boolean;
};

export const enum AppRoutes {
    MAIN = "main",
    ABOUT = "about",
    PROFILE = "profile",
    PAGE_NOT_FOUND = "pageNotFound",
    ARTICLES = "articles",
    ARTICLE_DETAILS = "articles_details",
    ARTICLE_CREATE = "article_create",
    ARTICLE_EDIT = "article_edit",
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: "/",
    [AppRoutes.ABOUT]: "/about",
    [AppRoutes.PROFILE]: "/profile/", // +id
    [AppRoutes.PAGE_NOT_FOUND]: "/*",
    [AppRoutes.ARTICLES]: "/articles",
    [AppRoutes.ARTICLE_DETAILS]: "/articles/", // +id
    [AppRoutes.ARTICLE_CREATE]: "/articles/new",
    [AppRoutes.ARTICLE_EDIT]: "/articles/:id/edit",
};

export const routeConfig: Record<AppRoutes, AppRoutesProps> = {
    [AppRoutes.MAIN]: {
        path: RoutePath.main,
        element: <MainPage />,
    },
    [AppRoutes.ABOUT]: {
        path: RoutePath.about,
        element: <AboutPage />,
    },
    [AppRoutes.PROFILE]: {
        path: `${RoutePath.profile}:id`,
        element: <ProfilePage />,
        authOnly: true,
    },
    [AppRoutes.PAGE_NOT_FOUND]: {
        path: RoutePath.pageNotFound,
        element: <PageNotFound />,
    },
    [AppRoutes.ARTICLES]: {
        path: RoutePath.articles,
        element: <ArticlesPage />,
        authOnly: true,
    },
    [AppRoutes.ARTICLE_DETAILS]: {
        path: `${RoutePath.articles_details}:id`,
        element: <ArticleDetailsPage />,
        authOnly: true,
    },
    [AppRoutes.ARTICLE_CREATE]: {
        path: RoutePath.article_create,
        element: <ArticleEditPage />,
        authOnly: true,
    },
    [AppRoutes.ARTICLE_EDIT]: {
        path: RoutePath.article_edit,
        element: <ArticleEditPage />,
        authOnly: true,
    },
};
