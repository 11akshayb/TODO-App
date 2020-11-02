let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../testServer');
let should = chai.should();

chai.use(chaiHttp);
let token;

describe('/POST User Login', () => {
  it('it should login user', (done) => {  
    const user = {
      email: 'jjj@gmail.com',
      password: 'jjj'
    }
    chai.request(server)
        .post('/users/login')
        .send(user)
        .end((err, res) => {
          token = res.body.token
          res.should.have.status(200);
          res.should.be.json;
          res.request._data.should.have.property('email').eql('jjj@gmail.com');
          res.request._data.should.have.property('password').eql('jjj');
          res.body.should.have.property('token')
                        console.log(res.body.token)
          res.should.have.property('badRequest').eql(false);
          res.should.have.property('unauthorized').eql(false);
          res.should.have.property('notAcceptable').eql(false);
          res.should.have.property('forbidden').eql(false);
          res.should.have.property('notFound').eql(false);         
          done();
        });
  });

});