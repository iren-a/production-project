import { lazy } from 'react';


export const MainPageAsync = lazy(() => new Promise((resolve) => {
  // @ts-ignore
  // Только в тестовых целях! Убрать перед деплоем
  setTimeout(() => resolve(import('./MainPage')), 1500)
}));
