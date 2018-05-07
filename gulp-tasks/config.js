'use strict';
import path from 'path';

// 返回一个配置对象.
export default {
  // nunjucks模板文件
  nunjucks: path.join(process.cwd(), 'src/**/*.njk'),

  base: process.cwd()
}