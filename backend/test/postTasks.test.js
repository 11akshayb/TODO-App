let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../testServer');
let should = chai.should();

chai.use(chaiHttp);
let token;
describe('/POST task without token', () => {
    it('it should POST a task', (done) => {
        let task = {
            name: "myTask",
            status: 1
        }
          chai.request(server)
          .post('/api/task')
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
describe('/POST task with a token', () => {
    it('it should POST a task', (done) => {
        let task = {
            name: "myTask",
            status: 1
        }
          chai.request(server)
          .post('/api/task')
          .set("Authorization", token)
          .send(task)
          .end((err, res) => {
                res.should.have.status(200);
                res.should.be.json;
                res.body.should.have.property('createdAt');
                res.body.should.have.property('id');
                res.body.should.have.property('name');
                res.body.should.have.property('status');
                res.body.should.have.property('user_id');
            done();
          });
    });
});
});
