import { services } from '../api';
import type { UsuariosFiltros } from '../api/types';

export class UsuariosLogic {
  static buscarUsuarios(filtros: UsuariosFiltros) {
    return services.usuarios.buscar(filtros).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.quantidade).to.eq(1);
      expect(response.body.usuarios).to.be.an('array').to.have.lengthOf(1);
      expect(response.body.usuarios[0].email).to.eq(filtros.email);
      expect(response.body.usuarios[0].nome).to.eq('Fulano da Silva');
      expect(response.body.usuarios[0].administrador).to.eq('true');
      expect(response.body.usuarios[0]._id).to.be.a('string');
      return response;
    });
  }

  static buscarUsuariosPerfilAdministrador(filtros: UsuariosFiltros) {
    return services.usuarios.buscar(filtros).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.usuarios).to.be.an('array');
      for (let i = 0; i < response.body.usuarios.length; i++) {
        expect(response.body.usuarios[i].administrador).to.eq('true');
      }
      return response;
    });
  }
}
