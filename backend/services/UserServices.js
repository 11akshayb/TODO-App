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

	// 	let passwordHash = bcrypt.hashSync(userParam.password, 10);
	// 	// let users = {
	// 	// 	name: userParam.name,
	// 	// 	email: userParam.email,
	// 	// 	password : passwordHash
	// 	// }
	// 	connection.query(`insert into users set ?`, users, (error, userInsert) => {
	// 		connection.end();
	// 		if(error){
	// 			return reject(error);
	// 		} else {
	// 			return resolve(userInsert);
	// 		}
	// 	});
	// });
}