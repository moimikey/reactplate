import React from 'react'
import { shallow } from 'enzyme'
import Alphabet from './Alphabet'

test('Uppercase', () => {
  const wrapper = shallow(<Alphabet uppercase />)
  expect(wrapper.text()).toEqual('ABCDEFGHIJKLMNOPQRSTUVWXYZ')
})

test('Lowercase', () => {
  const wrapper = shallow(<Alphabet />)
  expect(wrapper.text()).toEqual('abcdefghijklmnopqrstuvwxyz')
})
