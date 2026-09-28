import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <div>

        <nav style={{display: 'flex', gap: '20px'}}>

            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contact-page">Contact</NavLink>

            <NavLink to="/products">Products</NavLink>

            <NavLink to="/login">Login</NavLink>

        </nav>

    </div>
  )
}

export default Nav