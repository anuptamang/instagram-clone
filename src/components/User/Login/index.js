import brandInstagram from 'assets/images/brand-instagram.png'
import PageLoader from 'components/_common/PageLoader'
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import SignIn from './SignIn'
import Signup from './Signup'

function Login({ setLoginUser, setIsLoading, isLoading }) {
  const [signupEmail, setSignupEmail] = useState('')
  const [isEmailSent, setIsEmailSent] = useState(false)

  return (
    <>
      {isLoading ? (
        <>
        {
          console.log('loading active...')
        }

          <PageLoader />
        </>
      ) : (
        <div className="container min-h-screen flex items-center justify-center px-4">
          <form className="md:w-full lg:w-3/4 text-center">
            <div className="mb-12 inline-block">
              <img src={brandInstagram} alt="" />
              <span class="text-white block text-right">HYBRID CLONE</span>
            </div>
            {isEmailSent ? (
              <div className="error py-3 px-5 rounded-lg bg-green-500 text-white text-md text-center">
                Please verify your email address. The email verification message
                is send to your email at:&nbsp;
                <span className="italic">
                  <a
                    className="underline hover:no-underline"
                    target="_blank"
                    rel="noreferrer"
                    href={`https://mail.google.com/mail/u/?authuser=${signupEmail}`}
                  >
                    {signupEmail}
                  </a>
                </span>
                <div className="pt-3">
                  <button
                    onClick={() => setIsEmailSent(false)}
                    className="rounded-md bg-white px-7 py-2 text-pink-700 transition-opacity hover:opacity-90 focus:ring-0"
                  >
                    Get back to Login
                  </button>
                </div>
              </div>
            ) : (
              <div className="row md:grid md:grid-cols-2 md:space-x-5 text-left">
                <SignIn
                  setIsLoading={setIsLoading}
                  setLoginUser={setLoginUser}
                  setIsEmailSent={setIsEmailSent}
                  setSignupEmail={setSignupEmail}
                />
                <Signup
                  setSignupEmail={setSignupEmail}
                  signupEmail={signupEmail}
                  setIsEmailSent={setIsEmailSent}
                />
              </div>
            )}
          </form>
        </div>
      )}
    </>
  )
}

export default Login
