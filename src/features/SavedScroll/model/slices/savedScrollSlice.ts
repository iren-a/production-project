import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SavedScrollSchema } from '../types/SavedScrollSchema';

const initialState: SavedScrollSchema = {
  scroll: {},
};

export const savedScrollSlice = createSlice({
  name: 'savedScrollSlice',
  initialState,
  reducers: {
    setScrollPosition: (state, { payload }: PayloadAction<{ path: string; position: number }>) => {
      state.scroll[payload.path] = payload.position;
    },
  },
});

export const { actions: savedScrollActions } = savedScrollSlice;
export const { reducer: savedScrollReducer } = savedScrollSlice;
