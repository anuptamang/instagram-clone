import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined'
import BookmarkBorderOutlinedIcon from '@material-ui/icons/BookmarkBorderOutlined'
import CachedIcon from '@material-ui/icons/Cached'
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined'
import { DB } from 'context/UserContext'
import React from 'react'
import { NavLink } from 'react-router-dom'

function UserDropdown({ handleLogout, currentUser }) {
  const db = DB()

  const logout = () => {
    localStorage.removeItem('user')
    handleLogout('')
    db.setUser('')
  }

  return (
    <>
      <ul className="list-none text-sm capitalize">
        <li>
          <NavLink
            className="block py-2 px-4 cursor-pointer hover:bg-gray-100 relative z-40"
            to={`/${currentUser && currentUser.username}`}
          >
            <span className="mr-2">
              <AccountCircleOutlinedIcon />
            </span>
            Profile
          </NavLink>
        </li>
        <li>
          <NavLink
            className="block py-2 px-4 cursor-pointer hover:bg-gray-100 relative z-40"
            to={`/${currentUser && currentUser.username}/saved`}
          >
            <span className="mr-2">
              <BookmarkBorderOutlinedIcon />
            </span>
            Saved
          </NavLink>
        </li>
        <li>
          <NavLink
            className="block py-2 px-4 cursor-pointer hover:bg-gray-100 relative z-40"
            to="/accounts/edit"
          >
            <span className="mr-2">
              <SettingsOutlinedIcon />
            </span>
            Settings
          </NavLink>
        </li>
        <li className="py-2 px-4 cursor-pointer hover:bg-gray-100">
          <span className="mr-2">
            <CachedIcon />
          </span>
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
