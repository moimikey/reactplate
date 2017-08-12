import React from 'react'
import { render } from 'react-dom'
import log from './util/logger'
import App from './modules/app'

import('./polyfill').then(polyfill => {
  polyfill.default()
  log('app', 'start')
  render(<App />, document.getElementById('root'))
})
