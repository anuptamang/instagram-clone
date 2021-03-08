import React, { useState } from 'react'
import Article from 'components/Article'
import UserSlider from 'components/UsersSlider'

function Content() {
   const [isVideo, setVideo] = useState(true)
   
  return (
    <>
      <div className="users-slider slider variable-width py-3 border bg-white mb-6 relative rounded-sm flex flex-nowrap">
        <UserSlider />
      </div>
      <Article />
      <Article isVideo={isVideo} />
      <Article />
    </>
  )
}

export default Content
