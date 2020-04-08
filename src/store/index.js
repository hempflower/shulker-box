import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    dialog: [],
    remindUpdate: false
  },
  mutations: {
    alert(state, data) {
      state.dialog.push({
        title: data.title,
        content: data.content,
        show: true,
        buttons: data.buttons ? data.buttons : []

      })
    },
    remindUpdate(state, data) {
      state.remindUpdate = data
    }
  },
  actions: {
  },
  modules: {
  }
})
