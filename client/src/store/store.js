import axios from 'axios'
import Vue from 'vue'
import Vuex from 'vuex'

const url = 'http://localhost:3000'

Vue.prototype.$axios = axios.create({
  baseURL: url
})

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    todo: [],
    dummy: 'ini data dummy'
  }, // state

  mutations: {
    getAllTodo (state) {
      state.todo = []
      axios.get(url + '/task')
      .then(({data}) => {
        this.state.todo = data.reverse()
      })
      .catch(e => console.error(e))
    }
  }, // mutations

  actions: {
    newTask (store, payload) {
      payload.todoToken = localStorage.getItem('todoToken')
      console.log(payload.token)
      axios.post(url + '/task', payload)
      .then(() => {
        this.state.todo.unshift(payload)
      })
      .catch(e => console.log(e))
    }
  }, // actions

  getters: {
  } // getters

}) // store
