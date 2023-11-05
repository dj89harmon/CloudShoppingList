import React from 'react'

const todoList = () => {
  return(
    <div className="todoList section">

<div className="todos container">
    <div className="row mb-0">
      <div className="col s12">
        <form id="new-item">
          <input type="text" name="newItem" placeholder="Add item here" />
        </form>
      </div>
    </div>

    {/* <!-- Todo List --> */}
    <div id="todoRow" className="row">
      <div className="col s12">
        <h6>To Do List:</h6>
        <ul className="collection" id="todoList" name="todoList">
        </ul>
      </div>
    </div>

    {/* <!-- Completed Todo List --> */}
    <div id="completedRow" className="row">
      <div className="col s12">
        <h6>Completed:</h6>
        <ul className="collection" id="completedTodos" name="completedTodos">
        </ul>
      </div>
    </div>

    <div className="container">
      <div className="notes row container">
        <form className="col s12">
          <label htmlFor="textarea1">Notes: (Warning: notes don't have a save feature yet!)</label>
          <textarea name="notes" id="textarea1" cols="120" className="materialize-textarea"></textarea>
        </form>
      </div>
    </div>
  </div>

    </div>
  )
}

export default todoList