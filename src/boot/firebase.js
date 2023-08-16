import * as firebase from 'firebase/app'
// import { initializeApp } from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDtwN06Ca20VyF1U8YA1Z4O5MAzos3qRDc',
  authDomain: 'chatapp-96106.firebaseapp.com',
  projectId: 'chatapp-96106',
  storageBucket: 'chatapp-96106.appspot.com',
  messagingSenderId: '975967395729',
  appId: '1:975967395729:web:f9bf43d24e1d3139f7c430'
}

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig)
const firebaseAuth = firebaseApp.auth()
const firebaseDb = firebaseApp.database()

export { firebaseAuth, firebaseDb }
