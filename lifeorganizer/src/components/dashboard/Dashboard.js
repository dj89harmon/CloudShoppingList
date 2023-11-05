import React, { Component } from 'react'
import Notifications from './Notifications'
import TodoList from '../todolist/TodoList'

class Dashboard extends Component {
  render(){

    return(
      <div className="dashboard container">
        <div className="row">
          <div className="col s12 m6">
            <TodoList></TodoList>
          </div>
          <div className="col s12 m5 offset-m1">
            <Notifications></Notifications>
          </div>
        </div>
      </div>
    )
  }
}

export default Dashboard