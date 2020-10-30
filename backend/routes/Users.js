const express = require('express')
const users = express.Router()
const cors = require('cors')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const validator = require('validator')
const userController = require('../controllers/UserController');

const User = require('../models/User')
users.use(cors())

process.env.SECRET_KEY = 'secret'

users.post('/register', userController.register);
//  => {
//     const today = new Date()
//     const userData = {
//       name: req.body.name,
//       email: req.body.email,
//       password: req.body.password,
//       createdAt: today
//     }
//     // if(req.body.name.split('').includes(' ') || req.body.name === '' || req.body.email === '' || req.body.password === ''){
//   if(!validator.isEmpty(req.body.name) && !validator.isEmpty(req.body.email) && validator.isEmail(req.body.email) && !validator.isEmpty(req.body.password)){ 
//     User.findOne({
//       where: {
//         email: req.body.email
//       }
//     })
//     .then(user => {
//         if (!user) {
//             bcrypt.hash(req.body.password,10,(err,hash)=>{
//                 userData.password = hash
//                 User.create(userData)
//                 .then(user => {
//                     let token = jwt.sign(user.dataValues, process.env.SECRET_KEY, {
//                         expiresIn: 3000
//                     })
//                     res.json({ token: token })
//                 })
//                 .catch(err => {
//                     res.send('error: ' + err)
//                 })
//             })
            
//         } else {
//           res.json({ status:400, error: 'User Already Exists!!!' })
//         }
//       })
//       .catch(err => {
//         res.send('error: ' + err)
//       })
    
//     }else{
//       res.json({status:400, error:"Check all Details!"})
//     }
 
// })


users.post('/login', (req, res) => {
    User.findOne({
      where: {
        email: req.body.email
      }
    })
      .then(user => {
        if (user) {
            if(bcrypt.compareSync(req.body.password,user.password)){
                let token = jwt.sign(user.dataValues, process.env.SECRET_KEY, {
                    expiresIn: 3000
                })
                res.json({ token: token })
            }else{
              
                res.json({status:400, error:"Wrong Password"})

            }
        } else {
          res.json({status:400, error:"User does not exist"})
          // res.status(400).json({error:'User does not exist'});
        }
      })
      .catch(err => {
        res.status(400).json({error:err})
      })
})

module.exports = users;