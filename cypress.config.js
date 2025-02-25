const { defineConfig } = require("cypress");

module.exports = defineConfig({
  defaultCommandTimeout: 6000,
  reporter: "cypress-mochawesome-reporter",
  projectId: "pb8cyf",
  retries: {
    runMode: 1,
  },
  env: {
    url: "https://google.com",
    userId: "rahul",
    password: "3242",
  },
  e2e: {
    setupNodeEvents(on, config) {
      require("cypress-mochawesome-reporter/plugin")(on);
    },
    specPattern: "cypress/integration/examples/*.js",
  },
});
