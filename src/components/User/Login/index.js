import React, { useState } from 'react'
import brandInstagram from 'assets/images/brand-instagram.png'

function Login({setUser}) {
  const [input, setInput] = useState('')

  const login = () => {
    localStorage.setItem('user', input)
    setUser(input)
  }

  return (
    <div className="container min-h-screen flex items-center justify-center">
      <form>
        <div className="mb-12">
          <img src={brandInstagram} alt="" />
        </div>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type="text"
          placeholder="Set your name here"
        />
        <button
          disabled={!input}
          onClick={login}
          className="bg-pink-500 text-white px-8 py-3 rounded-lg border-0 focus:border-opacity-0 focus:ring-0"
        >
          Log in
        </button>
      </form>
    </div>
  )
}

export default Login