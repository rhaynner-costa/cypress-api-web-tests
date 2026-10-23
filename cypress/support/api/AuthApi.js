class AuthApi {
  constructor() {
    this.authorization = null;
  }

  login({ email, password }) {
    return cy
      .request({
        method: 'POST',
        url: `${Cypress.expose('apiUrl')}/login`,
        body: { email, password },
      })
      .then((response) => {
        this.authorization = response.body.authorization;
        return response;
      });
  }

  getAuthorization() {
    return this.authorization;
  }
}

export default new AuthApi();
