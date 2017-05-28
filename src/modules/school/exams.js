import Vue from 'vue'
import Vuex from 'vuex'
import Firebase from '../firebase'
// import LocalStrage from './../api/localstrage'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

const state = {
  exams: [],
  examsGruops: []
  // route: {} // vue-router has created state.route
}

const mutations = {

  setExams (state, exams) {
    state.exams = exams
  },
  setExamsGruops (state, examsGruops) {
    state.examsGruops = examsGruops
  }
}

const actions = {

  setExams ({ commit }, exams) {
    commit('setExams', (exams))
  },

  setExamsGruops ({ commit }, gruops) {
    commit('setExamsGruops', gruops)
  },

  addExam ({commit}, {gruop, name, exam}) {
    Firebase.addExam(gruop, name, exam)
  },

  fetchExamsData ({ commit }) {
    Firebase.fetchExams()
  }
}

const getters = {

  exams: state => state.exams,
  totalExams: state => state.exams.length,
  examsGruops: state => state.examsGruops

}

export default {
  state,
  getters,
  actions,
  mutations,
  strict: debug
}
