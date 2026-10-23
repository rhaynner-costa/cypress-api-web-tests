import login from '../../fixtures/login.json';

describe('Login', () => {
  it('realiza login com credenciais válidas', () => {
    cy.loginByApi(login).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.message).to.eq('Login realizado com sucesso');
      expect(response.body.authorization).to.match(/^Bearer /);
    });
  });
});
