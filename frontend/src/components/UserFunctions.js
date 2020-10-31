import axios from 'axios'

export const register = newUser => {
  return axios
    .post('users/register', {
      name: newUser.name,
      email: newUser.email,
      password: newUser.password
    })
    .then(response => {
      if(response.status === 400 || response.status === 404){
        console.log("response",response.status)
        console.log("data",response.data)
        alert(response.data.error)
   
      console.log(response)
      // console.log('Registered')
      }else{
        console.log("response",response.status)
        console.log("data",response.data)
        alert(response.data.message)
      }
    })
}

export const login = user => {
  return axios
    .post('users/login', {
      email: user.email,
      password: user.password
    })
    .then(response => {
      console.log(response.status)
      console.log(response.data.message)
      // console.log("response",response.data.token)
      // if(response)
      if(response.status === 400 || response.status == 404){
        alert(response.data.error)
      }else{
      localStorage.setItem('usertoken', response.data.token)
      // console.log(response.data.token)
      return response.data
      }
    })
    .catch(err => {
      console.log(err)
    })
}