import { mount } from 'cypress/react';

import '~/index.css';
import './commands';

Cypress.Commands.add('mount', mount);
