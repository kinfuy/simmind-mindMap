import fs from 'fs';
import archiver from 'archiver';
import { versionPath, buildOutpath } from './utils/path';
import { name, version } from '../package.json';
import { log } from './utils/log';

const versionFileName = `${name}-v${version}.zip`;
/**
 * 将build后的文件打包生zip文件
 */
export const createZip = async () => {
  const output = fs.createWriteStream(`${versionPath}/${versionFileName}`);
  const archive = archiver('zip');
  archive.on('error', err => {
    throw err;
  });
  archive.pipe(output);
  archive.directory(buildOutpath, false);
  archive.finalize();
  log.success(`已打包到文件${versionFileName}`);
};
