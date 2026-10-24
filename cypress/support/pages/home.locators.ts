export const HomeLocators = {
  titleHome: () => cy.contains('h1', 'Bem Vindo'),
  logoutButton: () => cy.get('[data-testid="logout"]'),
  cadastrarUsuariosButton: () => cy.get('[data-testid="cadastrarUsuarios"]'),
} as const;
