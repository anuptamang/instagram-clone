import Header from 'components/Header'
import Login from 'components/User/Login'
import { UserContext } from 'context/UserContext'
import React, { useContext, useState } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Main from 'router'
import './App.scss'
import {DB} from 'context/UserContext'
import LoggedInUser from 'components/User/LoggedInUser'

function App() { 
  const db = DB()
  const currentUser = db.users.find(({ username }) => (username = db.user))
  return (
    <Router>
      <div
        className={`App overflow-hidden relative pt-14 min-h-screen ${
          !db.user ? 'bg-gradient-instagram' : 'bg-gray-100'
        }`}
      >
        {!db.user ? (
          <Login setUser={db.setUser} />
        ) : (
          <>
            <Header handleLogout={db.setUser} currentUser={currentUser} />
            <Main />
          </>
        )}
      </div>
    </Router>
  )
}

export default App;
