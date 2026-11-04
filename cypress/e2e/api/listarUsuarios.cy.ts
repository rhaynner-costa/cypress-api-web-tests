import { services } from '../../support/api';
import { JsonSchemaValidador } from '../../support/jsonSchemaValidador';
import { UsuariosLogic } from '../../support/logic/UsuariosLogic';

describe('Consulta Usuários', () => {
  it('CT001 - busca usuario por email', () => {
    UsuariosLogic.buscarUsuariosPorEmail({ email: 'fulano@qa.com' });
  });

    it('CT002 - busca usuario com perfil administrador', () => {
    UsuariosLogic.buscarUsuariosPerfilAdministrador({ administrador: 'true' });
  });

   it('CT003 - busca usuário com perfil padrao', () => {
    UsuariosLogic.buscarUsuariosPerfilPadrao({ administrador: 'false' });
  });

  it('CT004 - busca usuario por nome', () => {
    UsuariosLogic.buscarUsuariosPorNome({ nome: 'Fulano da Silva' });
  });

  it('CT005 - busca usuario por _id', () => {
    UsuariosLogic.buscarUsuariosPorId({ _id: '0uxuPY0cbmQhpEz1' });
  });

  it('CT006 - busca usuario por password', () => {
    UsuariosLogic.buscarUsuariosPorPassword({ password: 'teste' });
  });

  it('CT007 - valida schema do retorno da busca de usuario', () => {
    services.usuarios.buscar({ email: 'fulano@qa.com' }).then(({ body }) => {
      return JsonSchemaValidador.validar('jsonSchema/ListaClienteSchema.json', body);
    });
  });
});
