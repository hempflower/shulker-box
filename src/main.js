import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import { ipcRenderer } from 'electron'

Vue.config.productionTip = false
Vue.prototype.$ipc = ipcRenderer
Vue.prototype.$shell = require('electron').shell


new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
