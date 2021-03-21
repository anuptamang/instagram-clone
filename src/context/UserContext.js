import axios from 'axios'
import db, { auth } from 'fb/firebase'
import React, { createContext, useContext, useEffect, useState } from 'react'

// Initialize UserContext 
export const UserContext = createContext()

export const UserProvider = ({children}) => {
  // Initialize needed states
  const [user, setUser] = useState(
    localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : ''
  )
  // const [user, setUser] = useState('')
  // console.log(user)
  const [users, setUsers] = useState([])
  const [posts, setPosts] = useState([])
  const [comments, setComments] = useState([])
  const [postLikes, setPostLikes] = useState([])
  const [loading, setLoading] = useState(false)
  const [uploadPP, setUploadPP] = useState(false)
  const [hasPP, setHasPP] = useState(null)

  useEffect(() => {
   db.collection('users')
     .onSnapshot((snapshot) => {
       setUsers(
         snapshot.docs.map((doc) => ({ userId: doc.id,...doc.data()}))
       )
     })
    db.collection('posts').onSnapshot((snapshot) => {
      setPosts(snapshot.docs.map((doc) => ({postId: doc.id, ...doc.data()})))
    })
    db.collection('comments').onSnapshot((snapshot) => {
      setComments(snapshot.docs.map((doc) => doc.data()))
    })
    db.collection('postLikes').onSnapshot((snapshot) => {
      setPostLikes(snapshot.docs.map((doc) => ({ likesId: doc.id, ...doc.data() })))
    })
  }, [])

  auth.onAuthStateChanged((authUser) => {
    if (authUser) {
      let currUser = users.find(({email}) => email === authUser.email)
      setHasPP(currUser && currUser.avatar)
      // console.log(currUser)
      if(currUser) {
        // localStorage.setItem('user', JSON.stringify(currUser))
        setUser(currUser)
      }
    } else {
      // user has logged out
      // localStorage.removeItem('user')
      setUser(null)
    }
  })


  const userProvider = {
    users,
    loading,
    posts,
    comments,
    postLikes,
    setUser,
    user,
    setPosts,
    setComments,
    setUsers,
    uploadPP,
    setUploadPP,
    hasPP
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