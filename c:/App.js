import Header from 'components/Header'
import Login from 'components/User/Login'
import React, { useState } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Main from 'router'
import './App.scss'

function App() { 
  const [user, setUser] = useState(localStorage.getItem('user'))
  
  return (
    <Router>
      <div
        className={`App overflow-hidden relative pt-14 min-h-screen ${
          !user ? 'bg-gradient-instagram' : 'bg-gray-100'
        }`}
      >
        {!user ? (
          <Login setUser={setUser} />
        ) : (
          <>
            <Header handleLogout={setUser} />
            <Main />
          </>
        )}
      </div>
    </Router>
  )
}

export default App;
