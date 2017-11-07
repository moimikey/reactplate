/**
 * Basic logger for client & server
 */

import logdown from 'logdown'
import hasDom from 'has-dom'

// function loggerFactory (target) {
//   return {
//     log: (msg) => target.log(msg),
//     info: (msg) => target.info(msg),
//     warn: (msg) => target.warn(msg),
//     error: (msg) => target.error(msg),
//     debug: (msg) => target.debug(msg)
//   }
// }

function log (namespace, ...args) {
  const platform = hasDom ? 'client' : 'server'
  const logger = logdown(`app:${platform}:${namespace}`)
  logger.log(...args)
}

export default log
