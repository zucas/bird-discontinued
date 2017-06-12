import Vue from 'vue'
import Vuex from 'vuex'
import Firebase from '../firebase'
// import LocalStrage from './../api/localstrage'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

const state = {
  flights: [],
  premium_flight: {}
  // route: {} // vue-router has created state.route
}

const mutations = {
  setFlights (state, { flights }) {
    state.flights = flights
  },
  setPremiumFlight (state, { premiumFlight }) {
    state.premium_flight = premiumFlight
  }
}

const actions = {
  setFlights ({commit}, {flights}) {
    commit('setFlights', { flights: flights })
  },

  setPremiumFlight ({commit}, {premium_flight}) {
    commit('setPremiumFlight', { premium_flight: premium_flight })
  },
  fetchFlightsFromDep ({ commit }, {dep_icao}) {
    Firebase.fetchFlightsFromDep(dep_icao)
  },
  fetchAllFlights ({ commit }) {
    Firebase.fetchAllFlights()
  },

  fetchPremiumFlight ({ commit }) {
    Firebase.fetchPremiumFlight()
  }

}

const getters = {

  flights: state => state.flights,
  premium_flight: state => state.premium_flight
}

export default {
  state,
  getters,
  actions,
  mutations,
  strict: debug
}
