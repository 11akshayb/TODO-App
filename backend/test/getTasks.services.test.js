let chai = require('chai');
const sinon = require("sinon");
const expect = chai.expect;
const {token} = require('../token.config')
let app = require('../services/task.services')
const { assert } = require('chai');
describe('Service for getting all tasks', () => {
    it('it should return an array of tasks',(done) => {  
      const auth = token
    //   return app.register(userData)
    //   .then(function(data){
    //       expect(data).to.have.length(339)
    //   })
    // //   app.register(userData)
    // //   assert.ok(true)
    app.getAll(auth).then(
        function(result){
            result.should.be.an('array');
            // result.should.have.length(339)
            done();
        },
        function (err){
            done(err);
        }
    );
        });
    });

// });