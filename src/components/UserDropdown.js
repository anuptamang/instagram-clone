import React, { useRef } from 'react'
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined'
import BookmarkBorderOutlinedIcon from '@material-ui/icons/BookmarkBorderOutlined'
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined'
import CachedIcon from '@material-ui/icons/Cached'

function UserDropdown(props) {
  return (
    <div className={`user-dropdown-holder w-64 absolute z-30 -right-3 top-full mt-4 ${!props.isActive && 'hidden' } `}>
      <div className="arrow w-6 h-6 sbg-white shadow transform -rotate-45 absolute -top-1 right-3 z-1"></div>
      <div className="arrow w-6 h-6 bg-white transform -rotate-45 absolute top-0 right-3 z-2"></div>
      <div className="user-dropdown list-none bg-white shadow rounded-md relative">
        <div className="ul list-none px-4 text-sm">
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
        </div>
        <div className="logout text-sm px-4 py-2 border-t">
          log Out
        </div>
      </div>
    </div>
  )
}

export default UserDropdown
