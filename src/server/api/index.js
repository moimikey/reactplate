const logger = require('koa-logger')
const error = require('./error')

module.exports =  (app) => {
  app.use(logger())
  app.use(error)
  // app.use(require('./access/routes'))
  // app.use(require('./verify/routes'))
  // app.use(require('./status/routes'))
}
