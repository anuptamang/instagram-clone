import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyAS21rRQQopniBE6jpbzi42tci73fM2TMg',
  authDomain: 'instagram-clone-725f8.firebaseapp.com',
  projectId: 'instagram-clone-725f8',
  storageBucket: 'instagram-clone-725f8.appspot.com',
  messagingSenderId: '54903738469',
  appId: '1:54903738469:web:b5e736672babdc929c768c',
  measurementId: 'G-TPG7GR8TE9',
})

const db = firebaseApp.firestore()
const auth = firebase.auth()
const storage = firebase.storage()
const provider = new firebase.auth.GoogleAuthProvider()

export { auth, provider, storage }
export default db
