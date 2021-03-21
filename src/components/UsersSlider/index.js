import Skeleton from '@material-ui/lab/Skeleton'
import 'assets/styles/slider.css'
import { DB } from 'context/UserContext'
import React from 'react'
import AliceCarousel from 'react-alice-carousel'
import { NavLink } from 'react-router-dom'

function UserSlider() { 
  const db = DB()

  const slideItems = db.users && db.users.map((user) => (
    <div className="slide w-20 px-2 text-center">
      <NavLink to={`/stories/${user.username}`}>
        <div className="img-avatar inline-block rounded-full overflow-hidden">
          <img
            className="rounded-full block"
            src={user.avatar}
            width="60"
            height="60"
            alt={`${user.name}`}
          />
        </div>
        <div className="name block overflow-hidden whitespace-nowrap overflow-ellipsis text-xs">
          {`${user.name}`}
        </div>
      </NavLink>
    </div>
  ))
  
  return (
    <div className="users-slider slider variable-width py-3 border overflow-hidden bg-white mb-6 relative rounded-sm flex flex-nowrap">
        {db.loading ? (
          Array.from(Array(10).keys()).map((key) => (
            <div key={key} className="slide w-20 px-2 text-center">
              <Skeleton variant="circle" width={60} height={60} />
              <Skeleton variant="text" />
            </div>
          ))
        ) : (
          <AliceCarousel
            mouseTracking
            disableDotsControls
            autoWidth
            items={slideItems}
          />
        )}
    </div>
  )
}

export default UserSlider
