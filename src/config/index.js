const path = require('path')
const os = require('os')

/**
 * Constants
 */
const NODE_ENV = process.env.NODE_ENV
const NODE_DEBUG = process.env.NODE_DEBUG

const isDev = NODE_ENV === 'development'
const isProd = NODE_ENV === 'production'
const isCI = NODE_ENV === 'ci'
const isTest = NODE_ENV === 'ci' || NODE_ENV === 'test' || NODE_ENV === 'jest'
const staticHost = ''
const staticPath = '/var/tmp/kinja-mantle'
const hostname = os.hostname()

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
const faviconFile = path.join(publicPath, 'favicon.ico')
const packageJSON = require(path.resolve('package.json'))

module.exports = {
  NODE_DEBUG,
  NODE_ENV,
  configPath,
  faviconFile,
  packageJSON,
  publicPath,
  rootPath,
  srcPath,

  isProd,
  isDev,
  isTest,
  isCI,
  hostname,
  port: process.env.PORT || 3000,
  staticHost,
  staticPath,
  locales: ['en-US'],
  defaultLocale: 'en-US',
  defaultTimezone: 'America/New_York',
  api: {
    coreUrl: 'https://kinja.com/api/core/'
  },
  statsd: {
    application: process.env.APPLICATION_NAME || 'kinja-magma',
    host: process.env.STATSD_HOST || 'localhost',
    port: process.env.STATSD_PORT || 8127
  },
  version: {
    core: 20160517,
    api: 20170021
  }
}
