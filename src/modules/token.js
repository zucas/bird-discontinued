/**
 * Created by davi_ on 04/03/2017.
 * All rights reserved
 */

const state = {
    token: ''
};

const getters = {
    getToken: state => {
        return state.token
    }
};

const mutations = {
    atribuirToken: (state, token) => {
        state.token = token
    }
};

const actions = {
    setToken: ({ commit }, token) => {
        commit('atribuirToken', token)
    }
};

export default {
    state,
    mutations,
    actions,
    getters
};