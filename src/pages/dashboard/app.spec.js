import * as React from 'react'
import App from './app'

test('App', () => {
  expect(<App />).toBeInstanceOf(React.constructor)
})
