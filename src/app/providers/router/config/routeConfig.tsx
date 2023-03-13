import { AboutPage } from "pages/aboutPage";
import { MainPage } from "pages/mainPage/";
import { PageNotFound } from "pages/notFoundPage";
import { ProfilePage } from "pages/profilePage";
import { RouteProps } from "react-router-dom";

type AppRoutesProps = RouteProps & {
    authOnly?: boolean;
};

export const enum AppRoutes {
    MAIN = "main",
    ABOUT = "about",
    PROFILE = "profile",
    PAGE_NOT_FOUND = "pageNotFound",
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: "/",
    [AppRoutes.ABOUT]: "/about",
    [AppRoutes.PROFILE]: "/profile",
    [AppRoutes.PAGE_NOT_FOUND]: "/*",
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
        path: RoutePath.profile,
        element: <ProfilePage />,
        authOnly: true,
    },
    [AppRoutes.PAGE_NOT_FOUND]: {
        path: RoutePath.pageNotFound,
        element: <PageNotFound />,
    },
};
