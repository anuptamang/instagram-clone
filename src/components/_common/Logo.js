import React from 'react'
import { NavLink } from 'react-router-dom'

function Logo() {
  return (
    <NavLink to="/">
      <div className="logo">
        <img
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
          alt=""
        />
      </div>
    </NavLink>
  )
}

export default Logo
