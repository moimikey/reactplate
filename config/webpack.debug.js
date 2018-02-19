const webpack = require('webpack')
const config = require('./webpack.core')

/**
 * Editing this file is unnecessary unless you want to
 * add webpack configuration to storybook
 */

// const {
//   manifestFile
// } = require('./')

config
  .plugin('named-modules')
  .use(webpack.NamedModulesPlugin)

// config
//   .plugin('dll')
//   .use(webpack.DllReferencePlugin, [{
//     manifest: require(manifestFile),
//     context: __dirname
//   }])

module.exports = config
