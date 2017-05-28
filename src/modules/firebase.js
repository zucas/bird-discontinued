import Firebase from 'firebase'
const key = {
  apiKey: 'AIzaSyBnN56ni-3PPrOBUcFL99tSSN6p058nEU0',
  authDomain: 'bird-ff640.firebaseapp.com',
  databaseURL: 'https://bird-ff640.firebaseio.com',
  projectId: 'bird-ff640',
  storageBucket: 'bird-ff640.appspot.com',
  messagingSenderId: '336177415259'
}
const firebaseApp = Firebase.initializeApp(key)
const db = firebaseApp.database()
const database = firebaseApp.database()
const auth = firebaseApp.auth()

// variables
let _userInfo = {}
let _userRef = null
let _pilotInfo = {}
let _pilotRef = null
let _flightInfo = {}
let _flightRef = null
let _examsRef = null
let _examInfo = {}
let _exams = []
let _flights = []
let _flightPremiumRef = null
let _nextEventsRef = null
let _events = []
let _questionsRef = null
let _questions = []
let _subjectsArray = []
let _subjectInfo = {}
let _awardsRef = null
let _awardsArray = []
let _ratingsData = {}
let _examsGruops = []

export default {
  database,
  db,

  initFirebase () {
    // Initiates Firebase auth and listen to auth state changes.
    auth.onAuthStateChanged(this.onAuthStateChanged.bind(this))
  },

  getAuth () {
    return auth.currentUser || {}
  },

  getPilotData (uid) {
    database.ref('pilots').child(uid)
  },

  signInFB () {
    // Sign in Firebase using popup auth and Google as the identity provider.
    let provider = new Firebase.auth.FacebookAuthProvider()
    auth.signInWithPopup(provider)
  },

  signInGoogle () {
    // Sign in Firebase using popup auth and Google as the identity provider.
    let provider = new Firebase.auth.GoogleAuthProvider()
    auth.signInWithPopup(provider)
  },

  signInEmail (email, password) {
    // Sign in Firebase using popup auth and Google as the identity provider.
    auth.signInWithEmailAndPassword(email, password)
  },

  signOut () {
    // Sign out of Firebase.
    auth.signOut()
  },

    // Triggers when the auth state change for instance when the user signs-in or signs-out.
  onAuthStateChanged (user) {
    if (user) { // User is signed in!
      this.fetchUserInfo(user.uid)
        .then(val => {
          _userInfo = {
            loggedIn: true,
            uid: user.uid,
            name: val.name || user.displayName,
            profilePicUrl: user.photoURL,
            email: val.email || user.email,
            personalInfo: {},
            va_info: {
                number: val.va_info.number,
                local: val.va_info.local,
                hub: val.va_info.hub,
                rating: val.va_info.rating,
                active: val.va_info.active,
                total_flights: val.va_info.total_flights,
                flight_hours: val.va_info.flight_hours,
                xp: val.va_info.xp
              }
          }
          _App.$store.dispatch('onAuthStateChanged', Object.assign({}, _userInfo))
        }).catch(() => {
          _userInfo = {
            loggedIn: true,
            uid: user.uid,
            name: user.displayName,
            profilePicUrl: user.photoURL,
            email: user.email,
          }
          _App.$store.dispatch('onAuthStateChanged', Object.assign({}, _userInfo))
        })
    }
  },

  fetchUserInfo (uid) {
    return new Promise((resolve, reject) => {
      _userRef = database.ref('LATAM-VA/pilots')
      _userRef.child(uid).once('value')
        .then(snapshot => {
          const user = snapshot.val()
          resolve(user)
        }).catch(reject)
    })
  },

  fetchFlightsFromDep (dep_icao) {
      _flightRef = database.ref('LATAM-VA/flights')
      _flightRef.orderByChild('dep').equalTo(dep_icao).on('value', snapshot => {
        const flights = snapshot.val()
        Object.keys(flights).forEach((key, i) => {
            _flights[i] = flights[key]
          })
        _App.$store.dispatch('setFlights', {flights: _flights})
      })
  },

  fetchPremiumFlight () {
    _flightPremiumRef = database.ref('LATAM-VA/premium_flight')
      _flightPremiumRef.on('value', snapshot => {
        const premium_flight = snapshot.val()
        _App.$store.dispatch('setPremiumFlight', {premium_flight})
      })
  },

  fetchNextEvents () {
    _nextEventsRef = database.ref('LATAM-VA/events')
      _nextEventsRef.on('value', snapshot => {
        const events = snapshot.val()
        Object.keys(events).forEach((key, i) => {
            _events[i] = events[key]
          })
        _App.$store.dispatch('setEvents', {events: _events})
      })
  },

  fetchSubjects () {
    _questionsRef = database.ref('LATAM-VA/school/questions')
      _questionsRef.on('value', snapshot => {
        const subjects = snapshot.val()
        Object.keys(subjects).forEach((key, i) => {
          _subjectInfo = {
            name: key,
            numberOfQuestions: Object.keys(subjects[key]).length
          }
            _subjectsArray[i] = _subjectInfo
          })
        _App.$store.dispatch('setSubjects', _subjectsArray)
      })
  },
  
  fetchAllAwards () {
    _awardsRef = database.ref('LATAM-VA/school/awards')
      _awardsRef.on('value', snapshot => {
        let _awardsData = snapshot.val()
        Object.keys(_awardsData).forEach(key => {
          _awardsArray.push(_awardsData[key])
        })
        _App.$store.dispatch('setAwards', {awards: _awardsArray})
        _awardsArray = []
      })
  },

  addAward (award) {
    return new Promise((resolve, reject) => {
      console.log(award);
      _questionsRef = database.ref('LATAM-VA/school/awards')
      _questionsRef.push(award)
      resolve()
    }).catch( err => reject(err))
  },  

  fetchRatings () {
    let _ratingsRef = database.ref('LATAM-VA/operations/ratings')
    _ratingsRef.once('value').then(snap => {
      _ratingsData = snap.val()
      _App.$store.dispatch('setRatings', {ratings: _ratingsData})
    }).catch()
  },

  fetchAllQuestions () {
    _questionsRef = database.ref('LATAM-VA/school/questions')
      _questionsRef.on('value', snapshot => {
        const subjects = snapshot.val()
        let subjectsArray = []
        Object.keys(subjects).forEach((key, i) => {
            subjectsArray[i] = subjects[key]
          })
          subjectsArray.forEach(subject => {
            Object.keys(subject).forEach((key) => {
              _questions.push(subject[key])
            })             
          })
        _App.$store.dispatch('setQuestions', {questions: _questions})
        _questions = []
      })
  },

  fetchExams () {
    _examsRef = database.ref('LATAM-VA/school/exams')
    _examsRef.on('value', snap => {
      const allData = snap.val()
      Object.keys(allData).forEach((gruop) => {
        _examsGruops.push(gruop)
        Object.keys(allData[gruop]).forEach(name => {
          _examInfo = allData[gruop][name]
          _exams.push({
            name: _examInfo.name,
            questions: _examInfo.questions,
            minScore: _examInfo.minScore,
            time: _examInfo.time,
            daysToNewChance: _examInfo.daysToNewChance,
            approvalRate: _examInfo.approvalRate,
            gruop: gruop
          })
        })
      })
      console.log(_exams)
      _App.$store.dispatch('setExams', _exams)
      _App.$store.dispatch('setExamsGruops', _examsGruops)
      _exams = []
      _examsGruops = []
    })
  },

  addQuestion (subject, question) {
    return new Promise((resolve, reject) => {
      _questionsRef = database.ref('LATAM-VA/school/questions').child(subject)
      _questionsRef.push(question).then()
      resolve()
    }).catch( err => reject())
  },

  
  addExam (gruop, name, exam) {
    return new Promise((resolve, reject) => {
      console.log(gruop)
      console.log(exam)
      _examsRef = database.ref('LATAM-VA/school/exams').child(gruop).child(name)
      _examsRef.set(exam).then()
      resolve()
    }).catch( err => reject(err))
  } 

}
