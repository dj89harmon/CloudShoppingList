import React, { Component } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Dashboard from './components/dashboard/Dashboard';
import SignIn from './components/auth/SignIn';
import Register from './components/auth/Register';
import Auth from './components/auth/Auth'

class App extends Component{
  render(){
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path='/' component={Dashboard} />
            <Route path='/auth' component={Auth} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
