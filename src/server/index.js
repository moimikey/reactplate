const log = require('../util/logger').default
const app = require('./app').default

const port = process.env.PORT || 8000

function fancyExit (options, err, exit) {
  log('server', 'goodbye!')
  if (err) log('server', err.stack)
  setTimeout(() => process.exit(), 500)
}

process.on('exit', () => process.exit())
process.on('SIGINT', fancyExit)
process.on('uncaughtException', fancyExit.bind(null, { stack: true }))

log('server', `started: http://localhost:${port}`)

app.listen(port)
