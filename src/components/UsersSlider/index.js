import React, {useEffect, useState} from 'react'
import AliceCarousel from 'react-alice-carousel'
import 'assets/styles/slider.css'
import axios from 'axios'
import Skeleton from '@material-ui/lab/Skeleton'
import { NavLink } from 'react-router-dom'

function UserSlider() { 
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(false)

  const getUsers = () => {
    setLoading(true)
    return (
      axios.get(`db.json`)
    )
  }

  useEffect(()=> {
    getUsers().then(res=> {
      setUsers(res.data.users)
      console.log(res.data.users)
      setLoading(false)
    })
  }, [])

  const slideItems = users && users.map((user) => (
    <div className="slide w-20 px-2 text-center">
      <NavLink to="/stories">
        <div className="img-avatar inline-block rounded-full overflow-hidden p-0.5 border-2 border-pink-700">
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
    
      <>
        {loading ? (
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
      </>
  )
}

export default UserSlider
