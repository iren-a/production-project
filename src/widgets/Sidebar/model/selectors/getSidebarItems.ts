import { createSelector } from '@reduxjs/toolkit';
import { getUserAuthData } from '@/entities/User';
import MainIconDeprecated from '@/shared/assets/icons/main.svg';
import AboutIconDeprecated from '@/shared/assets/icons/about.svg';
import ProfileIconDeprecated from '@/shared/assets/icons/profile.svg';
import ArticleIconDeprecated from '@/shared/assets/icons/article-deprecated.svg';
import MainIcon from '@/shared/assets/icons/home.svg';
import AboutIcon from '@/shared/assets/icons/info.svg';
import ProfileIcon from '@/shared/assets/icons/avatar.svg';
import ArticleIcon from '@/shared/assets/icons/article.svg';
import { SidebarItemType } from '../types/sidebar';
import {
  getRouteAbout,
  getRouteArticles,
  getRouteMain,
  getRouteProfile,
} from '@/shared/const/router';
import { toggleFeatures } from '@/shared/lib/features';

export const getSideBarItems = createSelector(getUserAuthData, (authData) => {
  const sidebarItemsList: SidebarItemType[] = [
    {
      path: getRouteMain(),
      Icon: toggleFeatures({
        name: 'isAppRedesigned',
        on: () => MainIcon,
        off: () => MainIconDeprecated,
      }),
      text: 'Главная',
    },
    {
      path: getRouteAbout(),
      Icon: toggleFeatures({
        name: 'isAppRedesigned',
        on: () => AboutIcon,
        off: () => AboutIconDeprecated,
      }),
      text: 'О сайте',
    },
  ];

  if (authData) {
    sidebarItemsList.push(
      {
        path: getRouteProfile(authData.id),
        Icon: toggleFeatures({
          name: 'isAppRedesigned',
          on: () => ProfileIcon,
          off: () => ProfileIconDeprecated,
        }),
        text: 'Профиль',
        authOnly: true,
      },
      {
        path: getRouteArticles(),
        Icon: toggleFeatures({
          name: 'isAppRedesigned',
          on: () => ArticleIcon,
          off: () => ArticleIconDeprecated,
        }),
        text: 'Статьи',
        authOnly: true,
      },
    );
  }

  return sidebarItemsList;
});
