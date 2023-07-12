export type { SavedScrollSchema } from './model/types/SavedScrollSchema';

export { getSavedScrollByPath } from './model/selectors/savedScrollSelectors';

export {
  savedScrollReducer,
  savedScrollActions,
} from './model/slices/savedScrollSlice';
