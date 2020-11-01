let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../testServer');
let should = chai.should();

chai.use(chaiHttp);
describe('/GET tasks without token', () => {
    it('it should GET all the tasks', (done) => {
          chai.request(server)
          .get('/api/tasks')
          .end((err, res) => {
                res.should.have.status(200);
            done();
          });
    });
});

let token;

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

describe('/GET tasks with a token', () => {
    it('it should GET all the tasks', (done) => {
    
          chai.request(server)
          .get('/api/tasks')
          .set("Authorization", token)
          .end((err, res) => {
                res.should.have.status(200);
                res.should.be.json;
                res.body.should.be.an('array').that.is.not.empty;
            done();
          });
    });
});
});
