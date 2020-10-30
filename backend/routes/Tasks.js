var express = require('express')
var tasks = express.Router()
const cors = require('cors')
const jwt = require('jsonwebtoken')
const validator = require('validator')
const Task = require('../models/Task')

tasks.use(cors())

process.env.SECRET_KEY = 'secret'

tasks.get('/tasks', function(req, res, next) {
  console.log("1")
  if(req.headers['authorization']){
    var decoded = jwt.verify(req.headers['authorization'], process.env.SECRET_KEY)
    Task.findAll({
      where: {
        user_id: decoded.id
      }
    })
      .then(tasks => {
        res.json(tasks)
      })
      .catch(err => {
        res.send('error: ' + err)
      })
  }else{
    res.json({status:'failed',message:'Token not passed !'})
    console.log("Token Not Passed");
  }
})

// tasks.get('/task/:id', function(req, res, next) {
//   if(req.headers['authorization']){
//     Task.findOne({
//       where: {
//         id: req.params.id
//       }
//     })
//       .then(task => {
//         if (task) {
//           res.json(task)
//         } else {
//           res.send('Task does not exist')
//         }
//       })
//       .catch(err => {
//         res.send('error: ' + err)
//       })
//   }else{
//     res.json({status:'failed',message:'Token not passed !'})
//     console.log("Token Not Passed");
//   }
// })

tasks.post('/task', function(req, res, next) {
  console.log("Post")
  if(req.headers['authorization']){
    if (!req.body.name && !req.body.status) {
      res.status(400)
      res.json({
        error: 'Bad Data'
      })
    } else {
      var decoded = jwt.verify(req.headers['authorization'], process.env.SECRET_KEY)
      const user_id = decoded.id;
      req.body.user_id = user_id;
      console.log("req-body",req.body);
      Task.create(req.body)
        .then(data => {
          res.send(data)
        })
        .catch(err => {
          res.json('error: ' + err)
        })
    }
  }
  else{
    res.json({status:'failed',message:'Token not passed !'})
    console.log("Token Not Passed");
  }
})

tasks.delete('/task/:id', function(req, res, next) {
  if(req.headers['authorization']){

    var decoded = jwt.verify(req.headers['authorization'], process.env.SECRET_KEY)
      console.log("user_decoded_id",decoded.id);
      Task.findOne({
        where: {
          user_id: decoded.id,
          id:req.params.id
        }
      })
      .then(task => {
        if (task) {
          Task.destroy({
            where: {
              id: req.params.id
            }
          })
          .then(() => {
            res.json({ status: 'Task Deleted!' })
          })
          .catch(err => {
            res.send('error: ' + err)
          })
        }else{
          res.json({ status: 'failed', message:'Task not found' })
        }
    }).catch(err => {
      res.json({ status: 'failed', message:'Task not found' })
    })

  }else{
      res.json({status:'failed',message:'Token not passed !'})
      console.log("Token Not Passed");
  }
})

tasks.put('/task/:id', function(req, res, next) {
  if(req.headers['authorization']){
    if (!req.body.name && !req.body.status) {
      res.status(400)
      res.json({
        error: 'Bad Data'
      })
      console.log(res.json)
    } else {

      var decoded = jwt.verify(req.headers['authorization'], process.env.SECRET_KEY)
      console.log("user_decoded_id",decoded.id);
      Task.findOne({
        where: {
          user_id: decoded.id,
          id:req.params.id
        }
      })
        .then(task => {
          // res.json({task:task})
          // res.json({task: task})
          if (task) {
            // res.json({status:'success'})
            Task.update(
              { name: req.body.name, status: req.body.status },
              { where: { id: req.params.id } }
            )
              .then(() => {
                // if(task.name===""){
                //   res.json({status:304,message:"Name cannot be empty"})
                // }
                // else{
                // res.json({status:"updates"})
                // console.log('any')
                res.json({ status: 200, message:'Task Updated !' })
                // console.log('4')
                // }
              })
              // .error(err => handleError(err))
          }else{
            res.json({ status: 'failed3', message:'Task not found' })
            console.log('3')

          }
        }).catch(err => {
          res.json({status:err})
          // res.json({ error: err, message:'Task not found' })
          // console.log(err)
        })

    }
  }
  else{
    res.json({status:'failed',message:'Token not passed !'})
    console.log("Token Not Passed");
    console.log('2')

  }
})

module.exports = tasks
