import babel from '@rollup/plugin-babel';
import { terser } from 'rollup-plugin-terser';
import size from 'rollup-plugin-size';
import externals from 'rollup-plugin-node-externals';
import resolve from '@rollup/plugin-node-resolve';
import commonJS from '@rollup/plugin-commonjs';
import visualizer from 'rollup-plugin-visualizer';
import replace from '@rollup/plugin-replace';
import { defineConfig } from 'rollup';

const external = ['webp-converter-browser'];

const globals = {
  'webp-converter-browser': 'webpConverterBrowser',
};

const inputSrcs = [
  ['src/index.ts', 'webpConverterBrowser', 'index'],
];

const extensions = ['.js', '.jsx', '.es6', '.es', '.mjs', '.ts', '.tsx'];

const babelConfig = {
  extensions,
  babelHelpers: 'bundled',
};
const resolveConfig = { extensions };

const externalPeerDeps = () => externals({ deps: false, devDeps: false, peerDeps: true });

export default inputSrcs
  .map(([input, name, file]) => defineConfig([
    {
      input,
      output: {
        name,
        file: `dist/${file}.min.js`,
        format: 'umd',
        sourcemap: true,
        globals,
      },
      external,
      plugins: [
        replace({
          'process.env.NODE_ENV': '"production"',
          delimiters: ['', ''],
          preventAssignment: true,
        }),
        externalPeerDeps(),
        resolve(resolveConfig),
        babel(babelConfig),
        commonJS(),
        terser(),
        size(),
        visualizer({
          filename: 'stats.json',
          json: true,
        }),
      ],
    },
  ]))
  .flat();
