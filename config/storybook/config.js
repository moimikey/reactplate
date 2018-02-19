import * as React from 'react'
import { addDecorator, configure } from '@storybook/react'

addDecorator(story => React.createElement(
  'div',
  null,
  React.createElement('style', { dangerouslySetInnerHTML: { __html: require('../../src/critical.raw.css') } }),
  story()
))

configure(() => require('../../src/stories'), module)
