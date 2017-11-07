import * as React from 'react'
import * as ReactDOM from 'react-dom'
import log from './util/logger'
import App from './pages/default'

export default async function () {
  try {
    const polyfill = await import('./polyfill')
    polyfill.default()
    log('app', 'start')
    ReactDOM.hydrate(<App />, document.getElementById('root'))
  } catch (err) {
    console.error(err)
  }
}
