import 'jsdom-global/register';
import React from 'react';
let chai = require('chai');
let should = chai.should();
// const {token} = require('../token.config')
let app = require('../src/components/UserFunctions')
describe('Register User', () => {
    it('it should register a user and send response data',(done) => {  
        // const auth = token
        // const taskId = 24
        const newUser = {
            name: 'iii',
            email: 'iii@gmail.com',
            password: 'iii'
        }
        app.register(newUser).then(res => {
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