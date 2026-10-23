# cypress-api-web-tests

Testes automatizados de API e web com Cypress.

## Requisitos

- **Node.js 22.23.4** (versão usada no projeto e suportada pelo Cypress 16.2.0)
- npm 11 ou superior
- Cypress 16.2.0 (instalado via `npm install`)

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
```

## Variáveis de ambiente

| Variável            | Padrão                        | Descrição              |
| ------------------- | ----------------------------- | ---------------------- |
| `CYPRESS_API_URL`   | `https://serverest.dev`       | URL base da API        |
| `CYPRESS_BASE_URL`  | `https://front.serverest.dev` | URL base da aplicação web |

## Estrutura

```text
cypress/
  e2e/
    api/       # testes de API
    web/       # testes web
  fixtures/    # massas de dados
  support/     # comandos e classes auxiliares
cypress.config.js
```
