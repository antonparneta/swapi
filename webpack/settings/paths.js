const { join, resolve } = require('path');

const ROOT = resolve('.');

module.exports = {
  root: ROOT,
  src: join(ROOT, 'src'),
  favicon: join(ROOT, 'src/styles/img/favicon.ico'),
  html: join(ROOT, 'src/index.html'),
  nodeModules: join(ROOT, 'node_modules'),
  dist: join(ROOT, 'dist'),
};
