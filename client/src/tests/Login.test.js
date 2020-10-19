import React from 'react'
import renderer from 'react-test-renderer'
import Login from '../components/Login.js'

test('Login correctly', ()=>{
    const component = renderer.create(<Login />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
})