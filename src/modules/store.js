import Vue from 'vue'
import Vuex from 'vuex'
import fleet from './fleet'
import generalSelected from './generalSelected'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    fleet,
    generalSelected
  }
})
