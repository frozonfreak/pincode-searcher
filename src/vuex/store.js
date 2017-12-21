import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
import pincodes from '../assets/pincodes.json'

Vue.use(Vuex)

const state = {
  pincodes: pincodes
}

const mutations = {
}

export default new Vuex.Store({
  actions,
  getters,
  state,
  mutations
})
