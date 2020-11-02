let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../testServer');
let should = chai.should();

chai.use(chaiHttp);

describe('/POST User Register', () => {
    it('it should register user', (done) => {  
      const user = {
        name: 'kk',
        email: 'kk@gmail.com',
        password: 'kk'
      }
      chai.request(server)
        .post('/users/register')
        .send(user)
        .end((err, res) => {
              res.should.have.status(200);
              res.should.be.json;
              res.request._data.should.have.property('name').eql('kk');
              res.request._data.should.have.property('email').eql('kk@gmail.com');
              res.request._data.should.have.property('password').eql('kk');
              res.body.should.have.property('token')
              res.should.have.property('badRequest').eql(false);
              res.should.have.property('unauthorized').eql(false);
      
        done();

        });
    });

});