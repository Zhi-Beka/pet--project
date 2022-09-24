import { AboutPage } from 'pages/aboutPage';
import { MainPage } from 'pages/mainPage/';
import { PageNotFound } from 'pages/notFoundPage';
import { RouteProps } from 'react-router-dom';

export enum AppRoutes {
    MAIN = 'main',
    ABOUT = 'about',
    PAGE_NOT_FOUND = 'pageNotFound',
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.ABOUT]: '/about',
    [AppRoutes.PAGE_NOT_FOUND]: '/*',
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.MAIN]: {
        path: RoutePath.main,
        element: <MainPage />,
    },
    [AppRoutes.ABOUT]: {
        path: RoutePath.about,
        element: <AboutPage />,
    },
    [AppRoutes.PAGE_NOT_FOUND]: {
        path: RoutePath.pageNotFound,
        element: <PageNotFound />,
    },
};
