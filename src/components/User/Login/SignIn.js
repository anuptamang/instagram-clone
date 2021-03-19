import db, { auth, provider } from 'fb/firebase'
import React, { useEffect, useState } from 'react'
import firebase from 'firebase'
import LoaderIcon from 'components/_common/LoaderIcon'
import ErrorMessage from 'components/_common/ErrorMessage'
import { v4 as uuidv4 } from 'uuid'
import { DB } from 'context/UserContext'

const SignIn = ({
  setIsLoading,
  setLoginUser,
  setIsEmailSent,
  setSignupEmail,
}) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [loadingReset, setLoadingReset] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const [errorVerification, setErrorVerification] = useState(false)
  const [resetPassword, setResetPassword] = useState(false)
  const [emailVerifyLoading, setEmailVerifyLoading] = useState(false)
  const [emailVerification, setEmailVerification] = useState(false)
  const [inputEmailVerification, setInputEmailVerification] = useState('')
  const [checker, setChecker] = useState('')

  const dbContext = DB()

  useEffect(() => {
    db.collection('users').onSnapshot((snapshot) => {
      setChecker(snapshot.docs.map((doc) => doc.data().email))
    })
  }, [])

  const loginWithGoogle = (e) => {
    e.preventDefault()

    auth
      .signInWithPopup(provider)
      .then((result) => {
        setIsLoading(true)
        db.collection('users').onSnapshot((snapshot) => {
          let users = snapshot.docs.map((doc) => doc.data())
          let payload = {
            id: result.user.uid,
            loginType: 'gmail',
            name: result.user.displayName,
            avatar: result.user.photoURL,
            email: result.user.email,
            emailVerified: result.user.emailVerified,
            createdAt: firebase.firestore.Timestamp.now(),
            username: result.user.displayName.toLowerCase().replaceAll(' ', ''),
          }

          if (!users.find(({ email }) => email === result.user.email)) {
            localStorage.setItem('user', JSON.stringify(payload))
            setLoginUser(payload)
            db.collection('users').add(payload)
          } else if (users.find(({ email }) => email === result.user.email)) {
            localStorage.setItem('user', JSON.stringify(payload))
            setLoginUser(payload)
          }
          setIsLoading(false)
        })
      })
      .catch((error) => {
        alert(error.message)
      })
  }  

  const handleLogin = (e) => {
    e.preventDefault()
    setLoading(true)

    auth
      .signInWithEmailAndPassword(email, password)
      .then((result) => {
        const user = result.user
        let payload = {
          name: user.displayName,
          email: user.email,
          id: user.uid,
          avatar: user.photoURL,
          phone: user.phoneNumber,
          createdAt: user.metadata.creationTime,
          lastSignInTime: user.metadata.lastSignInTime,
          emailVerified: user.emailVerified,
          homepage: null,
          isVerified: false,
        }

        if (!result.user.emailVerified) {
          setErrorVerification(true)
          setEmailVerification(true)
          setLoading(false)
        }
        if (checker.length < 1) {
          setLoginUser(payload)
          
          setLoginUser(payload)
          localStorage.setItem('user', JSON.stringify(payload))
          setLoading(false)
          setIsLoading(false)
          db.collection('users').add(payload)
        } else {
          console.log('already user so login')
          localStorage.setItem('user', JSON.stringify(payload))
          setLoginUser(payload)
          setLoading(false)
          setIsLoading(false)
        }
        setLoading(false)
      })
      .catch((error) => {
        setErrorMessage(error.message)
        setLoading(false)
      })
  }  

  const handleForgotPassword = (e) => {
    e.preventDefault()
    setLoadingReset(true)

    firebase
      .auth()
      .sendPasswordResetEmail(email)
      .then(() => {
        setResetPassword(true)
        setLoadingReset(false)
      })
      .catch((error) => {
        alert(error)
      })
  }

  const handleInputChange = (e, setInput) => {
    setInput(e.target.value)
    setErrorMessage('')
  }

  const handleEmailVerification = () => {
    auth.currentUser.reload()

    if (!auth.currentUser.emailVerified) {
      auth.currentUser.sendEmailVerification()
      //resend verification email
    } else {
      //login
    }

    setIsEmailSent(true)
    setSignupEmail(auth.currentUser.email)
  }

  return (
    <>
      <div className="sigin relative">
        <h3 className="text-white text-2xl mb-4">Sign In</h3>
        <div className="mb-4">
          <input
            value={email}
            onChange={(e) => handleInputChange(e, setEmail)}
            className="block w-full rounded-md border-0 focus:ring-0"
            type="email"
            placeholder="Email"
          />
        </div>
        <div className="mb-4">
          <input
            value={password}
            onChange={(e) => handleInputChange(e, setPassword)}
            className="block w-full rounded-md border-0 focus:ring-0"
            type="password"
            placeholder="Password"
          />
        </div>
        {errorMessage && (
          <>
            <div className="mb-5">
              <div className="text-white text-xs text-center mb-3">
                Forgot your password?
              </div>
              <button
                onClick={handleForgotPassword}
                className={`focus:outline-none block w-full bg-green-500 text-white px-8 py-3 rounded-lg border-0 focus:border-opacity-0 focus:ring-0 transition-opacity hover:opacity-90 relative ${
                  loadingReset && 'h-12'
                }`}
              >
                {loadingReset ? <LoaderIcon /> : 'Reset Password'}
              </button>
            </div>
            <div className="absolute -bottom-28 left-0 right-0">
              <ErrorMessage errorMessage={errorMessage} />
            </div>
          </>
        )}
        {errorVerification && (
          <div className="absolute -bottom-28 left-0 right-0">
            <ErrorMessage errorMessage="Please verify your email address!" />
          </div>
        )}
        {resetPassword && (
          <div className="absolute -bottom-28 left-0 right-0">
            <ErrorMessage errorMessage="Password reset email has been sent to your registerd email!" />
          </div>
        )}
        <div className="mb-4">
          <button
            disabled={!email || !password}
            onClick={handleLogin}
            className={`focus:outline-none block w-full bg-pink-500 text-white px-8 py-3 rounded-lg border-0 focus:border-opacity-0 focus:ring-0 transition-opacity hover:opacity-90 relative ${
              loading && 'h-12'
            }`}
          >
            {loading ? <LoaderIcon /> : 'Log in'}
          </button>
        </div>
        <div className="mb-4">
          <button
            onClick={loginWithGoogle}
            className="focus:outline-none w-full bg-yellow-500 text-white px-8 py-3 rounded-lg border-0 focus:border-opacity-0 focus:ring-0 flex items-center justify-center transition-opacity hover:opacity-90"
          >
            <div className="inline-block w-6 h-6 mr-2">
              <svg
                fill="#ffffff"
                viewBox="0 0 1792 1792"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M896 786h725q12 67 12 128 0 217-91 387.5t-259.5 266.5-386.5 96q-157 0-299-60.5t-245-163.5-163.5-245-60.5-299 60.5-299 163.5-245 245-163.5 299-60.5q300 0 515 201l-209 201q-123-119-306-119-129 0-238.5 65t-173.5 176.5-64 243.5 64 243.5 173.5 176.5 238.5 65q87 0 160-24t120-60 82-82 51.5-87 22.5-78h-436v-264z" />
              </svg>
            </div>
            Log in with Google
          </button>
        </div>
        {emailVerification && (
          <div className="mb-4">
            <div className="text-center text-xs text-white mb-2">
              Did't get the verification email? Send it again.
            </div>
            <button
              onClick={handleEmailVerification}
              className={`focus:outline-none block w-full bg-green-600 text-white px-8 py-3 rounded-lg border-0 focus:border-opacity-0 focus:ring-0 transition-opacity hover:opacity-90 relative ${
                emailVerifyLoading && 'h-12'
              }`}
            >
              {emailVerifyLoading ? (
                <LoaderIcon />
              ) : (
                'Resend Email Verification'
              )}
            </button>
          </div>
        )}
      </div>
    </>
  )
}

export default SignIn
