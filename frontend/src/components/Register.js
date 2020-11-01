import React, { Component } from 'react'
import { register } from './UserFunctions'

class Register extends Component {
  constructor() {
    super()


    this.state = {
      name: '',
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

    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password
    }
    
    register(newUser)
    .then(res => {
      this.props.history.push(`/login`)
    })
    .catch(err => {
      console.log(err)
    })
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 mt-5 mx-auto">
            <form>
              <h1 className="h3 mb-3 font-weight-normal">Register</h1>
              <div className="form-group">
                <label htmlFor="name">First name</label>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  placeholder="Enter your first name"
                  required
                  value={this.state.name}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  placeholder="Enter email"
                  required
                  value={this.state.email}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  placeholder="Password"
                  required
                  value={this.state.password}
                  onChange={this.onChange}
                />
              </div>
              <button
                type="submit"
                onClick={this.handleFormSubmit}
                className="btn btn-lg btn-primary btn-block"
              >
                Register!
              </button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default Register


