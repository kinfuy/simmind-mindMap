import { resolve } from 'path';
export const rootpath = resolve(__dirname, '..', '..');

export const versionPath = resolve(rootpath, 'version');
export const buildOutpath = resolve(rootpath, 'dist');

export const enterPath = resolve(rootpath, 'src');

export const outputPaths = {
  lib: resolve(buildOutpath, 'lib'),
  es: resolve(buildOutpath, 'es')
};
