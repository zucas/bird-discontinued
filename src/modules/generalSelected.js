/**
 * Created by davi_ on 29/04/2017.
 */

const state = {
  generalSelected: {}
}

const getters = {
  getGeneralSelected: state => {
    return state.generalSelected
  }
}

const mutations = {
  atribuirGeneralSelected: (state, generalSelected) => {
    state.generalSelected = generalSelected
  }
}

const actions = {
  setGeneralSelected: ({ commit }, generalSelected) => {
    commit('atribuirGeneralSelected', generalSelected)
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
