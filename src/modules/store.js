import Vue from 'vue'
import Vuex from 'vuex'
import generalSelected from './generalSelected'
import pilot from './pilot'
import flights from './operations/flights'
import exams from './school/exams'
import events from './operations/events'
import questions from './school/questions'
import subjects from './school/subjects'
import awards from './school/awards'
import fleet from './fleet/fleet'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    fleet,
    generalSelected,
    pilot,
    flights,
    exams,
    events,
    questions,
    subjects,
    awards
  }
})
