import axios from 'axios'

export const getList = token => {
    return axios
        .get('/api/tasks', {
        headers: { 
            'Content-Type': 'application/json',
            'Authorization':token
        }
        })
        .then(res => {
          console.log('Hello',res)
          console.log("res.data.message",res.data)
            res.data.result = 'success'
            return res.data
        }).catch(err => {
            return err
            
        })
}

export const addToList = task => {
  return axios
    .post(
      '/api/task',
      {
        name: task.name,
        status: task.status
      },
      {
        headers: { 
            'Content-Type': 'application/json',
            'Authorization':task.token 
        }
      }
    )
    .then(function(response) {
      console.log(response.status)
        return response.data;
    }).catch(err => {
        return {
            error:'Error to add',
            result:'failed',
            message:err.message
        }
    })
}

export const deleteItem = (task, token) => {
  console.log("task",task)
  return axios
    .delete(`/api/task/${task}`, {
      headers: { 
            'Content-Type': 'application/json',
            'Authorization': token 
        }
    })
    .then(function(response) {
        console.log('deleted task',response)
        return response;
    })
    .catch(function(error) {
      console.log(error)
      return error;
    })
}

export const updateItem = taskUpdateRequest => {
  return axios
    .put(
      `/api/task/${taskUpdateRequest.id}`,
      {
        name: taskUpdateRequest.name,
        status: taskUpdateRequest.status
      },
      {
        headers: { 
            'Content-Type': 'application/json', 
            'Authorization': taskUpdateRequest.token 
        }
      }
    )
    .then(function(response) {
      console.log('updateTask',taskUpdateRequest.id)
      console.log(response.data)
      if(response.data.status===200){
        alert(response.data.message)
      }
      // else if(response.data.status===304){
      //   console.log(response.data.message)
      // }
        return response.data;
    })
    .catch(function(error) {
      console.log(error)
      return error;
    })
}
