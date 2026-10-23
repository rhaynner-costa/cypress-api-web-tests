import { services } from '../../support/api';

describe('Usuários', () => {
  it('busca usuário por email', () => {
    services.usuarios.buscarPorEmail('fulano@qa.com').then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.quantidade).to.eq(1);
      expect(response.body.usuarios[0].email).to.eq('fulano@qa.com');
      expect(response.body.usuarios[0].nome).to.eq('Fulano da Silva');
      expect(response.body.usuarios[0].administrador).to.eq('true');
      expect(response.body.usuarios[0]._id).to.be.a('string');
    });
  });
});
