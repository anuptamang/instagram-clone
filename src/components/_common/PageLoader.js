import React from 'react'
import InstagramIcon from '@material-ui/icons/Instagram'

const PageLoader = () => {
  return (
    <div className="App overflow-hidden relative min-h-screen bg-gray-100 z-50">
      <div className="icon absolute top-1/2 left-1/2 transform -translate-x-1/2"><InstagramIcon className="fillCurrent text-gray-500" /></div>
    </div>
  )
}

export default PageLoader
