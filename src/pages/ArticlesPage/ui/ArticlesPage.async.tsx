import { lazy } from 'react';

export const ArticlesPageAsync = lazy(() => new Promise((resolve) => {
  // @ts-ignore
  // Только в тестовых целях! Убрать перед деплоем
  setTimeout(() => resolve(import('./ArticlesPage')), 1500);
}));
