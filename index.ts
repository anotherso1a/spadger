const requireComponent = require['context'](
  // 其组件目录的相对路径
  './src',
  // 是否查询其子目录
  true,
  // 匹配基础组件文件名的正则表达式
  /\w+\.(ts|js)$/
);
let afl = {}; //最后导出的对象
requireComponent.keys().forEach(fileName => {
  // 获取模块配置
  const componentConfig = requireComponent(fileName);

  Object.keys(componentConfig).forEach(fn => {
    afl[fn] = componentConfig[fn];
  });
});

module.exports = afl;
