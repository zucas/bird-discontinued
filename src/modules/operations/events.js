import Vue from 'vue'
import Vuex from 'vuex'
import Firebase from '../firebase'
// import LocalStrage from './../api/localstrage'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

const state = {
  events: []
  // route: {} // vue-router has created state.route
}

const mutations = {
  setEvents (state, { events }) {
    state.events = events
  }
}

const actions = {
  setEvents ({commit}, {events}) {
    commit('setEvents', { events: events })
  },

  fetchNextEvents ({ commit }) {
    Firebase.fetchNextEvents()
  }

}

const getters = {
  nextEvents: state => state.events
}

export default {
  state,
  getters,
  actions,
  mutations,
  strict: debug
}
