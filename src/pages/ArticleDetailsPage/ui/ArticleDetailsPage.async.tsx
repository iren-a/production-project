import { lazy } from 'react';

export const ArticleDetailsPageAsync = lazy(() => new Promise((resolve) => {
  // @ts-ignore
  // Только в тестовых целях! Убрать перед деплоем
  setTimeout(() => resolve(import('./ArticleDetailsPage')), 400);
}));
