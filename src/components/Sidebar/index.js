import Article from 'components/Article'
import React from 'react'

function Sidebar() {
  return (
    <div className="sidebar hidden lg:block lg:float-right lg:w-80 lg:pl-4">
      <Article />
      <Article />
      <Article />
    </div>
  )
}

export default Sidebar
