import Vue from 'vue'
import Vuex from 'vuex'
import generalSelected from './generalSelected'
import pilot from './pilot'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    generalSelected,
    pilot
  }
})
