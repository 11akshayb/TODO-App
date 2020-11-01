let chai = require('chai');
const sinon = require("sinon");
const expect = chai.expect;
const {token} = require('../token.config')
let app = require('../services/task.services')
const { assert } = require('chai');
describe('Service for Deleting a task', () => {
    it('it should delete a task',(done) => {  
        const auth = token
        const taskId = 24
        app.delete(auth,taskId).then(
        function(result){
            result.should.be.json;
            result.should.have.property('message').eql('Task Deleted!');
            // result.dataValues.should.have.property('createdAt');
            // result.dataValues.should.have.property('id');
            // result.dataValues.should.have.property('name');
            // result.dataValues.should.have.property('status');
            // result.dataValues.should.have.property('user_id');
            done();
        },
        function (err){
            done(err);
        }
    );
    });
});