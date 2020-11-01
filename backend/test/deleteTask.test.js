let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../testServer');
let should = chai.should();

chai.use(chaiHttp);
let token;

describe('/DELETE task without token', () => {
    it('it should DELETE a task with the id', (done) => {
        let task = {
            id:17
        }
          chai.request(server)
          .delete(`/api/task/${task}`)
          .send(task)
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
describe('/DELETE task with a token', () => {
    it('it should DELETE a task given the id', (done) => {
        let task = {
            id:3
        }
          chai.request(server)
          .delete('/api/task/3')
          .set("Authorization", token)
          .send(task)
          .end((err, res) => {
                res.should.have.status(200);
                res.should.be.json;
                res.body.should.not.have.property('id').eql('3');
                res.body.should.have.property('status').eql('Task Deleted!');
            done();
          });
    });
});
});