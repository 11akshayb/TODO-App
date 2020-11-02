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
      expect(wrapper.find('button')).to.have.length(1);
      expect(wrapper.find('input')).to.have.length(2);
    });
    it('has an email input field', () => {
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
});
