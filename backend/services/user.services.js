const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
process.env.SECRET_KEY = 'secret'
const User = require('../models/User')

exports.register = (userParam) => {
	return new Promise( async (resolve, reject) => {
            bcrypt.hash(userParam.password,10,(err,hash)=>{
            userParam.password = hash
            User.create(userParam)
            .then(user => {
                let token = jwt.sign(user.dataValues, process.env.SECRET_KEY, {
                    expiresIn: 3000
                })
                 resolve(token)
            })
            .catch(err => {
                reject('error: ' + err)
            })
        })
    })

}

exports.login = (user,userParam,userPassword) => {
	return new Promise( async (resolve, reject) => {
            if(bcrypt.compareSync(userParam.password,userPassword)){
            let token = jwt.sign(user.dataValues, process.env.SECRET_KEY, {
                expiresIn: 3000
            })
            resolve(token)
        }else{
            reject("Wrong Password")
        }
    })
}

