import { FC, lazy } from 'react';
import { AddCommentFormProps } from './AddCommentForm';

export const AddCommentFormAsync = lazy<FC<AddCommentFormProps>>(() => new Promise((resolve) => {
  // @ts-ignore
  // Только в тестовых целях! Убрать перед деплоем
  setTimeout(() => resolve(import('./AddCommentForm')), 400);
}));
