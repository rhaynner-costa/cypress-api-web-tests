# language: pt
@cadastroUsuario
Funcionalidade: Cadastro de usuario

  Cenário: Cadastrar um novo usuario adm com dados validos
    Dado que acesso a home autenticado via API
    E clico no botão "Cadastrar Usuários"
    Então devo visualizar a tela de cadastro de usuários
    Quando preencho os campos com dados válidos
    E marco a checkbox de Administrador
    E clico no botão "Cadastrar"
    Então confirmo se o email do usuário adm cadastrado está na lista

  Cenário: Cadastrar um novo usuario com dados validos
    Dado que acesso a home autenticado via API
    E clico no botão "Cadastrar Usuários"
    Então devo visualizar a tela de cadastro de usuários
    Quando preencho os campos com dados válidos
    E clico no botão "Cadastrar"
    Então confirmo se o email do usuário cadastrado está na lista

  Esquema do Cenário: Cadastrar usuario com dados invalidos - <caso>
    Dado que acesso a home autenticado via API
    E clico no botão "Cadastrar Usuários"
    Então devo visualizar a tela de cadastro de usuários
    Quando preencho o formulário com "<nome>" , email "<email>" e senha "<senha>"
    E clico no botão "Cadastrar"
    Então uma mensagem de erro deve ser exibida informando "<mensagem>"

    Exemplos:
      | caso           | nome            | email                     | senha     | mensagem                |
      | email vazio    | Fernando Silva  |                           | 12345678  | Email é obrigatório     |
      | nome vazio     |                 | fernando.silgva@gmail.com | 12345678  | Nome é obrigatório      |
      | senha vazio    |  Fernando Silva | fernando.silgva@gmail.com |           | Password é obrigatório  |