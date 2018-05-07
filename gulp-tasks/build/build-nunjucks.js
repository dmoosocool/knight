'use strict';

import config from '../config';
import gulp from 'gulp';

console.log(config);

exports.buildNunjucks = function buildNunjucks(next) {
  return gulp.src(config.nunjucks, { 
    base: config.base 
  })
  .pipe()
}