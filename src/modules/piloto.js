/**
 * Created by davi_ on 04/03/2017.
 * All rights reserved
 */

const state = {
    piloto: {},
    pilotoLogado: false
};

const getters = {
    getPiloto: state => {
        return state.piloto
    },
    getPilotoId: state => {
        return state.piloto.id
    },
    getPilotoSobrenome: state => {
        return state.piloto.sobrenome
    },
    getIsStaff: state => {
        return (state.piloto.tipo_usuario == 2)
    },
    getPilotoLogado: state => {
        return state.pilotoLogado
    },

};

const mutations = {
    atribuirPiloto: (state, piloto) => {
        state.piloto = piloto
    },
    atribuirPilotoLogado: (state, pilotoLogado) => {
        state.pilotoLogado = pilotoLogado
    }
};

const actions = {

    setPiloto: ({ commit }, piloto) => {
        commit('atribuirPiloto', piloto)
    },

    setPilotoLogado: ({ commit }, pilotoLogado) => {
        commit('atribuirPilotoLogado', pilotoLogado)
    }
};

export default {
    state,
    mutations,
    actions,
    getters
};