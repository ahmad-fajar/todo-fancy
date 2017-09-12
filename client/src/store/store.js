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
      let todoToken = localStorage.getItem('todoToken')
      axios.get(url + '/task/' + '59b79e2f66aa370c7cb9926e', {
        headers: {todoToken: todoToken}
      })
      .then(({data}) => {
        this.state.todo = data.reverse()
      })
      .catch(e => console.error(e))
    }
  }, // mutations

  actions: {
    newTask (store, payload) {
      payload.todoToken = localStorage.getItem('todoToken')
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
