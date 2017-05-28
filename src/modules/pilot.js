import Vue from 'vue'
import Vuex from 'vuex'
import Firebase from './firebase'
// import LocalStrage from './../api/localstrage'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

const state = {
  user: {
    loggedIn: false,
    uid: '',
    name: '',
    email: '',
    profilePicUrl: '',
    va_info: {
      hub: 'SBGR',
      local: '',
      rating: ''
    }
  },
  ratings: []
  // route: {} // vue-router has created state.route
}

const mutations = {

  onAuthStateChanged (state, { user }) {
    state.user = user
  },

  setUser (state, { key, val }) {
    Vue.set(state.user, key, val)
  },
  
  setRatings   (state, ratings) {
    state.ratings = ratings.ratings
  }
}

const actions = {

  onAuthStateChanged ({ commit }, user) {
    commit('onAuthStateChanged', { user })
  },

  signInFB () {
    Firebase.signInFB()
  },

  signOut () {
    Firebase.signOut()
  },

  setUserInfo ({ commit, state }, { key, val }) {
    return new Promise((resolve, reject) => {
      if (state.user.loggedIn) { // is signed in. Firebase
        Firebase.setUserInfo(key, val)
          .then(() => {
            commit('setUser', { key, val })
            resolve()
          }).catch(reject)
      }
    })
  },

  fetchRatings({commit}){
    Firebase.fetchRatings()
  },

  setRatings({commit}, {ratings}) {
    commit('setRatings', {ratings})
  }

}

const getters = {
  user: state => state.user,
  pilot: state => state.user,
  currentUserName: state => state.user.name,
  currentUserId: state => state.user.uid,
  currentUserLocal: state => state.user.va_info.local,
  ratings: state => state.ratings
}

export default {
  state,
  getters,
  actions,
  mutations,
  strict: debug
}
