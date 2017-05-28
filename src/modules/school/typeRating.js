import Vue from 'vue'
import Vuex from 'vuex'
import Firebase from '../firebase'
// import LocalStrage from './../api/localstrage'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

const state = {
  typeRating: []
  // route: {} // vue-router has created state.route
}

const mutations = {

  setTypeRatings (state, {typeRating}) {
    state.typeRating = typeRating
  }
}

const actions = {
  setTypeRatings ({ commit }, typeRating) {
    commit('setTypeRatings', { typeRating: typeRating })
  },

  fetchAllTypeRatings ({ commit }) {
    Firebase.fetchAllTypeRatings()
    // TODO - On Firebase
  }
}

const getters = {
  typeRating: state => state.typeRating.typeRating

}

export default {
  state,
  getters,
  actions,
  mutations,
  strict: debug
}
