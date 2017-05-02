var functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

exports.counterSchool = functions.database.ref('school').onWrite(
  event => {
    const collectionRef = event.data.ref.parent.child('themes');
    const countRef = collectionRef.parent.child('totalQuestions');

    // Return the promise from countRef.transaction() so our function
    // waits for this async event to complete before it exits.
    return countRef.transaction(current => {
      if (event.data.exists() && !event.data.previous.exists()) {
        return (current || 0) + 1;
      }
      else if (!event.data.exists() && event.data.previous.exists()) {
        return (current || 0) - 1;
      }
    }).then(() => {
      console.log('Counter updated.');
    });
  });
