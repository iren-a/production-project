import { RouteProps } from 'react-router-dom';
import { UserRole } from 'entities/User';
import { MainPage } from 'pages/MainPage';
import { AboutPage } from 'pages/AboutPage';
import { NotFoundPage } from 'pages/NotFoundPage';
import { ProfilePage } from 'pages/ProfilePage';
import { ArticlesPage } from 'pages/ArticlesPage';
import { ArticleDetailsPage } from 'pages/ArticleDetailsPage';
import { ArticleEditPage } from 'pages/ArticleEditPage';
import { AdminPanelPage } from 'pages/AdminPanelPage';
import { ForbiddenPage } from 'pages/ForbiddenPage';

export type AppRoutesProps = RouteProps & {
  authOnly?: boolean;
  roles?: UserRole[];
};

export enum AppRoutes {
  Main = 'main',
  About = 'about',
  Profile = 'profile',
  Articles = 'articles',
  ArticleDetails = 'articleDetails',
  ArticleCreate = 'articleCreate',
  ArticleEdit = 'articleEdit',
  AdminPanel = 'adminPanel',
  Forbidden = 'forbidden',
  // last
  NotFound = 'notFound',
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.Main]: '/',
  [AppRoutes.About]: '/about',
  [AppRoutes.Profile]: '/profile', // + /:id
  [AppRoutes.Articles]: '/articles',
  [AppRoutes.ArticleDetails]: '/articles', // + /:id
  [AppRoutes.ArticleCreate]: '/articles/new',
  [AppRoutes.ArticleEdit]: '/articles/:id/edit',
  [AppRoutes.AdminPanel]: '/admin',
  [AppRoutes.Forbidden]: '/forbidden',
  // last
  [AppRoutes.NotFound]: '*',
};

export const routeConfig: Record<AppRoutes, AppRoutesProps> = {
  [AppRoutes.Main]: {
    path: RoutePath.main,
    element: <MainPage />,
  },
  [AppRoutes.About]: {
    path: RoutePath.about,
    element: <AboutPage />,
  },
  [AppRoutes.Profile]: {
    path: `${RoutePath.profile}/:id`,
    element: <ProfilePage />,
    authOnly: true,
  },
  [AppRoutes.Articles]: {
    path: RoutePath.articles,
    element: <ArticlesPage />,
    authOnly: true,
  },
  [AppRoutes.ArticleDetails]: {
    path: `${RoutePath.articleDetails}/:id`,
    element: <ArticleDetailsPage />,
    authOnly: true,
  },
  [AppRoutes.ArticleCreate]: {
    path: RoutePath.articleCreate,
    element: <ArticleEditPage />,
    authOnly: true,
  },
  [AppRoutes.ArticleEdit]: {
    path: RoutePath.articleEdit,
    element: <ArticleEditPage />,
    authOnly: true,
  },
  [AppRoutes.AdminPanel]: {
    path: RoutePath.adminPanel,
    element: <AdminPanelPage />,
    authOnly: true,
    roles: [UserRole.MANAGER, UserRole.ADMIN],
  },
  [AppRoutes.Forbidden]: {
    path: RoutePath.forbidden,
    element: <ForbiddenPage />,
  },
  // last
  [AppRoutes.NotFound]: {
    path: RoutePath.notFound,
    element: <NotFoundPage />,
  },
};
