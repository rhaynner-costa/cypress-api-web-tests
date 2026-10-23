export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';

export interface WebParams {
  method?: HttpMethod;
  path?: string;
  params?: Record<string, string | number | boolean>;
  body?: Cypress.RequestBody;
  headers?: Record<string, string>;
  auth?: boolean;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface LoginResponse {
  message: string;
  authorization: string;
}
