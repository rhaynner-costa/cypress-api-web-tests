import { services } from './api';
import type { LoginCredentials, LoginResponse } from './api/types';

declare global {
  namespace Cypress {
    interface Chainable {
      loginByApi(credentials: LoginCredentials): Cypress.Chainable<Cypress.Response<LoginResponse>>;
      acessarWebAutenticado(rota: string, credenciais: LoginCredentials): Cypress.Chainable<void>;
    }
  }
}

Cypress.Commands.add('loginByApi', (credentials) => {
  return services.auth.login(credentials);
});

Cypress.Commands.add('acessarWebAutenticado', (rota, credenciais) => {
  cy.loginByApi(credenciais).then((response) => {
    cy.visit(rota, {
      onBeforeLoad(win) {
        win.localStorage.setItem('serverest/userToken', response.body.authorization);
        win.localStorage.setItem('serverest/userEmail', credenciais.email);
      },
    });
  });
});
