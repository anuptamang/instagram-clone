import React from 'react'
import { NavLink } from 'react-router-dom'
import { userDropdownLinks } from 'constants/nav-routes'
import CachedIcon from '@material-ui/icons/Cached'

function UserDropdown({handleLogout}) {
  const logout = () => {
    localStorage.removeItem('user')
    handleLogout('')
  }  

  return (
    <>
      <ul className="list-none text-sm capitalize">
        <li>
          <ul className="list-none">
            {userDropdownLinks.map((item, index) => {
              return index < userDropdownLinks.length ? (
                <li key={item.key}>
                  <NavLink
                    className="block py-2 px-4 cursor-pointer hover:bg-gray-100 relative z-40"
                    to={item.path}
                  >
                    <span className="mr-2">{item.icon}</span>
                    {item.title}
                  </NavLink>
                </li>
              ) : (
                ''
              )
            })}
          </ul>
        </li>
        <li className="py-2 px-4 cursor-pointer hover:bg-gray-100">
          <span className="mr-2">
            <CachedIcon />
          </span>{' '}
          Switch Accounts
        </li>
      </ul>
      <div
        className="logout text-sm px-4 py-2 border-t cursor-pointer hover:bg-gray-100"
        onClick={logout}
      >
        Log Out
      </div>
    </>
  )
}

export default UserDropdown
