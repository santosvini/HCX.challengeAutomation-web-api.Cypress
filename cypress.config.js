const { defineConfig } = require('cypress');
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const { addCucumberPreprocessorPlugin } = require("@badeball/cypress-cucumber-preprocessor");
const { createEsbuildPlugin } = require("@badeball/cypress-cucumber-preprocessor/esbuild");


module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.automationexercise.com/',
    env: {
      apiUrl: 'https://api.trello.com/1/actions/592f11060f95a3d3d46a987a'
    },
    experimentalRunAllSpecs: true,
    specPattern: "**/*.feature",
    async setupNodeEvents(on, config) {
      await addCucumberPreprocessorPlugin(on, config, { stepDefinitions: "cypress/support/step_definitions/**/*.js" });
      on('file:preprocessor', createBundler({
         plugins: [createEsbuildPlugin(config)],
        })
      );
    return config;
    },
   },
  },
);