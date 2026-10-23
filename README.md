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
npm run test:api   # executa apenas os testes de API
npm run test:web   # executa apenas os testes web
npm run typecheck  # valida os tipos com TypeScript
```

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
  fixtures/             # massas de dados
  support/
    api/                # BaseApi, services e tipos
    commands.ts         # custom commands
    e2e.ts              # support file
cypress.config.ts
tsconfig.json
```
