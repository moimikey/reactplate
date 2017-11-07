import * as React from 'react'
import { storiesOf } from '@storybook/react'
import Content from './Content'
import Button from './Button'

storiesOf('Button', module)
  .add('with text', () => (
    <Content>
      <Button>Hello Button</Button>
    </Content>
  ))
  .add('with some emoji', () => (
    <Content>
      <Button>😀 😎 👍 💯</Button>
    </Content>
  ))
  .add('fancy', () => (
    <Content>
      <Button>I AM BUTTON!</Button>
    </Content>
  ))
