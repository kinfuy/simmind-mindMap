import { rollup } from 'rollup';
import vue from '@vitejs/plugin-vue';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import esbuild from 'rollup-plugin-esbuild';
import path from 'path';
import { enterPath, buildOutpath } from './utils/path';
import { log } from './utils/log';

const getBundle = (minify: boolean) =>
  rollup({
    input: [path.resolve(enterPath, 'index.ts')],
    plugins: [
      vue({
        isProduction: true
      }),
      nodeResolve({
        extensions: ['.mjs', '.js', '.json', '.ts']
      }),
      commonjs(),
      esbuild({
        tsconfig: path.resolve(__dirname, '../tsconfig.json'),
        minify,
        loaders: {
          '.vue': 'ts'
        }
      })
    ],
    external: ['vue', 'lodash.clonedeep']
  });
const buildBundled = async (minify: boolean) => {
  const bundle = await getBundle(minify);
  const tasks = [
    bundle.write({
      format: 'iife',
      file: path.resolve(buildOutpath, `index.iife${minify ? '.min' : ''}.js`),
      name: 'UxdIconsVue',
      globals: { vue: 'Vue' }
    })
  ];
  if (!minify)
    tasks.push(
      bundle.write({
        format: 'cjs',
        file: path.resolve(buildOutpath, `index${minify ? '.min' : ''}.js`),
        globals: { vue: 'Vue' }
      }),
      bundle.write({
        format: 'esm',
        file: path.resolve(buildOutpath, `index${minify ? '.min' : ''}.mjs`)
      })
    );
  await Promise.all(tasks);
};
const buildUnbundled = async () => {
  const bundle = await getBundle(false);
  bundle.write({
    format: 'es',
    dir: path.resolve(buildOutpath, 'es'),
    preserveModules: true,
    entryFileNames: '[name].mjs'
  });
  bundle.write({
    format: 'cjs',
    dir: path.resolve(buildOutpath, 'lib'),
    preserveModules: true,
    entryFileNames: '[name].js',
    exports: 'named'
  });
};
export const buildLib = async () => {
  log.info('build...');
  await Promise.all([buildUnbundled(), buildBundled(true), buildBundled(false)]);
};
