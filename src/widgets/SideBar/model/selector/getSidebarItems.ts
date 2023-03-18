import { getUserAuthData } from "entities/User";
import { createSelector } from "@reduxjs/toolkit";
import MainIcon from "shared/assets/icons/main.svg";
import React from "react";
import { RoutePath } from "app/providers/router/config/routeConfig";
import HomeIcon from "shared/assets/icons/home.svg";
import ProfileIcon from "shared/assets/icons/profile.svg";
import ArticleIcon from "shared/assets/icons/calendar.svg";
import { authUser } from "../../../Navbar/ui/Navbar.stories";
import { SidebarItemType } from "../types/sidebarItems";

export const getSidebarItems = createSelector(getUserAuthData, (userData) => {
    const sidebarItemList: SidebarItemType[] = [
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
    ];
    if (userData) {
        sidebarItemList.push(
            {
                path: `${RoutePath.profile}${userData.id}`,
                Icon: ProfileIcon,
                text: "Profile page",
                authOnly: true,
            },
            {
                path: RoutePath.articles,
                Icon: ArticleIcon,
                text: "Articles",
                authOnly: true,
            }
        );
    }
    return sidebarItemList;
});
