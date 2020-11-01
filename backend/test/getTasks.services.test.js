let chai = require('chai');
const {token} = require('../token.config')
let app = require('../services/task.services')

describe('Service for getting all tasks', () => {
    it('it should return an array of tasks',(done) => {  
      const auth = token
    app.getAll(auth).then(
        function(result){
            result.should.be.an('array').that.is.not.empty;
            done();
        },
        function (err){
            done(err);
        }
    );
        });
    });