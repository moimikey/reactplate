const { NODE_ENV } = require('./')

const isDebug = NODE_ENV === 'debug'
const config = isDebug ? require('./webpack.debug') : require('./webpack.production')

module.exports = config.toConfig()
