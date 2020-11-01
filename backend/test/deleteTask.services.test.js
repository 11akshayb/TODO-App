let chai = require('chai');
const {token} = require('../token.config')
let app = require('../services/task.services')

describe('Service for Deleting a task', () => {
    it('it should delete a task',(done) => {  
        const auth = token
        const taskId = 24
        app.delete(auth,taskId).then(
        function(result){
            result.should.be.json;
            result.should.have.property('message').eql('Task Deleted!');
            done();
        },
        function (err){
            done(err);
        }
    );
    });
});