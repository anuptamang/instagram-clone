import React from 'react'
import Article from '../components/Article'
import Sidebar from './Sidebar'

function Main() {
  return (
    <div className="container mx-auto px-5 py-8 flex-1 overflow-y-auto overflow-hidden">
      <Sidebar />
      <Article />
    </div>
  )
}

export default Main
