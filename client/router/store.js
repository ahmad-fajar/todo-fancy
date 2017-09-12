import axios from 'axios'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.prototype.$axios = axios.create({
  baseURL : 'http://localhost:3000'
})

Vue.use(Vuex)

export const store = new Vuex.Store({
  
})