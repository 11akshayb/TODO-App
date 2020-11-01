let chai = require('chai');
const sinon = require("sinon");
const expect = chai.expect;
const {token} = require('../token.config')
let app = require('../services/task.services')
const { assert } = require('chai');
describe('Service for adding a task', () => {
    it('it should add a new task',(done) => {  
      const auth = token
        const req = {body:{ name: 'kkkk', status: 0, user_id: 1 }}
    app.add(auth,req).then(
        function(result){
            result.should.be.json;
            result.should.have.property('dataValues');
            result.dataValues.should.have.property('createdAt');
            result.dataValues.should.have.property('id');
            result.dataValues.should.have.property('name');
            result.dataValues.should.have.property('status');
            result.dataValues.should.have.property('user_id');
            done();
        },
        function (err){
            done(err);
        }
    );
    });
});