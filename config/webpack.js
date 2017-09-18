const chalk = require('chalk')
const logger = require('logdown')('compile')
const log = logger.log.bind(logger)

const {
  NODE_ENV
} = require('./')

const isDll = /dll/.test(NODE_ENV)
const isDebug = /debug/.test(NODE_ENV)
const isDevelopment = /development/.test(NODE_ENV)
const isProduction = /production/.test(NODE_ENV)

if (isDll) {
  module.exports = require('./webpack.dll').toConfig()
} else if (isDebug || isDevelopment) {
  module.exports = require('./webpack.debug').toConfig()
} else if (isProduction) {
  module.exports = require('./webpack.production').toConfig()
} else {
  throw new Error('NODE_ENV is not set.')
}

log(`Using ${chalk.cyan(NODE_ENV)} webpack config`)
