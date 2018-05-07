import path from 'path';

export default {
  // 开发目录
  devDir: path.resolve(__dirname, 'src'),
  
  // 模板中可以省略的后缀名
  tplExtension: '.njk',
  jsExtension: '.js',
  cssExtension: '.css',

  // 使用的指令.
  command: 'Lich',

  // 一组规则通用引入.
  rules: {
    commonScripts: [{
      type: 'js-local',
      list: []
    }, {
      type: 'js-npm',
      list: []
    }],

    commonStyles: [{
      type: 'css-local',
      list: []
    }, {
      type: 'css-npm',
      list: []
    }]
  }
}