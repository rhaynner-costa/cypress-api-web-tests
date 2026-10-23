import { BaseApi } from './BaseApi';
import type { UsuariosFiltros, UsuariosListResponse } from './types';

export class UsuariosService extends BaseApi {
  constructor() {
    super('/usuarios');
  }

  listar(params: UsuariosFiltros = {}) {
    return this.get<UsuariosListResponse>('', { params: params as Record<string, string | number | boolean> });
  }

  buscar(filtros: UsuariosFiltros = {}) {
    return this.listar(filtros);
  }
}
