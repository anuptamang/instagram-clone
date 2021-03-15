import axios from 'axios'
import React, { createContext, useContext, useEffect, useState } from 'react'

// Initialize UserContext 
export const UserContext = createContext()

export const UserProvider = ({children}) => {
  // Initialize needed states
  const [user, setUser] = useState(
    localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : ''
  )
  const [users, setUsers] = useState([])
  const [posts, setPosts] = useState([])
  const [comments, setComments] = useState([])
  const [loading, setLoading] = useState(false)

  const getUsers = () => {
    setLoading(true)
    return axios.get(`db.json`)
  }

  useEffect(() => {
    getUsers().then((res) => {
      setUsers(res.data.users)
      setPosts(res.data.posts)
      setComments(res.data.comments)
    })
    const timer = setTimeout(() => {
      setLoading(false)
    }, 500);
    return () => clearTimeout(timer)
  }, [])

  const userProvider = {
    users,
    loading,
    posts,
    comments,
    setUser,
    user,
    setPosts,
    setComments,
    setUsers
  }

  return (
    <UserContext.Provider
      value={userProvider}
    >
      {children}
    </UserContext.Provider>
  )
}

export const DB = () => useContext(UserContext)