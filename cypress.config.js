const { defineConfig } = require("cypress");

module.exports = defineConfig({
  allowCypressEnv: false,
    defaultCommandTimeout: 10000,
  pageLoadTimeout: 60000,

  e2e: {
   // specPattern: "cypress/testcases/**/*.cy.{js,jsx,ts,tsx}",
    screenshotOnRunFailure: true,  // ✅ default
   // video: true,          // ✅ Enable video recording
   videoCompression: 32, // Only for failed Tests
     //pageLoadTimeout: 120000, // 2 minutes

    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
