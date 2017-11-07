import * as React from 'react'

type Props = {
  uppercase?: boolean
}

const Alphabet = (props: Props) => (
  <a href='#!'>
    { props.uppercase
      ? String.fromCharCode(...Array(91).keys()).slice(65)
      : String.fromCharCode(...Array(123).keys()).slice(97) }
  </a>
)

export default Alphabet
