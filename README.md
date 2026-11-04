# cypress-api-web-tests

Testes automatizados de API e web com Cypress e TypeScript.

## Requisitos

- **Node.js 22.23.4** (versão usada no projeto e suportada pelo Cypress 16.2.0)
- Cypress 16.2.0 (instalado via `npm install`)
- TypeScript (instalado via `npm install`)

## Instalação

```bash
npm install
```

## Execução

```bash
npm run cy:open    # abre o Cypress no modo interativo
npm run cy:run     # executa todos os testes
npm run test:api   # limpa os relatórios, executa a API no Chrome e gera o HTML Mochawesome
npm run test:web   # limpa os relatórios e executa os testes web no Chrome
npm run report     # consolida os JSON Mochawesome existentes em HTML
npm run typecheck  # valida os tipos com TypeScript
```

Os scripts `test:api` e `test:web` removem `cypress/reports` no início de cada execução. Após os testes web via `cypress run`, o preprocessor Cucumber gera o relatório HTML. O modo interativo (`cy:open`) não gera automaticamente esses relatórios.

Relatórios:

- **API (Mochawesome):** `cypress/reports/mochawesome/html/report.html`
- **Web (Cucumber):** `cypress/reports/cucumber/report.html`

## Padrão dos testes

- **API:** testes técnicos em Cypress puro (`.cy.ts`).
- **Web:** fluxos de aceitação em BDD (`.feature` + steps `.ts`), usando o preprocessor Cucumber.

## Variáveis de ambiente

| Variável            | Padrão                        | Descrição                 |
| ------------------- | ----------------------------- | ------------------------- |
| `CYPRESS_API_URL`   | `https://serverest.dev`       | URL base da API           |
| `CYPRESS_BASE_URL`  | `https://front.serverest.dev` | URL base da aplicação web |

## Estrutura

```text
cypress/
  e2e/
    api/                # testes de API (.cy.ts)
    web/
      features/         # cenários BDD (.feature)
      steps/            # step definitions (.steps.ts)
  fixtures/
    jsonSchema/         # schemas JSON para validar respostas da API
    login.json          # credenciais de teste
  support/
    api/                # BaseApi, services e tipos
    logic/              # lógica e assertions reutilizadas pelos testes
    commands.ts         # custom commands
    e2e.ts              # support file
    jsonSchemaValidador.ts # valida respostas usando AJV
  reports/              # relatórios HTML e JSON gerados pelos testes
cypress.config.ts
tsconfig.json
```
