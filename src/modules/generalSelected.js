/**
 * Created by davi_ on 29/04/2017.
 */
import Firebase from './firebase'
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
  },

  saveGeneral ({commit}, {path, object}) {
    Firebase.addGeneric(path, object)
  },
  deleteGeneral ({commit}, {path, object}) {
    Firebase.deleteGeneric(path, object)
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
