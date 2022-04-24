import { src, dest } from 'gulp';
import cleanCss from 'gulp-clean-css';
import chalk from 'chalk';
import gulpLess from 'gulp-less';
import autoprefixer from 'gulp-autoprefixer';
import path from 'path';
import { buildOutpath, enterPath } from './utils/path';
export const buildStyles = () => {
  return src([path.resolve(enterPath, 'style/*.less')])
    .pipe(gulpLess())
    .pipe(autoprefixer({ cascade: false }))
    .pipe(
      cleanCss({}, d => {
        console.log(
          `${chalk.cyan(d.name)}: ${chalk.yellow(d.stats.originalSize / 1000)} KB -> ${chalk.green(
            d.stats.minifiedSize / 1000
          )} KB`
        );
      })
    )
    .pipe(dest(`${buildOutpath}/style`));
};
