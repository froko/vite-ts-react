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

## Installation Procedure

- Install [degit](https://github.com/Rich-Harris/degit#readme): `npm install -g degit`
- Clone the template files: `degit https://github.com/froko/vite-ts-react my-react-project`
- Change into project directory: `cd my-react-project`
- Create a brand new GIT repo: `git init && git add . && git commit -m "Initial Commit"`
- Download dependencies: `npm install`
- Start coding

## Available npm scripts

- `npm start`: Starts vite dev server & serves project at `http://localhost:3000`
- `npm run format`: Formats your files with Prettier
- `npm run build`: Does TypeScript transpilation & bundling of all your assets into the `dist` folder
- `npm run preview`: Serves the built web app at `http://localhost:4173`
