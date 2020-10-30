import React, { Component } from 'react'
import { login } from './UserFunctions'
// import FormValidator from './FormValidator'

class Login extends Component {
  constructor() {
    super()

    this.state = {
      email: '',
      password: '',
      errors: {},
    }

    this.onChange = this.onChange.bind(this)
    this.submitted = false;
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleFormSubmit = event => {
    event.preventDefault();
    
    this.submitted = true;

  
      const user = {
        email: this.state.email,
        password: this.state.password
      }

      login(user).then(res => {
        if (res) {
          // console.log((res.body),"res")
          this.props.history.push(`/todo-list`)
        }
      })
    
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 mt-5 mx-auto">
            <form>
              <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
              <div className="form-group">
                <label htmlFor="email" id='emailInput'>Email address</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  placeholder="Enter email"
                  value={this.state.email}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="password" id='passwordInput'>Password</label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  placeholder="Password"
                  value={this.state.password}
                  onChange={this.onChange}
                />
              </div>
              <button
                type="submit"
                onClick={this.handleFormSubmit}
                className="btn btn-lg btn-primary btn-block"
              >
                Sign in
              </button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default Login
