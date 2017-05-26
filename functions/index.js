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

exports.questionLenguageSet = functions.database.ref('school/questions/{subjectId}/{questionId}')
.onWrite(event => {
  const question = event.data.val()
  translate.detect(question.statement, (err, results) => {
    return event.data.ref.child('language').set(results.language)
  })
})

exports.countTotalQuestionsPerSubject = functions.database.ref('school/questions/').onWrite(event => {
  //Aqui estou contando o numero de temas
  const count = event.data.numChildren()
  return event.data.ref.parent.child('total_subjects').set(count)
})

exports.setPilotId = functions.database.ref('pilots/{pushId}').onWrite(event => {
  const pilot = event.data.val()
  const nextId = 0
  let nxtCallRef = admin.database().ref('general_settings/nextCallsing')
  nxtCallRef.once('value', snapData => {
    nextId = snapData.val()
  })
  event.data.ref.child('va_info/number').set(nextId)
  return nxtCallRef.set(nextId++)
})

exports.countTotalQuestions = functions.database.ref('school/questions/').onWrite(event => {
  //Aqui estou contando o numero de temas
  const count = event.data.numChildren()
  let count2 = 0
  event.data.forEach(snap => {
    count2 += snap.numChildren()
  })
  return event.data.ref.parent.child('total_questions').set(count2)
})

exports.sendWelcomeEmail = functions.auth.user().onCreate(event => {
  // ...
});

