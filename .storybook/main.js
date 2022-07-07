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
