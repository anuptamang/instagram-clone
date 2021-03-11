import { ProfilePopup } from 'components/User/Profile/ProfilePopup'
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { hoverDropdown } from 'utils/hoverDropdown'

const AuthorAvatar = ({article}) => {
  const [isActive, setActive] = useState(false)

  return (
    <div
      onMouseEnter={() => hoverDropdown().handlePopupOpen(setActive, true)}
      onMouseLeave={() => hoverDropdown().handlePopupClose(setActive, false)}
      className="relative"
    >
      <NavLink
        to={`/${article.author[0].username}`}
        className="img-avatar rounded-full relative"
      >
        <img
          className="rounded-full block cursor-pointer"
          src={article.author[0].avatar}
          width="32"
          height="32"
          alt=""
        />
      </NavLink>
      {isActive && <ProfilePopup user={article.author[0]} />}
    </div>
  )
}

export default AuthorAvatar
