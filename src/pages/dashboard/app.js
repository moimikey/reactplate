import * as React from 'react'
import { Row, Col } from 'react-materialize'
import { compose, withState } from 'recompose'
import { withLifecycle } from '../../hoc'
import log from '../../util/logger'

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

export default compose(
  withState('isLoading', 'setLoading', false),
  withLifecycle({
    onDidMount ({ setLoading }) {
      setLoading(true, () => setTimeout(() => setLoading(false), 500))
    },
    onWillReceiveProps (props, nextProps) {
      log('component(App):isLoading', `${props.isLoading} → ${nextProps.isLoading}`)
    }
  })
)(App)
