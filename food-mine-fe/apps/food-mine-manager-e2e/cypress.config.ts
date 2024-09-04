import { nxE2EPreset } from '@nx/cypress/plugins/cypress-preset';

import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    ...nxE2EPreset(__filename, {
      cypressDir: 'src',
      webServerCommands: {
        default: 'nx run food-mine-manager:serve:development',
        production: 'nx run food-mine-manager:serve:production',
      },
      ciWebServerCommand: 'nx run food-mine-manager:serve-static',
    }),
    baseUrl: 'http://localhost:4200',
  },
});
