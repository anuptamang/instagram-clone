import React from 'react'
import Article from './Article'
import UserSlider from './UserSlider'

function Content() {
  return (
    <div className="content-holder overflow-hidden">
      <UserSlider />
      <Article />
    </div>
  )
}

export default Content
