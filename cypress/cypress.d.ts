import { MountOptions, MountReturn } from 'cypress/react';

declare global {
  namespace Cypress {
    interface Chainable {
      mount(component: React.ReactNode, options?: MountOptions): Chainable<MountReturn>;
    }
  }
}
