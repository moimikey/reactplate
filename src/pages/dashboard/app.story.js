import * as React from 'react'
import { storiesOf } from '@storybook/react'
import App from './app'

storiesOf('App', module)
  .add('default', () => (
    <App />
  ))
