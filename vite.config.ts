import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import macrosPlugin from 'vite-plugin-babel-macros';
import envCompatible from 'vite-plugin-env-compatible';
import svgrPlugin from 'vite-plugin-svgr';
import WindiCSS from 'vite-plugin-windicss';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [
    react(),
    macrosPlugin(),
    WindiCSS(),
    svgrPlugin({
      svgrOptions: {
        icon: true
      }
    }),
    envCompatible(),
    tsconfigPaths()
  ]
});
