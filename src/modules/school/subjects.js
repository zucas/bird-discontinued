import Vue from 'vue'
import Vuex from 'vuex'
import Firebase from '../firebase'
// import LocalStrage from './../api/localstrage'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

const state = {
  subjects: []
  // route: {} // vue-router has created state.route
}

const mutations = {

  setSubjects (state, subjects) {
    state.subjects = subjects
  }
}

const actions = {
  setSubjects ({ commit }, subjects) {
    commit('setSubjects', subjects)
  },

  fetchSubjects ({ commit }) {
    Firebase.fetchSubjects()
  }
}

const getters = {
  subjects: state => state.subjects,
  totalSubjects: state => state.subjects.length
}

export default {
  state,
  getters,
  actions,
  mutations,
  strict: debug
}
