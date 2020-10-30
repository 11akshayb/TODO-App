import 'jsdom-global/register';
import React from 'react';
// import enzyme from 'enzyme';
import { mount, shallow,configure } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

import Login from '../src/components/Login'
// import App from '../src/App'

describe('Login page', function() {
    it('logins existing user', function() {

      const expected = { email: 'xyz@gmail.com', password: 'xyz' };

      const errors = {};
      const handleFormSubmit = sinon.spy();

      // const wrapper = mount(<Login />);
    // const wrapper = shallow(<Login />); 
    const mockRef = {};
      const wrapper = shallow(<Login onSubmit={handleFormSubmit}/>); 
      // console.log("wrapper", wrapper)
      expect(wrapper.find('button')).to.have.length(1);
      expect(wrapper.find('input')).to.have.length(2);
      const emailInput = wrapper.find('#emailInput');
      emailInput.getElement().ref(mockRef.email).simulate('change', {target: {value: 'xyz@gmail.com'}});

      const passwordInput = wrapper.find('#passwordInput');
      passwordInput.getElement().ref(mockRef.password).simulate('change', {target: {value: 'xyz'}});
      
    //   wrapper.ref('email').simulate('change', {target: {value: 'xyz@gmail.com'}});
    //   wrapper.ref('password').simulate('change', {target: {value: 'xyz'}});
      wrapper.find('button').simulate('submit');

      expect(handleFormSubmit.called).to.equal(true);
    });
  });