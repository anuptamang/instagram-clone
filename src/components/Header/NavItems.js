import React from 'react'
import { useHistory, NavLink } from 'react-router-dom'
import ExploreOutlinedIcon from '@material-ui/icons/ExploreOutlined'
import SendOutlinedIcon from '@material-ui/icons/SendOutlined'
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined'
import HomeIcon from '@material-ui/icons/Home'
import SendIcon from '@material-ui/icons/Send'
import ExploreIcon from '@material-ui/icons/Explore'

function NavItems({ setAddActive }) {
  const currentRoute = useHistory().location.pathname.split('/')[1]

  return (
    <>
      <li>
        <NavLink to="/" className={setAddActive('')}>
          {currentRoute === '' ? <HomeIcon /> : <HomeOutlinedIcon />}
        </NavLink>
      </li>
      <li>
        <NavLink to="messages" className={setAddActive('messages')}>
          {currentRoute === 'messages' ? <SendIcon /> : <SendOutlinedIcon />}
        </NavLink>
      </li>
      <li>
        <NavLink to="explore" className={setAddActive('explore')}>
          {currentRoute === 'explore' ? <ExploreIcon /> : <ExploreOutlinedIcon />}
        </NavLink>
      </li>
    </>
  )
}

export default NavItems
