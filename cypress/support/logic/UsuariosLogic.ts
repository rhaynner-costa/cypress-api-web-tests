import { services } from '../api';
import type { UsuariosFiltros } from '../api/types';

export class UsuariosLogic {
  static buscarUsuariosPorEmail(filtros: UsuariosFiltros) {
    return services.usuarios.buscar(filtros).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.quantidade).to.eq(1);
      expect(response.body.usuarios).to.be.an('array').to.have.lengthOf(1);
      expect(response.body.usuarios[0].email).to.eq(filtros.email);
      return response;
    });
  }

  static buscarUsuariosPorNome(filtros: UsuariosFiltros) {
    return services.usuarios.buscar(filtros).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.quantidade).to.eq(1);
      expect(response.body.usuarios).to.be.an('array').to.have.lengthOf(1);
      expect(response.body.usuarios[0].nome).to.eq(filtros.nome);
      return response;
    });
  }

  static buscarUsuariosPorId(filtros: UsuariosFiltros) {
    return services.usuarios.buscar(filtros).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.quantidade).to.eq(1);
      expect(response.body.usuarios).to.be.an('array').to.have.lengthOf(1);
      expect(response.body.usuarios[0]._id).to.eq(filtros._id);
      return response;
    });
  }

  static buscarUsuariosPorPassword(filtros: UsuariosFiltros) {
    return services.usuarios.buscar(filtros).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.usuarios[0].password).to.eq(filtros.password);
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
    static buscarUsuariosPerfilPadrao(filtros: UsuariosFiltros) {
    return services.usuarios.buscar(filtros).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.usuarios).to.be.an('array');
      for (let i = 0; i < response.body.usuarios.length; i++) {
        expect(response.body.usuarios[i].administrador).to.eq('false');
      }
      return response;
    });
  }
}
