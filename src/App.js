import React, {useState} from 'react'

import Header from 'components/Header'
import Main from 'router'
import {BrowserRouter as Router} from 'react-router-dom'
import Login from 'components/User/Login'
import './App.css'

function App() { 
  const [user, setUser] = useState(localStorage.getItem('user'))

  return (
    <Router>
      <div
        className={`App overflow-hidden relative flex flex-col h-screen ${
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
