import { defineConfig } from "cypress";
import { createHero, deleteHero } from './cypress/support/data';

export default defineConfig({
  projectId: '0fd97c03-3a35-42cd-9c53-7c2e3dfc4bae',
  e2e: {
    baseUrl: 'http://localhost:3000',
    setupNodeEvents(on, config) {
      on('task', {
        createHero,
        deleteHero,
      });
    },
  },

  component: {
    devServer: {
      framework: 'react',
      bundler: 'vite',
    },
  },
});
