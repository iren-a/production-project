import { LoginSchema } from '../types/loginSchema';
import { loginActions, loginReducer } from './loginSlice';
import { loginByUsername } from '../services/loginByUsername/loginByUsername';

describe('loginSlice.test', () => {
  test('test set username', () => {
    const state: DeepPartial<LoginSchema> = { username: 'User1' };
    expect(loginReducer(
      state as LoginSchema,
      loginActions.setUsername('User2'),
    )).toEqual({ username: 'User2' });
  });

  test('test set password', () => {
    const state: DeepPartial<LoginSchema> = { password: '123' };
    expect(loginReducer(
      state as LoginSchema,
      loginActions.setPassword('123123'),
    )).toEqual({ password: '123123' });
  });

  test('test set isLoading', () => {
    const state: DeepPartial<LoginSchema> = {};
    expect(loginReducer(
      state as LoginSchema,
      loginByUsername.pending,
    )).toEqual({ isLoading: true });
  });
});
