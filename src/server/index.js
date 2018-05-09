const http = require('http')
const Koa = require('koa')
const log = require('../util/logger')
const api = require('./api')
const www = require('./app')

const app = new Koa()

function fancyExit (options, err, exit) {
  console.log('server', 'goodbye!')
  if (err) console.log('server', err.stack)
  setTimeout(() => process.exit(), 500)
}

const server = http.createServer(app.callback())
  .listen(process.env.HTTP_PORT, () => {
    console.info('Server is available at %s%s:%d',
      process.env.HTTP_PROTOCOL,
      process.env.HTTP_HOST,
      process.env.HTTP_PORT
    )
  }).on('close', () => {
    log.info('Server shutdown.')
  }).on('error', (err) => {
    log.error(err.message)
    process.exit(1)
  })

process.on('SIGINT', () => {
  server.close(() => {
    process.exit(0)
  })
}).on('exit', () => {
  process.exit()
}).on('unhandledRejection', (err) => {
  server.emit('error', err)
}).on('uncaughtException', (err) => {
  server.emit('error', err)
})

api(app)
www(app)
