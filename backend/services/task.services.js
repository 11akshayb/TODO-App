const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
process.env.SECRET_KEY = 'secret'
const Task = require('../models/Task')

exports.add = (authParam,request) => {
	return new Promise( async (resolve, reject) => {
        var decoded = jwt.verify(authParam, process.env.SECRET_KEY)
        const user_id = decoded.id;
        request.body.user_id = user_id;
        console.log("req-body",request.body);
        Task.create(request.body)
        .then(data => {
          resolve(data)
        })
        .catch(err => {
            reject('error: ' + err)
        })
        //     bcrypt.hash(userParam.password,10,(err,hash)=>{
        //     userParam.password = hash
        //     User.create(userParam)
        //     .then(user => {
        //         let token = jwt.sign(user.dataValues, process.env.SECRET_KEY, {
        //             expiresIn: 3000
        //         })
        //          resolve(token)
        //     })
        //     .catch(err => {
        //         reject('error: ' + err)
        //     })
        // })
    })

}


exports.getAll = (auth) => {
    return new Promise( async (resolve, reject) => {
        var decoded = jwt.verify(auth, process.env.SECRET_KEY)
        Task.findAll({
            where: {
              user_id: decoded.id
            }
          })
        .then(tasks => {
          resolve(tasks)
        })
        .catch(err => {
            reject('error: ' + err)
        })
    })
}
exports.delete = (authParam,taskId) => {
    return new Promise( async (resolve, reject) => {
    var decoded = jwt.verify(authParam, process.env.SECRET_KEY)
    console.log("user_decoded_id",decoded.id);
    Task.findOne({
        where: {
          user_id: decoded.id,
          id:taskId
        }
    })
    .then(task => {
        if (task) {
          Task.destroy({
            where: {
              id: taskId
            }
        })
        .then(() => {
            resolve ()
        })
        .catch(err => {
            reject ({err:"Task not Found"})
        })
        }else{
            reject("Task not Found")
        }
    })
    .catch(err => {
        reject('error: ' + err)
    })
    })
}
exports.update = (authParam,request) => {
	return new Promise( async (resolve, reject) => {
        var decoded = jwt.verify(authParam, process.env.SECRET_KEY)
        console.log("user_decoded_id",decoded.id);
        Task.findOne({
        where: {
          user_id: decoded.id,
          id:request.params.id
        }
      })
        .then(task => {
          if (task) {
            // res.json({status:'success'})
            Task.update(
              { name: request.body.name, status: request.body.status },
              { where: { id: request.params.id } }
            )
              .then(() => {
                resolve ()
                // // if(task.name===""){
                // //   res.json({status:304,message:"Name cannot be empty"})
                // // }
                // // else{
                // // res.json({status:"updates"})
                // // console.log('any')
                // res.json({ status: 200, message:'Task Updated !' })
                // // console.log('4')
                // // }
              })
              .catch(err => {
                reject ({err:"Task not Found"})
            })
          }else{
            reject("Task not Found!!")
          }
        })
        .catch(err => {
            reject('error: ' + err)
        })
        //     bcrypt.hash(userParam.password,10,(err,hash)=>{
        //     userParam.password = hash
        //     User.create(userParam)
        //     .then(user => {
        //         let token = jwt.sign(user.dataValues, process.env.SECRET_KEY, {
        //             expiresIn: 3000
        //         })
        //          resolve(token)
        //     })
        //     .catch(err => {
        //         reject('error: ' + err)
        //     })
        // })
    })

}