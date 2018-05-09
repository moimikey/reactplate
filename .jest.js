import { configure, shallow, render, mount } from 'enzyme'
import React16Adapter from 'enzyme-adapter-react-16'
import toJson from 'enzyme-to-json'
import 'jest-enzyme'

global.shallow = shallow
global.render = render
global.mount = mount
global.toJson = toJson

console.error = message => {
  throw new Error(message)
}

configure({
  adapter: new React16Adapter()
})
