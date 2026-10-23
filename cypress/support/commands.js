import authApi from './api/AuthApi';

Cypress.Commands.add('loginByApi', (credentials) => {
  return authApi.login(credentials);
});
