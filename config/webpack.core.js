const webpack = require('webpack')
const HTMLPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const { srcPath, rootPath, faviconFile, htmlFile } = require('./')

const Config = require('webpack-chain')
const config = new Config()

/**
 * Options
 */
config.target('web')
config.context(rootPath)

config
  .plugin('env')
  .use(webpack.EnvironmentPlugin, ['NODE_ENV'])

config
  .plugin('define')
  .use(webpack.DefinePlugin, [{
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
  }])

/**
 * Entry
 */
config
  .entry('app')
  .add(srcPath)
  .end()

/**
 * Module Rules
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

config
  .module
  .rule('style')
  .test(/\.css$/)
  .include
  .add(srcPath)
  .end()
  .merge({
    use: ExtractTextPlugin.extract({
      fallback: 'style-loader',
      use: 'css-loader?importLoaders=1!postcss-loader'
    })
  })

/**
 * Plugins
 */
config
  .plugin('html')
  .use(HTMLPlugin, [{
    appMountId: 'root',
    baseHref: '/',
    filename: 'index.html',
    inject: false,
    path: rootPath,
    template: htmlFile,
    favicon: faviconFile,
    minify: {
      collapseWhitespace: true,
      collapseInlineTagWhitespace: true,
      removeComments: true,
      removeRedundantAttributes: true
    }
  }])

config
  .plugin('extract-text')
  .init(() => new ExtractTextPlugin('[name].[chunkhash].css'))

module.exports = config
