import { Given, Then } from '@badeball/cypress-cucumber-preprocessor';
import login from '../../../fixtures/login.json';

Given('que acesso a home autenticado via API', () => {
  cy.acessarWebAutenticado('/admin/home', login);
});

Then('visualizo a home do sistema', () => {
  cy.url().should('eq', `${Cypress.config('baseUrl')}/admin/home`);
  cy.contains('h1', 'Bem Vindo').should('be.visible');
});
