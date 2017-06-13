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
    auth.signInWithPopup(provider).then(() => _App.$router.push({name: 'do'}))
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
            isPilot: true,
            personalInfo: {},
            va_info: {
                number: val.va_info.number,
                local: val.va_info.local || '',
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
            isPilot: false
          }
          _App.$store.dispatch('onAuthStateChanged', Object.assign({}, _userInfo))
        })
    }
  },

  createPilot (uid, pilot) {
    let _pilotRef = database.ref('bird/pilots')
    _pilotRef.child(uid).set(pilot)
  },

  fetchUserInfo (uid) {
    return new Promise((resolve, reject) => {
      _userRef = database.ref('bird/pilots')
      _userRef.child(uid).once('value')
        .then(snapshot => {
          const user = snapshot.val()
          resolve(user)
        }).catch(reject)
    })
  },

  fetchFlightsFromDep (dep_icao) {
      _flightRef = database.ref('bird/flights')
      _flightRef.orderByChild('dep').equalTo(dep_icao).on('value', snapshot => {
        const flights = snapshot.val()
        Object.keys(flights).forEach((key, i) => {
            _flights[i] = flights[key]
          })
        _App.$store.dispatch('setFlights', {flights: _flights})
      })
  },
  
  fetchAllFlights () {
      _flightRef = database.ref('bird/flights')
      _flightRef.on('value', snapshot => {
        const flights = snapshot.val()
        Object.keys(flights).forEach((key, i) => {
            _flights[i] = flights[key]
          })
        _App.$store.dispatch('setFlights', {flights: _flights})
      })
  },

  fetchPremiumFlight () {
    _flightPremiumRef = database.ref('bird/premium_flight')
      _flightPremiumRef.on('value', snapshot => {
        const premium_flight = snapshot.val()
        _App.$store.dispatch('setPremiumFlight', {premium_flight})
      })
  },

  fetchNextEvents () {
    _nextEventsRef = database.ref('bird/events')
      _nextEventsRef.on('value', snapshot => {
        const events = snapshot.val()
        Object.keys(events).forEach((key, i) => {
            _events[i] = events[key]
          })
        _App.$store.dispatch('setEvents', {events: _events})
      })
  },

  fetchSubjects () {
    _questionsRef = database.ref('bird/school/questions')
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
    _awardsRef = database.ref('bird/school/awards')
      _awardsRef.on('value', snapshot => {
        let _awardsData = snapshot.val()
        Object.keys(_awardsData).forEach(key => {
          _awardsArray.push(_awardsData[key])
        })
        _App.$store.dispatch('setAwards', {awards: _awardsArray})
        _awardsArray = []
      })
  },

  fetchAllPilots () {
    let _pilotsRef = database.ref('bird/pilots')
    _pilotsRef.on('value', snap => {
      const _pilotsData = snap.val()
      _App.$store.dispatch('setAllPilots', _pilotsData)
    })
  },

  addAward (award) {
    return new Promise((resolve, reject) => {
      _questionsRef = database.ref('bird/school/awards')
      _questionsRef.push(award)
      resolve()
    }).catch( err => reject(err))
  },  

  fetchRatings () {
    let _ratingsRef = database.ref('bird/operations/ratings')
    let _ratingsArray = []
    _ratingsRef.on('value', snap => {
      _ratingsData = snap.val()
      Object.keys(_ratingsData).forEach(key => {
        _ratingsArray.push(key)
      })
      _App.$store.dispatch('setRatings', _ratingsArray)
      _ratingsArray = []
    })
  },

  fetchAllQuestions () {
    _questionsRef = database.ref('bird/school/questions')
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
    _examsRef = database.ref('bird/school/exams')
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
      _App.$store.dispatch('setExams', _exams)
      _App.$store.dispatch('setExamsGruops', _examsGruops)
      _exams = []
      _examsGruops = []
    })
  },

  fetchHubs () {
    let _hubsRef = database.ref('bird/hubs')
    let _hubsArray = []
    let data = {}
    _hubsRef.once('value', snap => {
      data = snap.val()
      Object.keys(data).forEach(k => {
        _hubsArray.push(k)
      })
    }).then(() => {
      _App.$store.dispatch('setHubs', _hubsArray)
      _hubsArray = []
    })
  },
  
  fetchEquipments () {
    let _equipmentsRef = database.ref('bird/fleet/equipments')
    let _equipmentsArray = []
    let _data = {}
    _equipmentsRef.on('value', snap => {
      _data = snap.val()
      Object.keys(_data).forEach(key => {
        _equipmentsArray.push(_data[key])
      })
      _App.$store.dispatch('setEquipments', _equipmentsArray)
      _equipmentsArray = []
    })
  },
  
  fetchAircrafts () {
    let _aircraftsRef = database.ref('bird/fleet/aircrafts')
    let _aircraftsArray = []
    let _data = {}
    _aircraftsRef.on('value', snap => {
      _data = snap.val()
      Object.keys(_data).forEach(key => {
        let aircraft = {}
        aircraft.register = _data[key].register
        aircraft.location = _data[key].location
        aircraft.model = _data[key].model
        aircraft.status = _data[key].status
        aircraft.integrity = _data[key].integrity
        aircraft.key = key
        _aircraftsArray.push(aircraft)
      })
      _App.$store.dispatch('setAircrafts', _aircraftsArray)
      _aircraftsArray = []
    })
  },

  addQuestion (subject, question) {
    return new Promise((resolve, reject) => {
      _questionsRef = database.ref('bird/school/questions').child(subject)
      _questionsRef.push(question).then()
      resolve()
    }).catch( err => reject())
  },

  
  addExam (gruop, name, exam) {
    return new Promise((resolve, reject) => {
      _examsRef = database.ref('bird/school/exams').child(gruop).child(name)
      _examsRef.set(exam).then()
      resolve()
    }).catch( err => reject(err))
  },

  addFleetGeneric (type, object) {
    return new Promise((resolve, reject) => {
      let _genericRef = database.ref(`bird/fleet/${type}`)
      _genericRef.push(object).then()
      resolve()
    }).catch(err => reject(err))
  },
  
  sellAircraft (aircraft) {
    return new Promise((resolve, reject) => {
      let _genericRef = database.ref(`bird/fleet/aircraft`)
      _genericRef.child('sold_aircrafts').push(aircraft).then()
      resolve()
    }).catch(err => reject(err))
  },

  editFleetGeneric (type, key, object) {
    return new Promise((resolve, reject) => {
      let _genericRef = database.ref(`bird/fleet/${type}`).child(key)
      _genericRef.set(object).then()
      resolve()
    }).catch(err => reject(err))
  } 

}
