import Vue from 'vue'
import Vuex from 'vuex'
import Firebase from '../firebase'
// import LocalStrage from './../api/localstrage'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

const state = {
  questions: []
  // route: {} // vue-router has created state.route
}

const mutations = {

  setQuestions (state, {questions}) {
    state.questions = questions.questions
  }
}

const actions = {
  setQuestions ({ commit }, questions) {
    commit('setQuestions', { questions: questions })
  },

  fetchAllQuestions ({ commit }) {
    Firebase.fetchAllQuestions()
  },

  createNewQuestion ({ commit, state }, {subject, question}) {
    return new Promise((resolve, reject) => {
      Firebase.addQuestion(subject, question).then(
        resolve()
      ).catch(err => {
        reject(err)
      })
    })
  }

}

const getters = {
  questions: state => state.questions,
  totalQuestions: state => state.questions.length

}

export default {
  state,
  getters,
  actions,
  mutations,
  strict: debug
}
