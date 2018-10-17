import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

let user = ()=> ( <a href='/users/auth/logout'>{user.name}</a> )
let login = ()=> ( <a href='/users/auth/salesloft'>Login</a> )

let NavBar = ({user}) => (
  <nav>
    <h1>SalesLoft Dev Interview</h1>
    <NavLink exact to='/' activeClassName='active'>Home</NavLink>
    <NavLink exact to='/people' activeClassName='active'>People</NavLink>
    {user ? user() : login() }
  </nav>
);

export default NavBar
