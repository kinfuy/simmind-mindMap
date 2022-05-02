import { resolve } from 'path';
import { series } from 'gulp';
import { updateVersion, withTask } from '@alqmc/build-utils';
import { buildVueLib } from '@alqmc/build-vue';
import { rootpath, enterPath, buildOutpath } from './path';
export default series(
  // withTask('update:version', async () => {
  //   await updateVersion({
  //     targetPkgPath: [resolve(rootpath, 'package.json')]
  //   });
  // }),
  withTask('build', async () => {
    await buildVueLib({
      baseOptions: {
        input: resolve(enterPath, 'index.ts'),
        outPutPath: buildOutpath,
        pkgPath: resolve(rootpath, 'package.json'),
        tsConfigPath: resolve(rootpath, 'tsconfig.json'),
        enterPath
      }
    });
  })
);
