import { AuthService } from './AuthService';
import { UsuariosService } from './UsuariosService';

export class Services {
  readonly auth = new AuthService();
  readonly usuarios = new UsuariosService();
}

export const services = new Services();
