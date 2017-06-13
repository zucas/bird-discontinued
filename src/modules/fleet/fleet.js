import Vue from 'vue'
import Vuex from 'vuex'
import Firebase from '../firebase'
// import LocalStrage from './../api/localstrage'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

const state = {
  equipments: [],
  aircrafts: []
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
    Firebase.fetchEquipments()
  },

  fetchAircrafts ({commit}) {
    Firebase.fetchAircrafts()
  },

  addFleetGeneric ({commit}, {type, object}) {
    Firebase.addFleetGeneric(type, object)
  },

  editFleetGeneric ({commit}, {type, key, object}) {
    Firebase.editFleetGeneric(type, key, object)
  },
  sellAircraft ({commit}, aircraft) {
    Firebase.sellAircraft(aircraft)
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
