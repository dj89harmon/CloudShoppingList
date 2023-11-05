import React, { Component } from 'react'

class Register extends Component {

  registerForm = document.querySelector('#registerUser');


  state = {
    email: '',
    password: ''
  }

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
  }

  render() {
    return (
      <div className="container">
        <form id="registerUser">
          <h4 className="center">Register New Account</h4>
          <input name="displayName" placeholder="Display Name" />

          <input name="emailAddress" placeholder="Email Address" />

          <input type="password" name="password" placeholder="Password" />

          <input type="password" name="confirmPassword" placeholder="Confirm Password" />
        </form>
      </div>
    )
  }
}

export default Register
