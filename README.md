# vite-ts-react

A project template for vite-based React projects.
This template is intended to be used with [degit](https://github.com/Rich-Harris/degit#readme).

## Contents

- [vite](https://vitejs.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [React](https://reactjs.org/)
- [TailwindCSS](https://tailwindcss.com/)
- [styled-components](https://styled-components.com/)
- [twin.macro](https://github.com/ben-rogerson/twin.macro)
- [Prettier](https://prettier.io/)
- [ESLint](https://eslint.org/)
- [Husky](https://typicode.github.io/husky/#/)
- [Storybook](https://storybook.js.org/)

## Installation Procedure

- Install [degit](https://github.com/Rich-Harris/degit#readme): `npm install -g degit`
- Clone the template files: `degit https://github.com/froko/vite-ts-react my-react-project`
- Change into project directory: `cd my-react-project`
- Create a brand new GIT repo: `git init && git add . && git commit -m "Initial Commit"`
- Download dependencies: `npm install`
- Start coding

## Available npm scripts

- `npm start`: Starts vite dev server & serves project at `http://localhost:3000`
- `npm run format`: Formats your files with Prettier & ESLint
- `npm run build`: Does TypeScript transpilation & bundling of all your assets into the `dist` folder
- `npm run preview`: Serves the built web app at `http://localhost:4173`

## Install Storybook

- `npx sb init`
- `npm install -D react-is`
- `rm -rf src/stories`
- Patch `.storybook/main.js`:

  ```javascript
  const macrosPlugin = require('vite-plugin-babel-macros');
  const WindiCSS = require('vite-plugin-windicss');
  const svgrPlugin = require('vite-plugin-svgr');

  module.exports = {
    stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
    addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/addon-interactions'],
    framework: '@storybook/react',
    core: {
      builder: '@storybook/builder-vite'
    },
    async viteFinal(config) {
      config.plugins = [
        ...config.plugins,
        macrosPlugin.default(),
        WindiCSS.default(),
        svgrPlugin.default({
          svgrOptions: {
            icon: true
          }
        })
      ];
      return config;
    }
  };
  ```

- Patch `.storybook/preview.js`:

  ```javascript
  import '../src/index.css';

  export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/
      }
    }
  };
  ```
