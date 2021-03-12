import { ProfilePopup } from 'components/User/Profile/ProfilePopup'
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { hoverDropdown } from 'utils/hoverDropdown'

const UserNameDropdown = ({ user }) => {
  const [isActive, setActive] = useState(false)

  return (
    <>
      <div
        className="relative inline"
        onMouseEnter={() => hoverDropdown().handlePopupOpen(setActive, true)}
        onMouseLeave={() => hoverDropdown().handlePopupClose(setActive, false)}
      >
        <NavLink
          className="hover:underline font-bold"
          to={`/${user.username}`}
        >
          {user.username}
        </NavLink>
        {isActive && <ProfilePopup user={user} />}
      </div>
      &nbsp;
    </>
  )
}

export default UserNameDropdown
