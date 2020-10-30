import 'jsdom-global/register';
import React from 'react';
// import enzyme from 'enzyme';
import { mount, shallow,configure } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

import Register from '../src/components/Register'
// import App from '../src/App'

describe('Signup page', function() {
    it('registers a new user', function() {

      const expected = { name: 'rrr', email: 'rrr@gmail.com', password: 'rrr' };

      const errors = {};
      const handleFormSubmit = sinon.spy();

    //   const wrapper = mount(<Register />); 
      const wrapper = shallow(<Register />); 
    //   console.log("wrapper", wrapper)
      expect(wrapper.find('button')).to.have.length(1);
      expect(wrapper.find('input')).to.have.length(3);

    //   wrapper.ref('email').simulate('change', {target: {value: 'xyz@gmail.com'}});
    //   wrapper.ref('password').simulate('change', {target: {value: 'xyz'}});
    //   wrapper.find('button').simulate('click');

    //   expect(handleFormSubmit.called).to.equal(true);
    });
  });