import { defineConfig } from "cypress";


export default defineConfig({

  defaultCommandTimeout: 10000,
  viewportWidth: 1440,
  viewportHeight: 900,
  chromeWebSecurity: false,
  watchForFileChanges: false,

  e2e: {
    env: {
      envLink: 'http://localhost:8080',
      db: {
        host: 'localhost',
        user: 'root',
        password: 'password',
        database: 'example_app',
        port: 3308,
      },



    },

    setupNodeEvents(on, config) {
      // implement node event listeners here
    },

  },

});
