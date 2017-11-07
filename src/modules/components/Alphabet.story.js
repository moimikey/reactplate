import * as React from 'react'
import { storiesOf } from '@storybook/react'
import Alphabet from './Alphabet'
import Content from '../elements/Content'

storiesOf('Alphabet', module)
  .add('Uppercase', () => (
    <Content>
      <span style={{ display: 'inline-block' }}>
        <Alphabet uppercase />
      </span>
    </Content>
  ))
  .add('Lowercase', () => (
    <Content>
      <span style={{ display: 'inline-block' }}>
        <Alphabet />
      </span>
    </Content>
  ))
