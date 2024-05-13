import React from 'react'
import {NavLink} from "react-router-dom"
import routes from '../constants/routes'


const Navbar = () => {
  return (
    <div>
      <NavLink to ={routes.login}>Login</NavLink>
      <NavLink to ={routes.home}>Home</NavLink>
      <NavLink to ={routes.products}>Products</NavLink>
    </div>
  )
}

export default Navbar
