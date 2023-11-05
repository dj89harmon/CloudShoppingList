import React, { Component } from 'react'

class SignIn extends Component {
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
      <div className="container ">

          <form id="loginUser">
            <h4 className="center">Sign In</h4>
            <input name="emailAddress" placeholder="Email Address" />

            <input type="password" name="password" placeholder="Password" />
          </form>
        </div>
    )
  }
}

export default SignIn
