import login from '../../fixtures/login.json';

describe('Home', () => {
  it('acessa a home com token obtido via API', () => {
    cy.loginByApi(login).then((response) => {
      const authorization = response.body.authorization;

      cy.visit('/admin/home', {
        onBeforeLoad(win) {
          win.localStorage.setItem('serverest/userToken', authorization);
          win.localStorage.setItem('serverest/userEmail', login.email);
        },
      });

      cy.url().should('eq', `${Cypress.config('baseUrl')}/admin/home`);
      cy.contains('h1', 'Bem Vindo').should('be.visible');
    });
  });
});
