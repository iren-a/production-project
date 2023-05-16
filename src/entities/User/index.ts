export {
  userReducer,
  userActions,
} from './model/slices/userSlice';

export type {
  User,
  UserSchema,
} from './model/types/user';

export { getUserAuthData } from './model/selectors/getUserAuthData/getUserAuthData';

export {
  getUserRoles,
  isUserAdmin,
  isUserManager,
} from './model/selectors/roleSelectors';
export { UserRole } from './model/consts/consts';
