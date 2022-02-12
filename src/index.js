import React, {createContext} from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import firebase from 'firebase'
import 'firebase/firestore'
import 'firebase/auth'

firebase.initializeApp({
  apiKey: 'AIzaSyAkfTQbHOSa3lNq7IaHQ5BdUmxukuCCXXY',
  authDomain: 'chat-react-6858d.firebaseapp.com',
  projectId: 'chat-react-6858d',
  storageBucket: 'chat-react-6858d.appspot.com',
  messagingSenderId: '620020464138',
  appId: '1:620020464138:web:a73210dc611902c387bdf3',
  measurementId: 'G-LKEVGF0Y7E',
})

export const Context = createContext(null)

const auth = firebase.auth()
const firestore = firebase.firestore()

ReactDOM.render(
  <Context.Provider
    value={{
      firebase,
      auth,
      firestore,
    }}
  >
    <App />
  </Context.Provider>,
  document.getElementById('root')
)
