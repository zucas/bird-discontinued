import Vue from 'vue'
import Vuex from 'vuex'
import Firebase from '../firebase'
// import LocalStrage from './../api/localstrage'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

const state = {
  awards: []
  // route: {} // vue-router has created state.route
}

const mutations = {

  setAwards (state, awards) {
    state.awards = awards.awards
  }
}

const actions = {

  setAwards ({ commit }, awards) {
    commit('setAwards', awards)
  },

  fetchAwardsData ({ commit }) {
    Firebase.fetchAllAwards()
  },

  addAward ({commit}, award) {
    Firebase.addAward(award)
  }
}

const getters = {
  awards: state => state.awards,
  awardsNumber: state => state.awards.length
}

export default {
  state,
  getters,
  actions,
  mutations,
  strict: debug
}
