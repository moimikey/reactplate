import React from 'react'
import { Row, Navbar, Icon } from 'react-materialize'

const App = ({ component: Component }) => (
  <div>
    <Row>
      <Navbar brand={<Icon>tonality</Icon>} className='orange' right />
    </Row>
    <Component />
  </div>
)

export default App
