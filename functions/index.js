const functions = require('firebase-functions');

const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions

exports.helloWorld = functions.https.onRequest((request, response) => {
  response.send('Hello from Firebase! Teste')
})

exports.examGenetator = functions.https.onRequest((request, response) => {
  let questions = admin.database().ref('school/questions')
  questions.once("value", dataSnap => {
    console.log(dataSnap)
  })
  response.send(200)
  // Pegar o key do exame 
})

exports.sendWelcomeEmail = functions.auth.user().onCreate(event => {
  // ...
});

