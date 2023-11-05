import React from 'react';
import {NavLink} from 'react-router-dom';

const SignedInLinks = () => {
  return (
    <ul className="right">
      <li><NavLink to='/todolist'>To Do List</NavLink></li>
      <li><NavLink to='/kitchen'>Kitchen</NavLink></li>
      <li><NavLink to='/tools'>Tools</NavLink></li>
      <li><NavLink to='/'>Sign Out</NavLink></li>
      <li><NavLink to='/' className="btn btn-floating green darken-2">DH</NavLink></li>
    </ul>
  )
}

export default SignedInLinks