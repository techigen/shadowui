import { Config } from '@stencil/core';
import { postcss } from '@stencil-community/postcss';
import { sass } from '@stencil/sass';
import autoprefixer from 'autoprefixer';

export const config: Config = {
  namespace: 'shadow-ui',
  srcDir: 'src',
  globalScript: './src/common/global.ts',
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
  plugins: [
    sass({
      injectGlobalPaths: [
        'src/common/style/variables/index.scss',
      ]
    }),
    postcss({
      plugins: [autoprefixer()]
    })
  ]
};
