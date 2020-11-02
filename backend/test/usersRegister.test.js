let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../testServer');
let should = chai.should();

chai.use(chaiHttp);

describe('/POST User Register', () => {
    it('it should register user', (done) => {  
      const user = {
        name: 'ccc',
        email: 'ccc@gmail.com',
        password: 'ccc'
      }
      chai.request(server)
        .post('/users/register')
        .send(user)
        .end((err, res) => {
              res.should.have.status(200);
              res.should.be.json;
              res.request._data.should.have.property('name').eql('ccc');
              res.request._data.should.have.property('email').eql('ccc@gmail.com');
              res.request._data.should.have.property('password').eql('ccc');
              // console.log(res.body.token)
              res.body.should.have.property('token')
              res.should.have.property('badRequest').eql(false);
              res.should.have.property('unauthorized').eql(false);
      
        done();

        });
    });

});