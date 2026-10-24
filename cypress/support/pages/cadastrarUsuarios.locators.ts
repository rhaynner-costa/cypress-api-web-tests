export const CadastrarUsuaiosLocators = {
  title: () => cy.contains('h1', 'Cadastro de usuários'),
  inputNome: () => cy.get('[data-testid="nome"]'),
  inputEmail: () => cy.get('[data-testid="email"]'),
  inputSenha: () => cy.get('[data-testid="password"]'),
  inputCheckBox: () => cy.get('[data-testid="checkbox"]'),
  buttonCadastrar: () => cy.get('[data-testid="cadastrarUsuario"]'),
} as const;
