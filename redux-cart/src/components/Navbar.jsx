import React from 'react'
import {NavLink} from "react-router"

export default function Navbar() {
  return (
    <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/cart">Cart</NavLink>
        <NavLink to="/theme">Theme</NavLink>
    </nav>
  )
}
