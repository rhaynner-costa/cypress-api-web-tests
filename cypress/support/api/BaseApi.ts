import { tokenStore } from './tokenStore';
import type { WebParams } from './types';

export class BaseApi {
  constructor(protected readonly recurso: string) {}

  protected request<T = unknown>({
    method = 'GET',
    path = '',
    params,
    body,
    headers = {},
    auth = false,
  }: WebParams = {}) {
    const authorization = auth ? tokenStore.get() : null;

    if (auth && !authorization) {
      throw new Error('Token não encontrado. Realize o login antes da requisição autenticada.');
    }

    return cy.request<T>({
      method,
      url: `${Cypress.expose('apiUrl')}${this.recurso}${path}`,
      qs: params,
      body,
      headers: {
        Accept: 'application/json',
        ...headers,
        ...(authorization ? { Authorization: authorization } : {}),
      },
    });
  }

  protected get<T = unknown>(path = '', options: WebParams = {}) {
    return this.request<T>({ ...options, method: 'GET', path });
  }

  protected post<T = unknown>(path = '', options: WebParams = {}) {
    return this.request<T>({ ...options, method: 'POST', path });
  }
}
