export interface Usuario {
  nome: string;
  email: string;
  password?: string;
  administrador: string;
  _id: string;
}

export interface UsuariosListResponse {
  quantidade: number;
  usuarios: Usuario[];
}

export interface UsuariosFiltros {
  _id?: string;
  nome?: string;
  email?: string;
  password?: string;
  administrador?: string;
  [key: string]: string | undefined;
}
