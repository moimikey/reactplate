const path = require('path')
const webpack = require('webpack')
const BabiliPlugin = require('babili-webpack-plugin')
const HTMLPlugin = require('html-webpack-plugin')
const WorkboxPlugin = require('workbox-webpack-plugin')
const config = require('./webpack.core')

const {
  publicPath,
  rootPath,
  srcPath,
  webpackOutputName
} = require('./')

/**
 * Entry
 */
config
  .entry('app')
  .add(path.join(srcPath))
  .end()

/**
 * Options
 */
config.target('web')
config.context(rootPath)
config.devtool('cheap-module-source-map')

/**
 * Optimizations
 */
config
  .plugin('common-chunks')
  .use(webpack.optimize.CommonsChunkPlugin, [{
    name: 'common',
    filename: `${webpackOutputName}.js`,
    chunkFilename: `${webpackOutputName}.js`,
    minChunks (module) {
      if (module.resource && (/\.css$/).test(module.resource)) return false
      return module.context && module.context.indexOf('node_modules') >= 0
    }
  }])

config
  .plugin('hashed-modules')
  .use(webpack.HashedModuleIdsPlugin)

config
  .plugin('module-concat')
  .use(webpack.optimize.ModuleConcatenationPlugin)

if (!process.env.WATCH) {
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
    .plugin('minify')
    .use(BabiliPlugin)
}

/**
 * Plugins
 */
config
  .plugin('html')
  .use(HTMLPlugin, [{
    appMountId: 'root',
    baseHref: '/',
    filename: 'index.html',
    path: rootPath,
    template: './src/static/index.js',
    faviconUrl: '/favicon.ico'
  }])

config
  .plugin('no-emit-errors')
  .use(webpack.NoEmitOnErrorsPlugin)

config
  .plugin('workbox-sw')
  .use(WorkboxPlugin, [{
    globDirectory: publicPath,
    globPatterns: ['**/*.{html,js,css}'],
    swDest: path.join(publicPath, 'sw.js')
  }])

/**
 * Output
 */
config
  .output
  .path(publicPath)
  .filename(`${webpackOutputName}.js`)
  .chunkFilename(`${webpackOutputName}.js`)

config
  .performance
  .hints('warning')

module.exports = config
