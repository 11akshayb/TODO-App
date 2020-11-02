import 'jsdom-global/register';
import React from 'react';
import { mount, shallow, configure } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

import TodoList from '../src/components/TodoList'

describe('TodoList page', function() {
    it('has a submit button', function() {
      const wrapper = shallow(<TodoList />)
      expect(wrapper.containsMatchingElement(<button type="submit" className="btn btn-success btn-block">Submit</button>)).to.be.true;
      expect(wrapper.find('button')).to.have.length(3);
      expect(wrapper.find('input')).to.have.length(1);
      expect(wrapper.find('form')).to.have.length(1);

    });

    it('has an update button', function() {
        const wrapper = shallow(<TodoList />)
        expect(wrapper.containsMatchingElement(<button className="btn btn-primary btn-block">Update</button>)).to.be.true;  
    });

    it('has a createNew button', function() {
        const wrapper = shallow(<TodoList />)
        expect(wrapper.containsMatchingElement(<button className="btn btn-info btn-block">Create New</button>)).to.be.true;  
    });

    // it('has an edit button', function() {
    //     const wrapper = shallow(<TodoList />)
    //     expect(wrapper.containsMatchingElement(<button className="btn btn-info mr-1">Edit</button>)).to.be.true;  
    // });

    // it('has a delete button', function() {
    //     const wrapper = shallow(<TodoList />)
    //     expect(wrapper.containsMatchingElement(<button href="" className="btn btn-danger">Delete</button>)).to.be.true;  
    // });

    it('has an task title input field', () => {
      const wrapper = shallow(<TodoList />);
      expect(wrapper.containsMatchingElement( <label htmlFor="task">Task Title</label>)).to.be.true;
    });

    it('has a task status input field', () => {
      const wrapper = shallow(<TodoList />);
      expect(wrapper.containsMatchingElement( <label htmlFor="status">Task Status</label>)).to.be.true;
    });

    it('passes task title information', () => {
        const title = 'Hi';
          const wrapper = shallow(<TodoList onChange={state => {
            expect(state.task).to.be.equal(title);
          }}/>);
          wrapper.setState({ task : 'Hi'});
        });
});
