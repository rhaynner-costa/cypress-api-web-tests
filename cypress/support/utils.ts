export class TestDataUtils {
  /**
   * Gera um nome aleatório (só letras e espaços)
   */
  static generateName(): string {
    const firstNames = ['Fulano', 'Bruno', 'Carla', 'David', 'Elena', 'Felipe', 'Gabriel', 'Isabel', 'João', 'Mariana'];
    const lastNames = ['Silva', 'Santos', 'Almeida', 'Ferreira', 'Costa', 'Mendes', 'Lopes', 'Silva', 'Almeida', 'Gomes'];
    const name = `${firstNames[Math.floor(Math.random() * firstNames.length)]} ${lastNames[Math.floor(Math.random() * lastNames.length)]}`;
    return name;
  }

  /**
   * Gera um email aleatório
   */
  static generateEmail(): string {
    return `usuario.${Date.now()}.${Math.floor(Math.random() * 10000)}@serverest.dev`;
  }

  /**
   * Gera uma senha aleatória com apenas números inteiros
   */
  static generatePassword(length: number = 8): string {
    const digits = '0123456789';
    let password = '';
    for (let i = 0; i < length; i++) {
      password += digits[Math.floor(Math.random() * digits.length)];
    }
    return password;
  }

  /**
   * Gera um objeto completo de usuário para testes
   */
  static generateUser(): {
    name: string;
    email: string;
    password: string;
    admin: boolean;
  } {
    return {
      name: this.generateName(),
      email: this.generateEmail(),
      password: this.generatePassword(8),
      admin: true,
    };
  }
}
