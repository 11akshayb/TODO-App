let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../testServer');
let should = chai.should();

chai.use(chaiHttp);

describe('/POST User Register', () => {
    it('it should register user', (done) => {  
      const user = {
        name: 'jjj',
        email: 'jjj@gmail.com',
        password: 'jjj'
      }
      chai.request(server)
        .post('/users/register')
        .send(user)
        .end((err, res) => {
              res.should.have.status(200);
              res.should.be.json;
              res.request._data.should.have.property('name').eql('jjj');
              res.request._data.should.have.property('email').eql('jjj@gmail.com');
              res.request._data.should.have.property('password').eql('jjj');
              res.body.should.have.property('token')
              res.should.have.property('badRequest').eql(false);
              res.should.have.property('unauthorized').eql(false);
      
        done();

        });
    });

});