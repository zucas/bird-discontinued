const functions = require('firebase-functions');

const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);
const translate = require('@google-cloud/translate')();

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions

exports.examGenetator = functions.https.onRequest((req, res) => {
  // receber a linguagem 
  let lenguage = req.query.len
  let examId = req.query.exam
  let examComplet
  let subject = req.query.subject
  let numQuestions = req.query.numQuestions
  res.send(`Foi solicitado o exame ${examId} no idioma ${lenguage}, com ${numQuestions} do tema ${subject}. O Exame completo é: ${examComplet}`)  
  // Filtrar o exame pelos dados do reques
})

exports.questionLenguageSet = functions.database.ref('LATAM-VA/school/questions/{subjectId}/{questionId}')
.onWrite(event => {
  const question = event.data.val()
  translate.detect(question.statement, (err, results) => {
    return event.data.ref.child('language').set(results.language)
  })
})


exports.setPilotId = functions.database.ref('LATAM-VA/pilots/{pushId}').onWrite(event => {
  let pilot = event.data.val()
  if (pilot.va_info.number === 0) {
    let nextId = 0
    let nxtCallRef = admin.database().ref('LATAM-VA/general_settings/nextCallsing')
    nxtCallRef.once('value', snapData => {
      nextId = snapData.val()
    })
    event.data.ref.child('va_info/number').set(nextId)
    return nxtCallRef.set(nextId++)
  }
  return
})


exports.sendWelcomeEmail = functions.auth.user().onCreate(event => {
  // ...
});

