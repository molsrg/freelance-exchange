import { createStore } from 'vuex'

export default createStore({
  state: {
    tasks: []
  },
  getters: {
    TASKS: (state) => {
      return state.tasks;
    },
    TASK_BY_ID: (state) => (id) => {
      return state.tasks.find(task => task.id === id);
    },

  },
  mutations: {
      ADD_TASK: (state, data) => {
        state.tasks.push(data)
      },

      ADD_ALL_TASK_FROM_LS: (state, data) => {
        state.tasks = data
      },
      
      REMOVE_TASK_BY_ID: (state, id) => {
        const index = state.tasks.findIndex(task => task.id === id);
        if (index !== -1) {
          state.tasks.splice(index, 1);
        }
      }

  },
  actions: {
  },
  modules: {
  }
})
