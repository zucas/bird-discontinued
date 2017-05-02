/**
 * Created by davi_ on 14/03/2017.
 * All rights reserved
 */

const state = {
  equipamentos: [],
  cargos: [],
  aeronaves: [],
  tiposFrota: [],
  aeronaveSelecionada: {},
  equipamentoSelecionado: {}
}

const getters = {
  getEquipamentos: state => {
    return state.equipamentos
  },
  getCargos: state => {
    return state.cargos
  },
  getAeronaves: state => {
    return state.aeronaves
  },
  getTiposFrota: state => {
    return state.tiposFrota
  },
  getAeronaveSelecionada: state => {
    return state.aeronaveSelecionada
  },
  getEquipamentoSelecionado: state => {
    return state.equipamentoSelecionado
  }

}

const mutations = {
  adicionaEquipamento: (state, equipamento) => {
    state.equipamentos.push(equipamento)
  },
  adicionaCargo: (state, cargo) => {
    state.cargos.push(cargo)
  },
  adicionaAeronave: (state, aeronave) => {
    state.aeronaves.push(aeronave)
  },
  adicionaTipoFrota: (state, tipoFrota) => {
    state.tiposFrota.push(tipoFrota)
  },

  atribuirCargo: (state, cargos) => {
    state.cargos = cargos
  },
  atribuirEquipamento: (state, equipamentos) => {
    state.equipamentos = equipamentos
  },
  atribuirAeronave: (state, aeronaves) => {
    state.aeronaves = aeronaves
  },
  atribuirTipoFrota: (state, tiposFrota) => {
    state.tiposFrota = tiposFrota
  },
  atribuirAeronaveSelecionada: (state, aeronave) => {
    state.aeronaveSelecionada = aeronave
  },
  atribuirEquipamentoSelecionado: (state, equipamento) => {
    state.equipamentoSelecionado = equipamento
  },
  apagaAeronave: (state, aeronave) => {
    let index = state.aeronaves.indexOf(aeronave)
    state.aeronaves.splice(index, 1)
  },
  apagaEquipamento: (state, equipamento) => {
    let index = state.equipamentos.indexOf(equipamento)
    state.equipamentos.splice(index, 1)
  }

}

const actions = {
  adicionarEquipamento: ({commit}, equipamento) => {
    commit('adicionaEquipamento', equipamento)
  },
  adicionarCargo: ({commit}, cargo) => {
    commit('adicionaCargo', cargo)
  },
  adicionarAeronave: ({commit}, aeronave) => {
    commit('adicionaAeronave', aeronave)
  },
  adicionarTipoFrota: ({commit}, tipoFrota) => {
    commit('adicionaTipoFrota', tipoFrota)
  },
  setEquipamentos: ({commit}, equipamento) => {
    commit('atribuirEquipamento', equipamento)
  },
  setCargos: ({commit}, cargo) => {
    commit('atribuirCargo', cargo)
  },
  setAeronaves: ({commit}, aeronave) => {
    commit('atribuirAeronave', aeronave)
  },
  setTipoFrotas: ({commit}, tipoFrota) => {
    commit('atribuirTipoFrota', tipoFrota)
  },
  setAeronaveSelecionada: ({commit}, aeronave) => {
    commit('atribuirAeronaveSelecionada', aeronave)
  },
  setEquipamentoSelecionado: ({commit}, equipamento) => {
    commit('atribuirEquipamentoSelecionado', equipamento)
  },
  deleteAeronave: ({commit}, aeronave) => {
    commit('apagaAeronave', aeronave)
  },
  deleteEquipamento: ({commit}, equipamento) => {
    commit('apagaEquipamento', equipamento)
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
