const taskServices = require('../services/task.services.js');
const validator = require('validator')
const Task = require('../models/Task')

exports.getTask = async (req,res,next) => {
    try{
        if(req.headers['authorization']){
            let auth = req.headers['authorization']
            // console.log('headers',auth)
            taskServices.getAll(auth)
            .then(tasks => {
                res.status(200)
                res.send(tasks)
                // console.log(tasks)
                res.json({tasks:tasks,message:"Got all Task!"})
            })
            .catch(err => {
                res.status(404)
                res.json('error: ' + err)
            })
        }else{
            res.status(401)
            res.json({message:'Token not passed !'})

        }

    }catch (error) {
        res.status(404)
		return res.json({
			message: `Something went wrong : ${error.message}`,
		});
	}
}

exports.addTask = async (req,res,next) => {
    try{
        if(req.headers['authorization']){
            if (!req.body.name && !req.body.status) {
              res.status(400)
              res.json({
                error: 'Bad Data'
              })
            }else{
                let auth = req.headers['authorization']
                taskServices.add(auth,req)
                console.log('requ',req.body)
                .then(data => {
                    res.status(200)
                    res.send(data)
                    // console.log('Hi',data.dataValues)
                })
                .catch(err => {
                    res.status(404)
                    res.json('error: ' + err)
                })
            }
        }else{
            res.status(400)
            res.json({error : 'Token not Passed'})
        }
    }catch (error) {
        res.status(404)
		return res.json({
			message: `Something went wrong : ${error.message}`,
		});
	}
}

exports.deleteTask = async(req,res,next) => {
    try{
        if(req.headers['authorization']){
            let auth = req.headers['authorization']
            let taskId = req.params.id
            taskServices.delete(auth,taskId)
            .then(() => {
                res.status(200)
                res.json({message:"Task Deleted!"})
            })
            .catch(err => {
                res.status(404)
                res.json({error:err})
            })
        }else{
            res.status(401)
            res.json({error:'Token not Passed!'})
        }            
    }catch (error) {
        res.status(404)
		return res.json({
			message: `Something went wrong : ${error.message}`,
		});
	}
}
exports.updateTask = async (req,res,next) => {
    try{
        if(req.headers['authorization']){
            if (!req.body.name && !req.body.status) {
              res.status(400)
              res.json({
                error: 'Bad Data'
              })
            }else{
                let auth = req.headers['authorization']
                // let taskId = req.params.id
                taskServices.update(auth,req)
                .then(() => {
                    res.status(200)
                    res.json({message:"Task Updated!"})
                })
                .catch(err => {
                    res.status(404)
                    res.json('error: ' + err)
                })
            }
        }else{
            res.status(400)
            res.json({error : 'Token not Passed'})
        }
    }catch (error) {
        res.status(404)
		return res.json({
			message: `Something went wrong : ${error.message}`,
		});
	}
}
