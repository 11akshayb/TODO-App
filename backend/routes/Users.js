const express = require('express')
const users = express.Router()
const cors = require('cors')
const userController = require('../controllers/user.controller');

users.use(cors())

users.post('/register', userController.register);
users.post('/login', userController.login);
// users.post('/login', (req, res) => {
//     User.findOne({
//       where: {  
//         email: req.body.email
//       }
//     })
//       .then(user => {
//         // console.log("hahahahaha",user)
//         if (user) {
//             if(bcrypt.compareSync(req.body.password,user.password)){
//                 let token = jwt.sign(user.dataValues, process.env.SECRET_KEY, {
//                     expiresIn: 3000
//                 })
//                 res.json({ token: token })
//             }else{
              
//                 res.json({status:400, error:"Wrong Password"})

//             }
//         } else {
//           res.json({status:400, error:"User does not exist"})
//           // res.status(400).json({error:'User does not exist'});
//         }
//       })
//       .catch(err => {
//         res.status(400).json({error:err})
//       })
// })

module.exports = users;