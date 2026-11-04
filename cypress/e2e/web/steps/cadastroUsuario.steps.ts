import { After, Before, Then, When } from '@badeball/cypress-cucumber-preprocessor';
import { services } from '../../../support/api';
import { CadastrarUsuaiosLocators } from '../../../support/pages/cadastrarUsuarios.locators';
import { HomeLocators } from '../../../support/pages/home.locators';
import { TestDataUtils } from '../../../support/utils';

Before({ tags: '@cadastroUsuario' }, () => {
  cy.wrap(null).as('emailUsuarioCadastrado');
});

After({ tags: '@cadastroUsuario' }, () => {
  cy.get<string | null>('@emailUsuarioCadastrado').then((email) => {
    if (!email) {
      return;
    }

    services.usuarios.buscar({ email }).then(({ status, body }) => {
      expect(status).to.eq(200);
      const usuario = body.usuarios.find((usuario) => usuario.email === email);

      if (usuario) {
        services.usuarios
          .excluir(usuario._id)
          .its('status')
          .should('eq', 200)
          .then(() => cy.log(`Usuário cadastrado no teste (${email}) foi deletado.`));
      }
    });
  });
});

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

Then('confirmo se o email do usuário adm cadastrado está na lista', () => {
  cy.wait('@cadastroUsuario').its('response.statusCode').should('eq', 201);

  let emailUsuarioCadastrado: string;
  cy.get<string>('@emailUsuarioCadastrado')
    .then((email) => {
      emailUsuarioCadastrado = email;
      return services.usuarios.buscar({ email });
    })
    .then(({ status, body }) => {
      expect(status).to.eq(200);
      expect(body.usuarios).to.be.an('array');
      expect(body.usuarios.some((usuario) => usuario.email === emailUsuarioCadastrado)).to.eq(true);
      expect(body.usuarios[0].administrador).to.eq('true');
    });
});

Then('confirmo se o email do usuário cadastrado está na lista', () => {
  cy.wait('@cadastroUsuario').its('response.statusCode').should('eq', 201);

  let emailUsuarioCadastrado: string;
  cy.get<string>('@emailUsuarioCadastrado')
    .then((email) => {
      emailUsuarioCadastrado = email;
      return services.usuarios.buscar({ email });
    })
    .then(({ status, body }) => {
      expect(status).to.eq(200);
      expect(body.usuarios).to.be.an('array');
      expect(body.usuarios.some((usuario) => usuario.email === emailUsuarioCadastrado)).to.eq(true);
      expect(body.usuarios[0].administrador).to.eq('false');
    });
});