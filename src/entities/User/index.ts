export { userReducer, userActions } from './model/slices/userSlice';

export type { User, UserSchema } from './model/types/user';

export { getUserAuthData } from './model/selectors/getUserAuthData';
export { getIsUserInit } from './model/selectors/getIsUserInit';
export { useJsonSettings } from './model/selectors/jsonSettings';

export { getUserRoles, isUserAdmin, isUserManager } from './model/selectors/roleSelectors';
export { UserRole } from './model/consts/consts';

export { initAuthData } from './model/services/initAuthData';
export { saveJsonSettings } from './model/services/saveJsonSettings';
