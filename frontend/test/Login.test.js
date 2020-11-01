import 'jsdom-global/register';
import React from 'react';
import { mount, shallow, configure } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

import Login from '../src/components/Login'

describe('Login page', function() {
    it('has a login button', function() {
      const wrapper = shallow(<Login />)
      expect(wrapper.containsMatchingElement(<button type="submit" onClick={this.handleFormSubmit} className="btn btn-lg btn-primary btn-block">Sign in</button>)).to.be.true
      // const expected = { email: 'xyz@gmail.com', password: 'xyz' };
    });
    it('has a email input field', () => {
      const wrapper = shallow(<Login/>);
      expect(wrapper.containsMatchingElement( <label htmlFor="email" id='emailInput'>Email address</label>)).to.be.true;
    });

    it('has a password input field', () => {
      const wrapper = shallow(<Login/>);
      expect(wrapper.containsMatchingElement(<label htmlFor="password" id='passwordInput'>Password</label>)).to.be.true;
    });

    it('passes login information', () => {
      const email = 'jjj@gmail.com';
      const password = 'jjj';
      const wrapper = shallow(<Login handleFormSubmit={state => {
        expect(state.email).to.be.equal(email);
        expect(state.password).to.be.equal(password);
      }}/>);
      wrapper.setState({ email: 'jjj@gmail.com', password: 'jjj'});
      wrapper.find('button').simulate('submit');
    });
    //   const errors = {};
    //   const handleFormSubmit = sinon.spy();

    //   // const wrapper = mount(<Login />);
    // // const wrapper = shallow(<Login />); 
    // const mockRef = {};
    //   const wrapper = shallow(<Login onSubmit={handleFormSubmit}/>); 
    //   // console.log("wrapper", wrapper)
    //   expect(wrapper.find('button')).to.have.length(1);
    //   expect(wrapper.find('input')).to.have.length(2);
    //   // const emailInput = wrapper.find('#emailInput');
    //   // emailInput.getElement().ref(mockRef.email).simulate('change', {target: {value: 'xyz@gmail.com'}});

    //   // const passwordInput = wrapper.find('#passwordInput');
    //   // passwordInput.getElement().ref(mockRef.password).simulate('change', {target: {value: 'xyz'}});
      
    // //   wrapper.ref('email').simulate('change', {target: {value: 'xyz@gmail.com'}});
    // //   wrapper.ref('password').simulate('change', {target: {value: 'xyz'}});
    //   wrapper.find('button').simulate('submit');
    //   console.log(handleFormSubmit.called)
      // expect(handleFormSubmit.submitted).to.equal(true);
    });
  // });