import React from 'react'
import Content from 'components/Content'
// import Sidebar from 'components/Sidebar'

function Home() {
  return (
    <div className="container mx-auto px-5 lg:flex">
      <div className="content mx-auto">
        <Content />
      </div>
      {/* <div className="sidebar hidden lg:block lg:pl-4">
        <Sidebar />
      </div> */}
    </div>
  )
}

export default Home
