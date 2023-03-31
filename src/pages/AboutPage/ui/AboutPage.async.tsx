import { lazy } from 'react';

export const AboutPageAsync = lazy(() => new Promise((resolve) => {
  // @ts-ignore
  // Только в тестовых целях! Убрать перед деплоем
  setTimeout(() => resolve(import('./AboutPage')), 400);
}));
