import React from 'react'
import { NavLink} from 'react-router'

export default function NavBar() {
  return (
    <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/students">Students</NavLink>
        <NavLink to="/about">About</NavLink>
    </nav>
  )
}
