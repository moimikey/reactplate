import * as React from 'react'
import { Row, Col } from 'react-materialize'

const App = ({ isLoading }) => (
  <div className='App'>
    {
      isLoading ? (
        <Row>
          <Col s={12}>Loading</Col>
        </Row>
      ) : (
        <Row>
          <Col s={8}>Hello</Col>
          <Col s={4}>World</Col>
        </Row>
      )
    }
  </div>
)

export default App
