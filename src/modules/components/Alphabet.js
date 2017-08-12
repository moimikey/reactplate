import React from 'react'

type Props = {
  uppercase?: boolean
}

const Alphabet = (props: Props) => (
  <div>
    {
      props.uppercase
        ? String.fromCharCode(...Array(91).keys()).slice(65)
        : String.fromCharCode(...Array(123).keys()).slice(97)
    }
  </div>
)

export default Alphabet
