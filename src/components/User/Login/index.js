import brandInstagram from 'assets/images/brand-instagram.png'
import PageLoader from 'components/_common/PageLoader'
import React, { useState } from 'react'
import SignIn from './SignIn'
import Signup from './Signup'

function Login({ setLoginUser, setIsLoading, isLoading }) {
  const [signupEmail, setSignupEmail] = useState('')
  const [isEmailSent, setIsEmailSent] = useState(false)

  return (
    <>
      {isLoading ? (
        <PageLoader />
      ) : (
        <div className="container min-h-screen flex items-center justify-center">
          <form className="md:w-full lg:w-3/4 text-center">
            <div className="mb-12 inline-block">
              <img src={brandInstagram} alt="" />
              <span class="text-white block text-right">CLONE</span>
            </div>
            {isEmailSent ? (
              <div className="text-white text-center text-xs">
                Please verify your email address. The email verification message
                is send to this email address: {signupEmail}
              </div>
            ) : (
              <div className="row md:grid md:grid-cols-2 md:space-x-5 text-left">
                <SignIn
                  setIsLoading={setIsLoading}
                  setLoginUser={setLoginUser}
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
