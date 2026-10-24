import { UsuariosLogic } from '../../support/logic/UsuariosLogic';

describe('Consulta Usuários', () => {
  it('CT001 - busca usuário por email', () => {
    UsuariosLogic.buscarUsuarios({ email: 'fulano@qa.com' });
  });

  it('CT002 - busca usuário com perfil administrador', () => {
    UsuariosLogic.buscarUsuariosPerfilAdministrador({ administrador: 'true' });
  });
});
