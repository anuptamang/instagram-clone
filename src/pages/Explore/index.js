import React from 'react'
import UsersSlider from 'components/UsersSlider';

function Explore() {
  return (
    <div className="container py-14 px-5">
      <UsersSlider />
      <video src="/videos/avengers.mp4" width="750" height="500" controls></video>
    </div>
  )
}

export default Explore
