import React from 'react'
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined'
import BookmarkBorderOutlinedIcon from '@material-ui/icons/BookmarkBorderOutlined'
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined'
import CachedIcon from '@material-ui/icons/Cached'

function UserDropdown({handleLogout}) {
  const logout = () => {
    localStorage.removeItem('user')
    handleLogout('')
  }
  
  return (
    <>
      <ul className="ul list-none px-4 text-sm">
        <li className="flex items-center py-2">
          <AccountCircleOutlinedIcon className="mr-2" /> Profile
        </li>
        <li className="flex items-center py-2">
          <BookmarkBorderOutlinedIcon className="mr-2" /> Saved
        </li>
        <li className="flex items-center py-2">
          <SettingsOutlinedIcon className="mr-2" /> Settings
        </li>
        <li className="flex items-center py-2">
          <CachedIcon className="mr-2" /> Switch Accounts
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
