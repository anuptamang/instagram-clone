import React from 'react'
import ErrorIcon from '@material-ui/icons/Error'

const ErrorMessage = ({errorMessage}) => {
  return (
    <div className="error py-3 px-5 rounded-lg bg-red-400 text-white text-xs text-center flex items-center justify-center mb-10">
      <div className="inline mr-1">
        <ErrorIcon />
      </div>
      {errorMessage}
    </div>
  )
}

export default ErrorMessage
