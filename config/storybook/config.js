import * as React from 'react'
import { addDecorator, configure } from '@storybook/react'

addDecorator(story => (
  <div>
    <style dangerouslySetInnerHTML={{ __html: require('../../src/critical.raw.css') }} />
    {story()}
  </div>
))

configure(() => require('../../src/stories'), module)
