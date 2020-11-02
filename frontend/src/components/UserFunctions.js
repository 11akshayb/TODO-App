import axios from 'axios'

export const register = newUser => {
    return axios
      .post('users/register', {
        name: newUser.name,
        email: newUser.email,
        password: newUser.password
      })
      .then(response => {
        if(response.status !== 200){
          console.log("response",response.status)
          console.log("data",response.data)
          alert(response.data.error)
          return(response)


          
        }else{
          console.log('Registered',response)
          console.log("response",response.status)
          console.log("data",response.data)
          alert(response.data.message)
          return(response)
          
        }
      })
      .catch(err => {
        console.log(err)
        return(err)
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
        if(response.status === 400 || response.status === 404){
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