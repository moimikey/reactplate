const path = require('path')

/**
 * Constants
 */
const NODE_ENV = process.env.NODE_ENV
const NODE_DEBUG = process.env.NODE_DEBUG

/**
 * Paths
 */
const rootPath = path.dirname(path.resolve('package.json'))
const publicPath = path.join(rootPath, 'public')
const srcPath = path.join(rootPath, 'src')
const configPath = path.join(rootPath, 'config')

/**
 * Files
 */
// const dllVendorFile = path.join(publicPath, 'vendor_*')
const faviconFile = path.join(publicPath, 'favicon.ico')
// const manifestFile = path.join(configPath, 'manifest.json')
const packageJSON = require(path.resolve('package.json'))

/**
 * Webpack
 */
const webpackOutputName = '[name]_[chunkhash]'
const webpackOutputChunkName = '[name]_[chunkhash]'
const webpackDependencies = packageJSON.dependencies

/**
 * PostCSS
 */
const postCssConfig = {
  plugins: (loader) => [
    require('postcss-cssnext')({
      warnForDuplicates: false,
      browsers: ['> 1%', 'last 2 versions'],
      features: {
        customProperties: {
          variables: require('./themes').primary
        }
      }
    }),
    require('cssnano')({
      discardComments: {
        removeAll: true
      }
    })
  ]
}

module.exports = {
  NODE_DEBUG,
  NODE_ENV,
  configPath,
  // dllVendorFile,
  faviconFile,
  // manifestFile,
  packageJSON,
  postCssConfig,
  publicPath,
  rootPath,
  srcPath,
  webpackDependencies,
  webpackOutputChunkName,
  webpackOutputName
}
