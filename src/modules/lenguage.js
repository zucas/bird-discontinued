/**
 * Created by davi_ on 28/03/2017.
 * All rights reserved
 */

const state = {
    lenguage: 'BR'
};

const getters = {
    getLenguage: state => {
        return state.lenguage
    }
};

const mutations = {
    atribuirLenguage: (state, lenguage) => {
        state.token = lenguage
    }
};

const actions = {
    setLenguage: ({ commit }, lenguage) => {
        commit('atribuirLenguage', lenguage)
    }
};

export default {
    state,
    mutations,
    actions,
    getters
};