import { services } from '../api';
import type { LoginCredentials } from '../api/types';

export class LoginLogic {
  static realizarLoginComCredenciaisValidas(credentials: LoginCredentials) {
    return services.auth.login(credentials).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.message).to.eq('Login realizado com sucesso');
      expect(response.body.authorization).to.match(/^Bearer /);
      return response;
    });
  }
}
