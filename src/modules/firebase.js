import Firebase from 'firebase'
const firebaseApp = Firebase.initializeApp({apiKey: 'AIzaSyBnN56ni-3PPrOBUcFL99tSSN6p058nEU0',
  authDomain: 'bird-ff640.firebaseapp.com',
  databaseURL: 'https://bird-ff640.firebaseio.com',
  projectId: 'bird-ff640',
  storageBucket: 'bird-ff640.appspot.com',
  messagingSenderId: '336177415259'})
const db = firebaseApp.database()
export default db
