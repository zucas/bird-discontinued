import Firebase from 'firebase'
const firebaseApp = Firebase.initializeApp({apiKey: 'AIzaSyBnN56ni-3PPrOBUcFL99tSSN6p058nEU0',
  authDomain: 'bird-ff640.firebaseapp.com',
  databaseURL: 'https://bird-ff640.firebaseio.com',
  projectId: 'bird-ff640',
  storageBucket: 'bird-ff640.appspot.com',
  messagingSenderId: '336177415259'})
const storage = firebaseApp.storage()

export default storage

// Set the configuration for your app
// TODO: Replace with your project's config object
var config = {
  apiKey: '<your-api-key>',
  authDomain: '<your-auth-domain>',
  databaseURL: '<your-database-url>',
  storageBucket: '<your-storage-bucket>'
};
firebase.initializeApp(config);

// Get a reference to the storage service, which is used to create references in your storage bucket
var storage = firebase.storage();