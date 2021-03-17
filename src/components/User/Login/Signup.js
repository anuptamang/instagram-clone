import ErrorMessage from 'components/_common/ErrorMessage'
import LoaderIcon from 'components/_common/LoaderIcon'
import db, { auth } from 'fb/firebase'
import firebase from 'firebase'
import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

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
    setLoading(true)
    
    auth
    .createUserWithEmailAndPassword(signupEmail, signUpPassword)
    .then((userCredential) => {
        // Signed in
        const user = userCredential.user
        console.log(user)

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
        let payload = {
          id: user.uid,
          name: name,
          avatar: null,
          email: user.email,
          emailVerified: user.emailVerified,
          createdAt: firebase.firestore.Timestamp.now(),
          username: username,
        }
        // localStorage.setItem('user', JSON.stringify(payload))
        db.collection('users').add(payload)
      })
      .catch((error) => {
        setLoading(false)
        setErrorMessage(error.message)
      })
    
  }

  const handleInputChange = (e, setInput) => {
    setInput(e.target.value)
    setErrorMessage('')
  }  

  return (
    <>
      <div className="signup md:border-l md:border-gray-300 md:pl-5 relative">
        <div className="text-white text-2xl mb-4">Not a user ? Sign up</div>
        <div className="mb-4">
          <input
            value={signupEmail}
            onChange={(e) => handleInputChange(e, setSignupEmail)}
            className="block w-full rounded-md border-0 focus:ring-0"
            type="text"
            placeholder="Email"
          />
        </div>
        <div className="mb-4">
          <input
            value={name}
            onChange={(e) => handleInputChange(e, setName)}
            className="block w-full rounded-md border-0 focus:ring-0"
            type="text"
            placeholder="Full Name"
          />
        </div>
        <div className="mb-4">
          <input
            value={username}
            onChange={(e) => handleInputChange(e, setUsername)}
            className="block w-full rounded-md border-0 focus:ring-0"
            type="text"
            placeholder="Username"
          />
        </div>
        <div className="mb-4">
          <input
            value={signUpPassword}
            onChange={(e) => handleInputChange(e, setSignUpPassword)}
            className="block w-full rounded-md border-0 focus:ring-0"
            type="password"
            placeholder="Password"
          />
        </div>
        {errorMessage && (
          <div className="absolute -bottom-28 left-6 right-0">
            <ErrorMessage errorMessage={errorMessage} />
          </div>
        )}
        <button
          onClick={handleSignUp}
          disabled={!signupEmail || !name || !username || !signUpPassword}
          className={`focus:outline-none block w-full bg-pink-500 text-white px-8 py-3 rounded-lg border-0 focus:border-opacity-0 focus:ring-0 mb-6 transition-opacity hover:opacity-90 relative ${
            loading && 'h-12'
          }`}
        >
          {loading ? <LoaderIcon /> : 'Sign up'}
        </button>
      </div>
    </>
  )
}

export default Signup
