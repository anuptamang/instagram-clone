import Header from 'components/Header'
import Login from 'components/User/Login'
import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Main from 'router'
import './App.scss'
import axios from 'axios'

function App() { 
  const [user, setUser] = useState(localStorage.getItem('user'))
  const [users, setUsers] = useState([])
  
  const getData = (url)=> {
    return axios.get(url)
  }
  
  useEffect(() => {
    getData('db.json').then(res => setUsers(res.data))
  }, [])
  
  console.log(users)
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
