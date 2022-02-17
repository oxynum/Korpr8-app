import Vue from 'vue'
import VueRouter from 'vue-router'
import SelfActivity from '../views/SelfActivity.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'SelfActivity',
    component: SelfActivity
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/activity',
    name: 'MonthActivity',
    component: () => import('../views/MonthActivity.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
