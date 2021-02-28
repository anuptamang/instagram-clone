import React from 'react'
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined'
import ExploreOutlinedIcon from '@material-ui/icons/ExploreOutlined'
import SendOutlinedIcon from '@material-ui/icons/SendOutlined'
import HomeIcon from '@material-ui/icons/Home'

function HeaderPanels() {
  return (
    <ul className="list-none grid grid-flow-col justify-end gap-4">
      <li><HomeIcon /></li>
      <li><SendOutlinedIcon /></li>
      <li><ExploreOutlinedIcon /></li>
      <li>
        <FavoriteBorderOutlinedIcon />
      </li>
      <li>
        <div className="user">
          <img className="rounded-full mt-1"
            src="https://instagram.fktm1-2.fna.fbcdn.net/v/t51.2885-19/s150x150/42431682_319829341904532_8512133033254453248_n.jpg?tp=1&_nc_ht=instagram.fktm1-2.fna.fbcdn.net&_nc_ohc=AqNgxLFbxugAX8Qrqp1&oh=c088fa3ff34cf652cf7403923c10b944&oe=60674412" width="22" height="22"
            alt=""
          />
        </div>
      </li>
    </ul>
  )
}

export default HeaderPanels
