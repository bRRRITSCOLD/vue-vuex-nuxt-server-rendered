import Vuex from 'vuex'
import axios from 'axios'

const store = () => {
  return new Vuex.Store({
    state: {
      todos: []
    },
    mutations: {
      init: (state, data) => {
        state.todos = data
      },
      add: (state, todo) => {
        state.todos = [...state.todos, todo]
      },
      remove: (state, todo) => {
        state.todos = state.todos.filter(t => t.id !== todo.id)
      },
      toggle: (state, todo) => {
        state.todos = state.todos.map(t => t.id === todo.id ? todo : t)
      }
    },
    actions: {
      add: async ({ commit }, task) => {
        const res = await axios.post('https://todos-api-twvmdqicmt.now.sh/todos', { task, complete: false })
        commit('add', res.data)
      },
      remove: async ({commit}, todo) => {
        await axios.delete(`https://todos-api-twvmdqicmt.now.sh/todos/${todo.id}`)
        commit('remove', todo)
      },
      toggle: async ({commit}, todo) => {
        const res = await axios.patch(`https://todos-api-twvmdqicmt.now.sh/todos/${todo.id}`, {
          task: todo.task,
          complete: !todo.complete
        })
        commit('toggle', res.data)
      }
    }
  })
}

export default store
