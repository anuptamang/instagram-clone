import { ProfilePopup } from 'components/User/Profile/ProfilePopup'
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import {hoverDropdown} from 'utils/hoverDropdown'

const AuthorHeader = ({
  article
}) => {
  const [isActive, setActive] = useState(false)
  return (
    <div
      onMouseEnter={() => hoverDropdown().handlePopupOpen(setActive, true)}
      onMouseLeave={() => hoverDropdown().handlePopupClose(setActive, false)}
      className="relative"
    >
      <NavLink
        className="hover:underline relative lowercase"
        to={`/${article.author[0] && article.author[0].username}`}
      >
        {article.author[0] && article.author[0].username}
      </NavLink>
      {isActive && <ProfilePopup user={article.author[0]} />}
    </div>
  )
}

export default AuthorHeader
