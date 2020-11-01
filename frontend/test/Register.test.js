import 'jsdom-global/register';
import React from 'react';
import { mount, shallow, configure } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

import Register from '../src/components/Register'

describe('Register page', function() {
    it('has a register button', function() {
      const wrapper = shallow(<Register />)
      expect(wrapper.containsMatchingElement(<button type="submit" onClick={this.handleFormSubmit} className="btn btn-lg btn-primary btn-block">Register!</button>)).to.be.true
      expect(wrapper.find('button')).to.have.length(1);
      expect(wrapper.find('input')).to.have.length(3);
    });
    it('has a email input field', () => {
      const wrapper = shallow(<Register />);
      expect(wrapper.containsMatchingElement( <label htmlFor="email">Email address</label>)).to.be.true;
    });

    it('has a name input field', () => {
      const wrapper = shallow(<Register />);
      expect(wrapper.containsMatchingElement( <label htmlFor="name">First name</label>)).to.be.true;
    });

    it('has a password input field', () => {
      const wrapper = shallow(<Register />);
      expect(wrapper.containsMatchingElement(<label htmlFor="password">Password</label>)).to.be.true;
    });

    it('passes register information', () => {
    const name = 'jjj';
      const email = 'jjj@gmail.com';
      const password = 'jjj';
      const wrapper = shallow(<Register handleFormSubmit={state => {
        expect(state.name).to.be.equal(name);
        expect(state.email).to.be.equal(email);
        expect(state.password).to.be.equal(password);
      }}/>);
      wrapper.setState({ name : 'jjj', email: 'jjj@gmail.com', password: 'jjj'});
      wrapper.find('button').simulate('submit');
    });
    //   const handleFormSubmit = sinon.spy();
});
