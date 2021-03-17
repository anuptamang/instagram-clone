import Header from 'components/Header'
import Login from 'components/User/Login'
import React, { useState } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Main from 'router'
import './App.scss'

function App() { 
  const [loginUser, setLoginUser] = useState(JSON.parse(localStorage.getItem('user')))    
  const [isLoading, setIsLoading] = useState(false)


  // useEffect(() => {
  //   db.collection('users').onSnapshot((snapshot) => {
  //     setLoginUser(snapshot.docs.map((doc) => doc.data()))
  //   })
  // }, [])
  
  return (
    <Router>
      <div
        className={`App overflow-hidden relative min-h-screen bg-gradient-instagram
         ${loginUser && 'bg-gray-100'}`}
      >
        {!loginUser ? (
          <>
            <Login
              setLoginUser={setLoginUser}
              setIsLoading={setIsLoading}
              isLoading={isLoading}
            />
          </>
        ) : (
          <>
            <Header handleLogout={setLoginUser} currentUser={loginUser} />
            <Main />
          </>
        )}
      </div>
    </Router>
  )
}

export default App;
