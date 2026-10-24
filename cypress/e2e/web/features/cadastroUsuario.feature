# language: pt
Funcionalidade: Cadastro de usuario

  Cenário: Cadastrar um novo usuario com dados validos
    Dado que acesso a home autenticado via API
    E clico no botão "Cadastrar Usuários"
    Então devo visualizar a tela de cadastro de usuários
    Quando preencho os campos com dados válidos
    E marco a checkbox de Administrador
    E clico no botão "Cadastrar"
    Então confirmo se o email do usuário cadastrado está na lista