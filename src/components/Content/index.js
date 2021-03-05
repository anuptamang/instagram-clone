import React from 'react'
import Article from 'components/Article'
import UserSlider from 'components/UsersSlider'

function Content() {
  return (
    <div className="content-holder overflow-hidden">
      <UserSlider />
      <Article />
      <Article />
      <Article />
    </div>
  )
}

export default Content
