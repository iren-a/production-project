import { lazy } from 'react';
export var AboutPageAsync = lazy(function () { return new Promise(function (resolve) {
    // @ts-ignore
    // Только в тестовых целях! Убрать перед деплоем
    setTimeout(function () { return resolve(import('./AboutPage')); }, 1500);
}); });
