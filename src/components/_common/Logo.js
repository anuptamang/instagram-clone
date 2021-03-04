import React from 'react'
import { NavLink } from 'react-router-dom'
import imgLogo from 'assets/images/logo.png'

function Logo() {
  return (
    <div className="logo mt-1">
      <NavLink to="/">
        <img src={imgLogo} width={103} alt="" />
      </NavLink>
    </div>
  )
}

export default Logo
