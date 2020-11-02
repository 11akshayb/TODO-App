let chai = require('chai');
const {token} = require('../token.config')
let app = require('../services/task.services')

describe('Service for Updating a task', () => {
    it('it should update a task',(done) => {  
        const auth = token
        const request = {params:{ id: '40' },body:{ name: 'lmn', status: '2' }}
        app.update(auth,request).then(
        function(result){
            result.should.be.json;
            result.should.have.property('message').eql('Task Updated!');
            done();
        },
        function (err){
            done(err);
        }
    );
    });
});