const path = require('path')

const NODE_ENV = process.env.NODE_ENV
const rootPath = path.dirname(path.resolve('package.json'))

const htmlFile = path.join(rootPath, 'index.ejs')
const publicPath = path.join(rootPath, 'public')
const srcPath = path.join(rootPath, 'src')
const configPath = path.join(rootPath, 'config')
const manifestFile = path.join(publicPath, 'manifest.json')
const faviconFile = path.join(publicPath, 'favicon.ico')

module.exports = {
  NODE_ENV,
  rootPath,

  configPath,
  faviconFile,
  htmlFile,
  manifestFile,
  publicPath,
  srcPath
}
