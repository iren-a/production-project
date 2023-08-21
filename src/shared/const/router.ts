export enum AppRoutes {
  Main = 'main',
  About = 'about',
  Profile = 'profile',
  Articles = 'articles',
  ArticleDetails = 'articleDetails',
  ArticleCreate = 'articleCreate',
  ArticleEdit = 'articleEdit',
  AdminPanel = 'adminPanel',
  Settings = 'settings',
  Forbidden = 'forbidden',
  // last
  NotFound = 'notFound',
}

export const getRouteMain = () => '/';
export const getRouteAbout = () => '/about';
export const getRouteProfile = (id: string) => `/profile/${id}`;
export const getRouteArticles = () => '/articles';
export const getRouteArticleDetails = (id: string) => `/articles/${id}`;
export const getRouteArticleCreate = () => '/about/new';
export const getRouteArticleEdit = (id: string) => `/articles/${id}/edit`;
export const getRouteAdmin = () => '/admin';
export const getRouteSettings = () => '/settings';
export const getRouteForbidden = () => '/forbidden';

export const AppRouteByPathPattern: Record<string, AppRoutes> = {
  [getRouteMain()]: AppRoutes.Main,
  [getRouteAbout()]: AppRoutes.About,
  [getRouteProfile(':id')]: AppRoutes.Profile,
  [getRouteArticles()]: AppRoutes.Articles,
  [getRouteArticleDetails(':id')]: AppRoutes.ArticleDetails,
  [getRouteArticleCreate()]: AppRoutes.ArticleCreate,
  [getRouteArticleEdit(':id')]: AppRoutes.ArticleEdit,
  [getRouteAdmin()]: AppRoutes.AdminPanel,
  [getRouteSettings()]: AppRoutes.Settings,
  [getRouteForbidden()]: AppRoutes.Forbidden,
};
