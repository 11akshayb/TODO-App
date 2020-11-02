import 'jsdom-global/register';
const {token} = require('../token.config')
import React from 'react';
import { mount, shallow, configure } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

let app = require('../src/components/TodoListFunctions')
describe('Get Tasks', () => {
    it('it should get all the tasks of a user',(done) => {  
        const auth = token
        // const taskId = 24
        const newUser = {
            name: 'iii',
            email: 'iii@gmail.com',
            password: 'iii'
        }
        app.deleteItem('24',auth).then(res => {
            console.log('res',res)
        }
        // function(result){
        //     result.should.be.json;
        //     // result.status.eql(200)
        //     // // result.data.should.have.property('message').eql('Registration successful !');
        //     // result.data.should.have.property('token')
        //     console.log('Result',result)
        //     done();
        // },
        // function (err){
        //     done(err);
        // }
    
    ).catch(err => {
        console.log('err')
    });
    done();
    });
});