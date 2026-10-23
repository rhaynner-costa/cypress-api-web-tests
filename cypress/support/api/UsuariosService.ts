import { BaseApi } from './BaseApi';
import type { UsuariosListResponse } from './types';

export class UsuariosService extends BaseApi {
  constructor() {
    super('/usuarios');
  }

  listar(params: Record<string, string> = {}) {
    return this.get<UsuariosListResponse>('', { params });
  }

  buscarPorEmail(email: string) {
    return this.listar({ email });
  }
}
