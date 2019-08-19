import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/cats',
      name: 'cats',
      component: () => import(/* webpackChunkName: "about" */ './views/Cats.vue')
    },
    {
      path: '/dogs',
      name: 'dogs',
      component: () => import(/* webpackChunkName: "about" */ './views/Dogs.vue')
    },
    {
      path: '/pet/:species/:id',
      name: 'pet',
      component: () => import(/* webpackChunkName: "about" */ './views/Pet.vue')
    }
  ]
})
