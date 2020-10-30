const userServices = require('../services/UserServices');
const validator = require('validator')
const User = require('../models/User')

exports.register = async (req, res,next) => {
	try {
        if(!validator.isEmpty(req.body.name) && !validator.isEmpty(req.body.email) && validator.isEmail(req.body.email) && !validator.isEmpty(req.body.password)){ 
            User.findOne({
              where: {
                email: req.body.email
              }
            })
            .then(user => {
                if (!user) {
                    const userData = {
                        name: req.body.name,
                        email: req.body.email,
                        password: req.body.password,
                        createdAt: new Date()
                    }
                    let userRegister = userServices.register(userData)
                    // if(userRegister)
                    // console.log("Haha",user)
                    // bcrypt.hash(req.body.password,10,(err,hash)=>{
                    //     userData.password = hash
                    //     User.create(userData)
                    //     .then(user => {
                    //         let token = jwt.sign(user.dataValues, process.env.SECRET_KEY, {
                    //             expiresIn: 3000
                    //         })
                    //         res.json({ token: token })
                    //     })
                    //     .catch(err => {
                    //         res.send('error: ' + err)
                    //     })
                    // })
                    
                } else {
                    res.json({status:400, error:"User does not exist"})
                    // res.status(400).json({error:'User does not exist'});
                  }
              })
              .catch(err => {
                res.send('error: ' + err)
              })
        
            }else{
              res.json({status:400, error:"Check all Details!"})
            }
         
        // })

	} catch (error) {
		return res.json({
			status: true,
			message: `Somthing went wrong : ${error.message}`,
			result: null
		});
	}
}

exports.login = async (req, res,next) => {
	try {
        // if(!validator.isEmpty(req.body.name) && !validator.isEmpty(req.body.email) && validator.isEmail(req.body.email) && !validator.isEmpty(req.body.password)){ 
            User.findOne({
              where: {
                email: req.body.email
              }
            // })
            .then(user => {
                if (user) {
                    const userData = {
                        name: req.body.name,
                        email: req.body.email,
                        password: req.body.password,
                        createdAt: new Date()
                    }
                    let userPassword = user.password
                    let userLogin = userServices.login(userData,userPassword)
                    // if(userRegister)
                    // console.log("Haha",user)
                    // bcrypt.hash(req.body.password,10,(err,hash)=>{
                    //     userData.password = hash
                    //     User.create(userData)
                    //     .then(user => {
                    //         let token = jwt.sign(user.dataValues, process.env.SECRET_KEY, {
                    //             expiresIn: 3000
                    //         })
                    //         res.json({ token: token })
                    //     })
                    //     .catch(err => {
                    //         res.send('error: ' + err)
                    //     })
                    // })
                    
                } else {
                  res.json({ status:400, error: 'User Already Exists!!!' })
                }
              })
              .catch(err => {
                res.send('error: ' + err)
              })
        
            }else{
              res.json({status:400, error:"Check all Details!"})
            }
         
        // })

	} catch (error) {
		return res.json({
			status: true,
			message: `Somthing went wrong : ${error.message}`,
			result: null
		});
	}
}