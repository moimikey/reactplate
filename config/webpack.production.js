const webpack = require('webpack')
const ManifestPlugin = require('chunk-manifest-webpack-plugin')
const BabiliPlugin = require('babili-webpack-plugin')
const config = require('./webpack.core')
const { publicPath } = require('./')

/**
 * Options
 */
config.devtool('cheap-module-source-map')

/**
 * Optimizations
 */

config
  .plugin('named')
  .use(webpack.NamedModulesPlugin)

config
  .plugin('common')
  .use(webpack.optimize.CommonsChunkPlugin, [{
    name: 'common',
    filename: 'common.[chunkhash].js',
    minChunks (module) {
      if (module.resource && (/^.*\.css$/).test(module.resource)) return false
      return module.context &&
             module.context.indexOf('node_modules') >= 0
    }
  }])

config
  .plugin('module-concat')
  .use(webpack.optimize.ModuleConcatenationPlugin)

config
  .plugin('hashedModules')
  .use(webpack.HashedModuleIdsPlugin)

config
  .plugin('minify')
  .use(BabiliPlugin)

config
  .plugin('uglify')
  .use(webpack.optimize.UglifyJsPlugin, [{
    compress: {
      unused: true,
      dead_code: true
    }
  }])

config
  .plugin('manifest')
  .init(() => new ManifestPlugin({
    inlineManifest: true
  }))

/**
 * Output
 */
config
  .output
  .path(publicPath)
  .filename('[name].[chunkhash].js')
  .end()

module.exports = config
