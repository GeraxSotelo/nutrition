import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

let _sandboxApi = axios.create({
  baseURL: "//bcw-sandbox.herokuapp.com/api/benkirby/logs",
  timeout: 5000
});
let _foodApi = axios.create({
  baseURL: "https://trackapi.nutritionix.com/v2/natural/nutrients",
  timeout: 3000,
  headers: {
    "x-app-key": "eee0cdea64f80f61c0c8434d15ac9189",
    "x-app-id": "dd2464dd"
  }
});
export default new Vuex.Store({
  state: {
    logs: [],
    activeLog: {},
    results: [],
    savedFoods: []
  },
  mutations: {
    addLog(state, data) {
      state.logs.push(data)
    },
    setLogs(state, data) {
      state.logs = data

    },
    setActiveLog(state, data) {
      state.activeLog = data
    },
    search(state, data) {
      state.results = data
    }

  },
  actions: {
    async createLog({ commit, dispatch }, log) {
      let res = await _sandboxApi.post("", log)
      console.log(res.data.data)
      commit("addLog", res.data.data)
    },
    async getAllLogs({ commit, dispatch }) {
      let res = await _sandboxApi.get("");
      commit("setLogs", res.data.data)
    },
    async setActiveLog({ commit, dispatch }, id) {
      let res = await _sandboxApi.get(id)
      commit("setActiveLog", res.data.data)
    },
    async search({ commit, dispatch }, query) {
      let queryObj = { query: query }
      let res = await _foodApi.post("", queryObj)
      console.log(res.data)
      commit("search", res.data)
    }
  },
  modules: {
  }
})
