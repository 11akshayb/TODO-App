const userServices = require('../services/user.services');
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
                    userServices.register(userData)
                    .then(token => {
                        res.status(200)
                        res.json({message:"Registration successful !",token:token})
                    })
                    .catch(err => {
                        res.status(404)
                        res.json({error:err})
                    })                    
                } else {
                    res.status(400)
                    res.json({error:"User already exists !!"})
                }
              })
              .catch(err => {
                res.status(404)
                res.json({error:err})
              })
        
            }else{
              res.status(400)
              res.json({error: "Check all Details!"})  
            }
	} catch (error) {
        res.status(404)
		return res.json({
			message: `Something went wrong : ${error.message}`,
		});
	}
}

exports.login = async (req, res,next) => {
	try {
            User.findOne({
              where: {
                email: req.body.email
              }
            })
            .then(user => {
                if (user) {
                    const userData = {
                        name: req.body.name,
                        email: req.body.email,
                        password: req.body.password,
                        createdAt: new Date()
                    }
                    let userPassword = user.password
                    userServices.login(user,userData,userPassword)
                    .then(token=> {
                        res.status(200)
                        res.json({token:token,message:"Login successful!!!"})
                        console.log(token.length)
                    })
                    .catch(err => {
                        res.status(404)
                        res.json({error:err})
                    }) 
                } else {
                    res.status(400)
                    res.json({error:"User does not exist !!"})
                }
              })
              .catch(err => {
                  res.status(404)
                res.send('error: ' + err)
              })
	} catch (error) {
        res.status(404)
		return res.json({
			message: `Somthing went wrong : ${error.message}`,
		});
	}
}