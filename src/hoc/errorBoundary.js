import * as React from 'react'

class ErrorBoundary extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      hasError: false
    }
  }

  componentDidCatch (err, info) {
    if (err) {
      this.setState({ hasError: true })
    }
    // logErrorToMyService(err, info)
  }

  render () {
    if (this.state.hasError) {
      return <span>Something went wrong.</span>
    }
    return this.props.children
  }
}

export default ErrorBoundary
