import Header from 'components/Header'
import Login from 'components/User/Login'
import { DB } from 'context/UserContext'
import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Main from 'router'
import './App.scss'

function App() { 
  const dbContext = DB()
  return (
    <Router>
      <div
        className={`App overflow-hidden relative min-h-screen bg-gradient-instagram
         ${dbContext.user && 'bg-gray-100'}`}
      >
        {!dbContext.user ? (
          <>
            <Login
              setLoginUser={dbContext.setUser}
              isLoading={dbContext.loading}
              setIsLoading={dbContext.setLoading}
            />
          </>
        ) : (
              <>
                <Header
                  handleLogout={dbContext.setUser}
                  currentUser={dbContext.user}
                />
                <Main />
              </>
        )}
      </div>
    </Router>
  )
}

export default App;
