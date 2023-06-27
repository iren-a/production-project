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

export const getRouteMain = () => '/';
export const getRouteAbout = () => '/about';
export const getRouteProfile = (id: string) => `/profile/${id}`;
export const getRouteArticles = () => '/articles';
export const getRouteArticleDetails = (id: string) => `/articles/${id}`;
export const getRouteArticleCreate = () => '/about/new';
export const getRouteArticleEdit = (id: string) => `/articles/${id}/edit`;
export const getRouteAdmin = () => '/admin';
export const getRouteForbidden = () => '/forbidden';
