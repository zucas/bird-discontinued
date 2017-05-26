/**
 * Created by davi_ on 29/04/2017.
 */

const state = {
  pilot: {}
}

const getters = {
  getPilot: state => {
    return state.pilot
  }
}

const mutations = {
  setPilotMutation: (state, pilot) => {
    state.pilot = pilot
  }
}

const actions = {
  setPilot: ({ commit }, pilot) => {
    commit('setPilotMutation', pilot)
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
