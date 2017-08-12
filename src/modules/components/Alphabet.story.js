import React from 'react'
import { storiesOf } from '@storybook/react'
import Alphabet from './Alphabet'
import Content from '../elements/Content'

storiesOf('Alphabet', module)
  .add('Uppercase', () => (
    <Content>
      <Alphabet uppercase />
    </Content>
  ))
  .add('Lowercase', () => (
    <Content>
      <Alphabet />
    </Content>
  ))
