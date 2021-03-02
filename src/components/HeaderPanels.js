import React, {useState, useRef} from 'react'
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined'
import ExploreOutlinedIcon from '@material-ui/icons/ExploreOutlined'
import SendOutlinedIcon from '@material-ui/icons/SendOutlined'
import HomeIcon from '@material-ui/icons/Home'
import UserDropdown from './UserDropdown'
import hideOnClickOutside from '../utilities/ClickOutside'

function HeaderPanels() {
  const [isActive, setDropdown] = useState(false)
  const wrapperRef = useRef(null)
  hideOnClickOutside(wrapperRef, setDropdown)

  return (
    <ul className="header-list list-none grid grid-flow-col justify-end gap-4">
      <li>
        <HomeIcon />
      </li>
      <li>
        <SendOutlinedIcon className="transform -rotate-45 origin-top -ml-2" />
      </li>
      <li>
        <ExploreOutlinedIcon />
      </li>
      <li>
        <FavoriteBorderOutlinedIcon />
      </li>
      <li>
        <div
          ref={wrapperRef}
          className="user relative"
          onClick={() => setDropdown(true)}
        >
          <img
            className="rounded-full mt-1 cursor-pointer transition-opacity hover:opacity-70"
            src="https://randomuser.me/api/portraits/men/17.jpg"
            width="22"
            height="22"
            alt=""
          />
          <UserDropdown isActive={isActive} />
        </div>
      </li>
    </ul>
  )
}

export default HeaderPanels
