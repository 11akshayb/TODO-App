let chai = require('chai');
const sinon = require("sinon");
const expect = chai.expect;
let app = require('../services/user.services')
const { assert } = require('chai');
describe('Service for User Register', () => {
    it('it should return a token if user register successfully',(done) => {  
      const userData = {
        name: 'jkm',
        email: 'jkm@gmail.com',
        password: 'jkm',
        createdAt: new Date()
      }
    //   return app.register(userData)
    //   .then(function(data){
    //       expect(data).to.have.length(339)
    //   })
    // //   app.register(userData)
    // //   assert.ok(true)
    app.register(userData).then(
        function(result){
            // result.should.be.an('array');
            result.should.have.length(339)
            done();
        },
        function (err){
            done(err);
        }
    );
        });
    });

// });