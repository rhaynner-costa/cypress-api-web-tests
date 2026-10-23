import login from '../../fixtures/login.json';

describe('Home', () => {
  beforeEach(() => {
    cy.acessarWebAutenticado('/admin/home', login);
  });

  it('acessa a home com token obtido via API', () => {
    cy.url().should('eq', `${Cypress.config('baseUrl')}/admin/home`);
    cy.contains('h1', 'Bem Vindo').should('be.visible');
  });
});
