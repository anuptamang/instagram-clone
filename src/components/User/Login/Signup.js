import { auth } from 'fb/firebase'
import React, { useState } from 'react'
import firebase from 'firebase'
import { CircularProgress } from '@material-ui/core'
import ErrorIcon from '@material-ui/icons/Error'

const Signup = ({
  setSignupEmail,
  setIsEmailSent,
  signupEmail,
}) => {
  const [signUpPassword, setSignUpPassword] = useState('')
  const [name, setName] = useState('')
  const [username, setUsername] = useState('')
  const [loading, setLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  
  const handleSignUp = (e) => {
    e.preventDefault()
    console.log('loading...')
    setLoading(true)
    
    auth
    .createUserWithEmailAndPassword(signupEmail, signUpPassword)
    .then((userCredential) => {
        // Signed in
        const user = userCredential.user

        firebase
          .auth()
          .currentUser.sendEmailVerification()
          .then(() => {
            // Email verification sent!
            // ...
            if (!user.emailVerified) {
              setIsEmailSent(true)
              setLoading(false)
            }
          })
        // let payload = {
        //   name: user.displayName,
        //   avatar: user.photoURL,
        //   email: user.email,
        //   emailVerified: user.emailVerified,
        //   createdAt: firebase.firestore.Timestamp.now(),
        //   username: user.displayName.toLowerCase().replaceAll(' ', ''),
        // }
        // db.collection('users').add(payload)
      })
      .catch((error) => {
        setLoading(false)
        setErrorMessage(error.message)
      })
    
  }
  return (
    <>
      <div className="signup md:border-l md:border-gray-300 md:pl-5">
        <div className="text-white text-2xl mb-4">Not a User ? Sign up</div>
        <div className="mb-4">
          <input
            value={signupEmail}
            onChange={(e) => setSignupEmail(e.target.value)}
            className="block w-full rounded-md border-0 focus:ring-0"
            type="text"
            placeholder="Email"
          />
        </div>
        <div className="mb-4">
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="block w-full rounded-md border-0 focus:ring-0"
            type="text"
            placeholder="Full Name"
          />
        </div>
        <div className="mb-4">
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="block w-full rounded-md border-0 focus:ring-0"
            type="text"
            placeholder="Username"
          />
        </div>
        <div className="mb-4">
          <input
            value={signUpPassword}
            onChange={(e) => setSignUpPassword(e.target.value)}
            className="block w-full rounded-md border-0 focus:ring-0"
            type="password"
            placeholder="Password"
          />
        </div>
        <button
          onClick={handleSignUp}
          disabled={!signupEmail || !name || !username || !signUpPassword}
          className="focus:outline-none block w-full bg-pink-500 text-white px-8 py-3 rounded-lg border-0 focus:border-opacity-0 focus:ring-0 mb-6 transition-opacity hover:opacity-90"
        >
          Sign up
          {loading && (
            <div className="inline">
              <CircularProgress fontSize="small" color="white" />
            </div>
          )}
        </button>
        {errorMessage && (
          <div className="error py-3 px-5 rounded-lg bg-red-400 text-white text-xs text-center flex items-center justify-center">
            <div className="inline mr-1">
              <ErrorIcon />
            </div>{' '}
            {errorMessage}
          </div>
        )}
      </div>
    </>
  )
}

export default Signup
