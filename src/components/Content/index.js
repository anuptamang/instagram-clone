import React from 'react'
import Article from 'components/Article'
import UserSlider from 'components/UsersSlider'

function Content() {
  return (
    <div className="content-holder overflow-hidden">
      <div className="users-slider slider variable-width py-3 border bg-white mb-6 relative rounded-sm flex flex-nowrap">
        <UserSlider />
      </div>
      <Article />
      <Article />
      <Article />
    </div>
  )
}

export default Content
