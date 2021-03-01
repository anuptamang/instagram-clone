import React from 'react'
import Content from '../components/Content'
import Sidebar from '../components/Sidebar'

function Main() {
  return (
    <div className="container mx-auto px-5 py-8 flex-1 overflow-y-auto overflow-hidden">
      <Sidebar />
      <Content />
    </div>
  )
}

export default Main
