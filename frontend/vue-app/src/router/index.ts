import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

import DefaultPage from '../components/buttons/DefaultPage.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'DefaultPage',
    component: DefaultPage
  }
  // {
  //   path: '/profile',
  //   name: 'Profile',
  //   component: () =>
  //     import(/* webpackChunkName: "profile" */ '../views/Profile.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
export default router
