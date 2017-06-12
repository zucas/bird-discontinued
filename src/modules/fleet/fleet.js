import Vue from 'vue'
import Vuex from 'vuex'
import Firebase from '../firebase'
// import LocalStrage from './../api/localstrage'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

const state = {
  // EX-Hubs
  equipments: [],
  // EX-Ratings
  aircrafts: []
  // route: {} // vue-router has created state.route
}

const mutations = {

  setEquipments (state, equipments) {
    state.equipments = equipments
  },
  setAircrafts (state, aircrafts) {
    state.aircrafts = aircrafts
  }
}

const actions = {
  setEquipments ({commit}, equipaments) {
    commit('setEquipments', equipaments)
  },
  setAircrafts ({commit}, aircrafts) {
    commit('setAircrafts', aircrafts)
  },

  fetchEquipments ({commit}) {
    Firebase.fetchHubs()
  },

  fetchAircrafts ({commit}) {
    Firebase.fetchHubs()
  },

  addFleetGeneric ({commit}, {type, object}) {
    Firebase.addFleetGeneric(type, object)
  }

}

const getters = {
  equipments: state => state.equipments,
  aircrafts: state => state.aircrafts
}

export default {
  state,
  getters,
  actions,
  mutations,
  strict: debug
}
