import { resolve } from 'path';
import { copyFile } from 'fs/promises';
import { copy } from 'fs-extra';
import { buildOutpath, outputPaths, rootpath, enterPath } from './utils/path';

const copyTypes = async () => {
  const src = resolve(buildOutpath, 'types');
  await copy(src, outputPaths.es, { recursive: true });
  await copy(src, outputPaths.lib, { recursive: true });
};

export const copyFiles = () =>
  Promise.all([
    copyFile(resolve(__dirname, 'package.json'), resolve(buildOutpath, 'package.json')),
    copyFile(resolve(rootpath, 'README.md'), resolve(buildOutpath, 'README.md')),
    copyTypes()
  ]);
