import login from '../../../fixtures/login.json';
import { LoginLogic } from '../logic/LoginLogic';

describe('Login', () => {
  it('realiza login com credenciais válidas', () => {
    LoginLogic.realizarLoginComCredenciaisValidas(login);
  });
});
