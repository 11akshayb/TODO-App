import axios from 'axios'

export const register = newUser => {
  return axios
    .post('users/register', {
      name: newUser.name,
      email: newUser.email,
      password: newUser.password
    })
    .then(response => {
      if(response.data.status === 400){
        alert(response.data.error)
      }
      console.log(response)
      console.log('Registered')
    })
}

export const login = user => {
  return axios
    .post('users/login', {
      email: user.email,
      password: user.password
    })
    .then(response => {
      // console.log("response",response.data.token)
      if(response)
      if(response.data.status === 400){
        alert(response.data.error)
      }else{
      localStorage.setItem('usertoken', response.data.token)
      return response.data
      }
    })
    .catch(err => {
      console.log(err)
    })
}