import React, {useEffect, useState} from 'react'
import AliceCarousel from 'react-alice-carousel'
import './slider.css'
import axios from 'axios'
import Skeleton from '@material-ui/lab/Skeleton'

function UserSlider() { 
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(false)

  const getUsers = () => {
    setLoading(true)
    return (
      axios.get(`https://randomuser.me/api/?results=25&seed=foobar`)
    )
  }

  useEffect(()=> {
    getUsers().then(data=> {
      setUsers(data.data.results)
      setLoading(false)
    })
  }, [])

  const slideItems = users.map((user) => (
    <div className="slide w-20 px-2 text-center">
      <div className="img-avatar inline-block rounded-full overflow-hidden p-0.5 border-2 border-pink-700">
        <img
          className="rounded-full block"
          src={user.picture.medium}
          width="60"
          height="60"
          alt={`${user.name.first} ${user.name.last}`}
        />
      </div>
      <div className="name block overflow-hidden whitespace-nowrap overflow-ellipsis text-xs">
        {`${user.name.first} ${user.name.last}`}
      </div>
    </div>
  ))
  
  return (
    <div className="users-slider slider variable-width py-3 border bg-white mb-6 relative rounded-sm flex flex-nowrap">
      {loading ? (
        Array.from(Array(10).keys()).map(key => (
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
