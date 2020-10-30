const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
process.env.SECRET_KEY = 'secret'
const User = require('../models/User')

exports.register = (userParam) => {
	return new Promise( async (resolve, reject) => {
        // let today = new Date();
        // const today = new Date()
        // const userData = {
        //     name: userParam.name,
        //     email: userParam.email,
        //     password: userParam.password,
        //     createdAt: today
        // }


        bcrypt.hash(userParam.password,10,(err,hash)=>{
            userParam.password = hash
            User.create(userParam)
            .then(user => {
                let token = jwt.sign(user.dataValues, process.env.SECRET_KEY, {
                    expiresIn: 3000
                })
                // return resolve(res.json({ token: token }))
                return resolve(token)
                console.log(token)
            })
            .catch(err => {
               return reject(res.send('error: ' + err))
            })
        })
    })

}

exports.login = (userParam,userPassword) => {
	return new Promise( async (resolve, reject) => {
        // let today = new Date();
        // const today = new Date()
        // const userData = {
        //     name: userParam.name,
        //     email: userParam.email,
        //     password: userParam.password,
        //     createdAt: today
        // }


        if(bcrypt.compareSync(userParam.password,userPassword)){
            let token = jwt.sign(userParam.dataValues, process.env.SECRET_KEY, {
                expiresIn: 3000
            })
            return resolve(token)
        }else{
            return reject(res.json({status:400, error:"Wrong Password"}))
        }
            // .then(user => {
            //     let token = jwt.sign(user.dataValues, process.env.SECRET_KEY, {
            //         expiresIn: 3000
            //     })
            //     // return resolve(res.json({ token: token }))
            //     return resolve(token)
            //     console.log(token)
            // })
            // .catch(err => {
            //    return reject(res.send('error: ' + err))
            // })
        })
    }

