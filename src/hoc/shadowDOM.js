import React, { Component } from 'react'
import Shadow from 'react-shadow'
import cx from 'classnames'

const ShadowDOM = (ComposedComponent, props) =>
  class extends Component {
    render () {
      const styles = `:host {
        ${props.stylesheets}
      }`
      return (
        <Shadow>
          <div className={cx(props.classNames)}>
            <ComposedComponent {...props.props} />
            <style type='text/css'>
              {styles}
            </style>
          </div>
        </Shadow>
      )
    }
  }

export default ShadowDOM
