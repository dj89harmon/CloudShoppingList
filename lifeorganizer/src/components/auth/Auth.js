import React, { Component } from 'react'
import SignInImport from './SignIn'
import RegisterImport from './Register'

class Auth extends Component {
  state = {
    email: '',
    password: '',
    loginOption: 'btn loginOption active',
    registerOption: 'btn registerOption',
    loginToggle: '',
    registerToggle: 'hidden',
    loginButton: 'btn skyblue',
    registerButton: 'btn skyblue hidden',
  }

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault();
    // console.log(this.state);
    console.log(e.target.id);
  }

  loginActive = () => {
    this.setState({
      registerOption: 'btn registerOption',
      registerToggle: 'hidden',
      registerButton: 'btn skyblue',
      loginOption: 'btn loginOption active',
      loginToggle: '',
      loginButton: 'btn skyblue hidden'
    })

    console.log('login active');
  }

  registerActive = () => {
    this.setState({
      registerOption: 'btn registerOption active',
      registerToggle: '',
      registerButton: 'btn skyblue',
      loginOption: 'btn loginOption',
      loginToggle: 'hidden',
      loginButton: 'btn skyblue hidden'    
    })  
  }

  render() {
    return (
      <div className="container section">
        <div className="row">
          <div className="col s12">
            <div className="container center authOptions">
              <button onClick={this.loginActive} className={this.state.loginOption}>Sign In</button>
              <button onClick={this.registerActive} className={this.state.registerOption}>Register</button>
            </div>
          </div>
        </div>

        <div className={this.state.loginToggle}>
          <SignInImport></SignInImport>
        </div>
        
        <div className={this.state.registerToggle}>
          <RegisterImport></RegisterImport>
        </div>

        <div class="row">
          <div class="col s12 center">
            <button onClick={this.handleSubmit} id="logInButton" class={this.state.loginButton}>Sign In</button>
            <button onClick={this.handleSubmit} id="registerButton" class={this.state.registerButton}>Register</button>
          </div>
        </div>

      </div>
    )
  }
}

export default Auth
