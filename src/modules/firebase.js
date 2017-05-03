import Firebase from 'firebase'
const firebaseApp = Firebase.initializeApp({
//Your API KEY HERE  
})
const db = firebaseApp.database()
export default db
