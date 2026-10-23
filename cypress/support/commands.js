import authApi from './api/AuthApi';

Cypress.Commands.add('loginByApi', (credentials) => {
  return authApi.login(credentials);
});

Cypress.Commands.add('acessarWebAutenticado', (rota, credenciais) => {
  return cy.loginByApi(credenciais).then((response) => {
    cy.visit(rota, {
      onBeforeLoad(win) {
        win.localStorage.setItem('serverest/userToken', response.body.authorization);
        win.localStorage.setItem('serverest/userEmail', credenciais.email);
      },
    });
  });
});
