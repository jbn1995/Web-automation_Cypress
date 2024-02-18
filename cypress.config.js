const { defineConfig } = require("cypress");
const cucumber = require('cypress-cucumber-preprocessor').default
const allureWriter = require('@shelex/cypress-allure-plugin/writer'); 

module.exports = defineConfig({
  e2e: {
    async setupNodeEvents(on, config) {
      on('file:preprocessor', cucumber())
      allureWriter(on, config);
      return config;
    },
    env: {
      allureReuseAfterSpec: true,
      allure: true
    },
    specPattern: "cypress/e2e/*.feature",
  },
});
