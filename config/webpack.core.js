const path = require('path')
const webpack = require('webpack')
const Config = require('webpack-chain')

const config = new Config()

const {
  srcPath,
  postCssConfig
} = require('./')

/**
 * Settings
 */
config
  .node
  .set('fs', 'empty')
  .set('net', 'empty')

/**
 * Plugins
 * https://webpack.js.org/plugins
 */
config
  .plugin('env')
  .use(webpack.EnvironmentPlugin, ['NODE_ENV', 'NODE_DEBUG'])

config
  .plugin('define')
  .use(webpack.DefinePlugin, [{
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
    'process.env.NODE_DEBUG': JSON.stringify(process.env.NODE_DEBUG)
  }])

/**
 * Manual list of unparsed (raw) files
 */
const raw =
  config
    .module
    .rule('raw')
    .test(/\.css$/)
    .include
      .add(path.join(srcPath, 'critical.raw.css'))
      .add(/node_modules/)
      .end()

raw
  .use('raw')
  .loader('raw-loader')

raw
  .use('postcss')
  .loader('postcss-loader')
  .options(postCssConfig)

/**
 * JS
 */
config
  .module
  .rule('lint')
  .test(/\.js$/)
  .pre()
  .include
    .add(srcPath)
    .end()
  .use('standard')
    .loader('standard-loader')

config
  .module
  .rule('script')
  .test(/\.js$/)
  .include
    .add(srcPath)
    .end()
  .use('babel')
    .loader('babel-loader')

module.exports = config
