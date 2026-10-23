const { defineConfig } = require('cypress');

module.exports = defineConfig({
  allowCypressEnv: false,
  expose: {
    apiUrl: process.env.CYPRESS_API_URL || 'https://serverest.dev',
  },
  e2e: {
    baseUrl: process.env.CYPRESS_BASE_URL,
    setupNodeEvents(on, config) {
      return config;
    },
  },
});
