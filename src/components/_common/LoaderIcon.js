import { CircularProgress } from '@material-ui/core'
import React from 'react'

const LoaderIcon = () => {
  return (
    <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 mt-1">
      <CircularProgress width={20} color="white" />
    </div>
  )
}

export default LoaderIcon
