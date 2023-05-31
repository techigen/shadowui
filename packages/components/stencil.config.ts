import { Config } from '@stencil/core';
import { postcss } from '@stencil-community/postcss';
import autoprefixer from 'autoprefixer';
import tailwind, { tailwindHMR } from 'stencil-tailwind-plugin';

export const config: Config = {
  namespace: 'shadow-ui',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
  globalScript: './src/common/global.ts',
  plugins: [
    postcss({
      plugins: [autoprefixer()]
    }),
    tailwind({
      minify: true,
      tailwindConf: {
        content: ['./src/**/*.{ts,tsx,html}'],
        theme: {
          extend: {},
        },
      }
    }),
    tailwindHMR(),
  ]
};
