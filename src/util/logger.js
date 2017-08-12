/**
 * Basic logger for client & server
 */

import logdown from 'logdown'
import hasDom from 'has-dom'

function log (namespace, ...args) {
  const platform = hasDom ? 'client' : 'server'
  const logger = logdown(`app:${platform}:${namespace}`)
  logger.log(...args)
}

export default log
