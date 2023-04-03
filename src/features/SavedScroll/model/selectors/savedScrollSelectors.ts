import { StateSchema } from 'app/providers/StoreProvider';
import { createSelector } from '@reduxjs/toolkit';

export const getSavedScroll = (state: StateSchema) => state.savedScroll.scroll;

export const getSavedScrollByPath = createSelector(
  getSavedScroll,
  (state: StateSchema, path: string) => path,
  (scroll, path) => scroll[path] || 0,
);
