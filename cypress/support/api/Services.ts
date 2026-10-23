import { AuthService } from './AuthService';

export class Services {
  readonly auth = new AuthService();
}

export const services = new Services();
