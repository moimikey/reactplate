const webpack = require('webpack')
const BabiliPlugin = require('babili-webpack-plugin')
const config = require('./webpack.core')

const {
  publicPath,
  webpackDependencies,
  rootPath,
  manifestFile
} = require('./')

/**
 * Entry
 */
config
  .entry('vendor')
  .merge(Object.keys(webpackDependencies))

/**
 * Options
 */
config.target('web')
config.context(rootPath)
config.devtool('inline-source-map')

/**
 * Plugins
 */
config
  .plugin('dll')
  .use(webpack.DllPlugin, [{
    name: 'vendor_[hash]',
    path: manifestFile
  }])

config
  .plugin('minify')
  .use(BabiliPlugin)

config
  .plugin('hashed-modules')
  .use(webpack.HashedModuleIdsPlugin)

config
  .plugin('uglify')
  .use(webpack.optimize.UglifyJsPlugin, [{
    uglifyOptions: {
      ie8: false,
      ecma: 8
    },
    compress: {
      unused: true,
      dead_code: true
    }
  }])

config
  .plugin('no-emit-errors')
  .use(webpack.NoEmitOnErrorsPlugin)

/**
 * Output
 */
config
  .output
  .path(publicPath)
  .library('vendor_[hash]')
  .filename('vendor_[hash].js')

module.exports = config
