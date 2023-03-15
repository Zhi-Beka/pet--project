import MainIcon from "shared/assets/icons/main.svg";
import React from "react";
import { RoutePath } from "app/providers/router/config/routeConfig";
import HomeIcon from "shared/assets/icons/home.svg";
import ProfileIcon from "shared/assets/icons/profile.svg";
import ArticleIcon from "shared/assets/icons/calendar.svg";

export interface SidebarItemType {
    path: string;
    text: string;
    Icon: React.VFC<React.SVGProps<SVGSVGElement>>;
    authOnly?: boolean;
}

export const SidebarItemList: SidebarItemType[] = [
    {
        path: RoutePath.main,
        Icon: MainIcon,
        text: "Main page",
    },
    {
        path: RoutePath.about,
        Icon: HomeIcon,
        text: "About us",
    },
    {
        path: RoutePath.profile,
        Icon: ProfileIcon,
        text: "Profile page",
        authOnly: true,
    },
    {
        path: RoutePath.articles,
        Icon: ArticleIcon,
        text: "Articles",
        authOnly: true,
    },
];
