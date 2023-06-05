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
