import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: ()=>import('../pages/LauncherMain.vue')
  }
]

const router = new VueRouter({
  //由于打包后的特点，更适合使用hash模式
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
