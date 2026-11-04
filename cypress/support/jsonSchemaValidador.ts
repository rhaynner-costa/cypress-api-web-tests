import Ajv, { type AnySchema } from 'ajv';

export class JsonSchemaValidador {
  static validar(caminhoSchema: string, dados: unknown): Cypress.Chainable<AnySchema> {
    return cy.fixture<AnySchema>(caminhoSchema).then((schema) => {
      const ajv = new Ajv();

      if (!ajv.validate(schema, dados)) {
        throw new Error(`JSON inválido: ${ajv.errorsText()}`);
      }
    });
  }
}
