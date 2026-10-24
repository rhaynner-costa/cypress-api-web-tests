import { Then, When } from '@badeball/cypress-cucumber-preprocessor';
import { services } from '../../../support/api';
import { CadastrarUsuaiosLocators } from '../../../support/pages/cadastrarUsuarios.locators';
import { HomeLocators } from '../../../support/pages/home.locators';
import { TestDataUtils } from '../../../support/utils';

When('clico no botão "Cadastrar Usuários"', () => {
  HomeLocators.cadastrarUsuariosButton().click();
});

Then('devo visualizar a tela de cadastro de usuários', () => {
  CadastrarUsuaiosLocators.title().should('be.visible');
});

When('preencho os campos com dados válidos', () => {
  const usuario = TestDataUtils.generateUser();
  cy.wrap(usuario.email).as('emailUsuarioCadastrado');
  CadastrarUsuaiosLocators.inputNome().type(usuario.name);
  CadastrarUsuaiosLocators.inputEmail().type(usuario.email);
  CadastrarUsuaiosLocators.inputSenha().type(usuario.password);
});

When('marco a checkbox de Administrador', () => {
  CadastrarUsuaiosLocators.inputCheckBox().check();
});

When('clico no botão "Cadastrar"', () => {
  cy.intercept('POST', '**/usuarios').as('cadastroUsuario');
  CadastrarUsuaiosLocators.buttonCadastrar().click();
});

//confirmar via api que o usuário foi cadastrado com sucesso, verificando se o email enviado no cadastro esta na lista de usuários cadastrados, e que o status code da requisição de cadastro foi 201
Then('confirmo se o email do usuário cadastrado está na lista', () => {
  cy.wait('@cadastroUsuario').then(({ response }) => {
    expect(response?.statusCode).to.eq(201);
    cy.get<string>('@emailUsuarioCadastrado').then((email) => {
      services.usuarios.listar().then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body.usuarios).to.be.an('array');
        expect(response.body.usuarios.some((usuario) => usuario.email === email)).to.eq(true);
      });
    });
  });
});