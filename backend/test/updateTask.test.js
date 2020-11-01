let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../testServer');

let should = chai.should();

chai.use(chaiHttp);
let token;

describe('/PUT task without token', () => {
    it('it should UPDATE a task with the id', (done) => {
        let task = {
            id:21
        }
        let request = {
            name:'myTask',
            status:2
        }
          chai.request(server)
          .put('/api/task/21')
          .send(request)
          .end((err, res) => {
                res.should.have.status(200);
                res.should.be.json;
                res.body.should.have.property('status').eql('failed');
                res.body.should.have.property('message').eql('Token not passed !');
            done();
          });
    });
});

describe("User", () => {
    const user = {
        email: 'jjj@gmail.com',
        password: 'jjj'
      }
    beforeEach(done => {
        chai
          .request(server)
          .post("/users/login")
          .send(user)
          .end((err, res) => {
            token = res.body.token;
            res.should.have.status(200);
            done();
          });
      });
describe('/PUT task with a token', () => {
    it('it should UPDATE a task given the id', (done) => {
        let task = {
            id:25
        }
        let request = {
            name:'myTaskx',
            status:2
        }
          chai.request(server)
          .put('/api/task/25')
          .set("Authorization", token)
          .send(request)
          .end((err, res) => {
                res.should.have.status(200);
                res.should.be.json;                            
                res.body.should.have.property('status').eql('success');
                res.body.should.have.property('message').eql('Task Updated !');
            done();
          });
    });
});
});