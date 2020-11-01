const jwt = require('jsonwebtoken')
process.env.SECRET_KEY = 'secret'
const Task = require('../models/Task')

exports.add = (authParam,request) => {
	return new Promise( async (resolve, reject) => {
        var decoded = jwt.verify(authParam, process.env.SECRET_KEY)
        const user_id = decoded.id;
        request.body.user_id = user_id;
        Task.create(request.body)
        .then(data => {
          resolve(data)
        })
        .catch(err => {
            reject('error: ' + err)
        })                    
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
            resolve ({message:"Task Deleted!"})
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
        Task.findOne({
        where: {
          user_id: decoded.id,
          id:request.params.id
        }
      })
        .then(task => {
          if (task) {
            Task.update(
              { name: request.body.name, status: request.body.status },
              { where: { id: request.params.id } }
            )
              .then(() => {
                resolve ({message:"Task Updated!"})
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
    })

}