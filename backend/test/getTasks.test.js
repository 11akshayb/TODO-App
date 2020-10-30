let chai = require('chai');
let chaiHttp = require('chai-http');
// let server = require('../server');
let server = require('../testServer');
let should = chai.should();

chai.use(chaiHttp);
describe('/GET tasks without token', () => {
    it('it should GET all the tasks', (done) => {
          chai.request(server)
          .get('/api/tasks')
          .end((err, res) => {
                res.should.have.status(200);
                // console.log(res)
                // res.body.should.be.a('array');
                // res.body.length.should.be.eql(0);
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
            //   console.log(res.body.token)
            token = res.body.token;
            // console.log(token)
            res.should.have.status(200);
            done();
          });
      });
    //   afterEach(done => {
    //     // After each test we truncate the database
    //     User.remove({}, err => {
    //       done();
    //     });
    //   });

describe('/GET tasks with a token', () => {
    it('it should GET all the tasks', (done) => {
        // let task = {
        //     name: "myTask",
        //     status: 1
        // }
          chai.request(server)
          .get('/api/tasks')
          .set("Authorization", token)
        //   .send(task)
          .end((err, res) => {
                res.should.have.status(200);
                res.should.be.json;
                res.body.should.be.an('array').that.is.not.empty;

                // res.body.should.have.all.keys('createdAt','id','name','status','user_id')

                // res.body.should.have.property('createdAt');
                // res.body.should.have.property('id');
                // res.body.should.have.property('name');
                // res.body.should.have.property('status');
                // res.body.should.have.property('user_id');
                // console.log(res.body)
            done();
          });
    });
});
});
