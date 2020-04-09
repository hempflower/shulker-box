import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    component: ()=>import('../pages/LauncherMain.vue'),
    children: [
      {
        path: 'home',
        component: ()=>import('../pages/LauncherHome.vue')
      },
      {
        path: 'about',
        component: ()=>import('../pages/LauncherAbout.vue')
      }
    ]
  },
  {
    path: '/',
    redirect: '/home/home'
  },
  {
    path: '*',
    redirect: '/home/home'
  }
]

const router = new VueRouter({
  //由于打包后的特点，更适合使用hash模式
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
