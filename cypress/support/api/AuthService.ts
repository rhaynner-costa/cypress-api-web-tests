import { BaseApi } from './BaseApi';
import { tokenStore } from './tokenStore';
import type { LoginCredentials, LoginResponse } from './types';

export class AuthService extends BaseApi {
  constructor() {
    super('/login');
  }

  login({ email, password }: LoginCredentials) {
    return this.post<LoginResponse>('', { body: { email, password } }).then((response) => {
      tokenStore.set(response.body.authorization);
      return response;
    });
  }
}
