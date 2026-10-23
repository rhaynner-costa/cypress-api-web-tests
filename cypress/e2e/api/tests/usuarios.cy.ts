import { UsuariosLogic } from '../logic/UsuariosLogic';

describe('Usuários', () => {
  it('busca usuário por email', () => {
    UsuariosLogic.buscarUsuarios({ email: 'fulano@qa.com' });
  });
});
