import db, { auth } from 'fb/firebase'
import React from 'react'

const UploadPP = () => {
  const logout = () => {
    // localStorage.removeItem('user')
    // db.setUser(null)
    auth
      .signOut()
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      })
  }
  return (
    <div className="container pt-44 px-4">
      <div onClick={logout}>logout</div>
      Upload pp...
    </div>
  )
}

export default UploadPP
