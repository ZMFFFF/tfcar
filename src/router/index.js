import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/About.vue')
    },
    {
      path: '/oldCar',
      name: 'oldCar',
      component: () => import('../views/OldCar.vue')
    },
    {
      path: '/oldCarDetail',
      name: 'oldCarDetail',
      component: () => import('../views/OldCarDetail.vue')
    },
    {
      path: '/newCar',
      name: 'newCar',
      component: () => import('../views/NewCar.vue')
    },
    {
      path: '/newCarDetail',
      name: 'newCarDetail',
      component: () => import('../views/NewCarDetail.vue')
    },
    {
      path: '/saleCar',
      name: 'saleCar',
      component: () => import('../views/SaleCar.vue')
    },
    {
      path: '/finance',
      name: 'finance',
      component: () => import('../views/Finance.vue')
    },
    {
      path: '/service',
      name: 'service',
      component: () => import('../views/Service.vue')
    },
    {
      path: '/news',
      name: 'news',
      component: () => import('../views/News.vue')
    },
    {
      path: '/newsDetail',
      name: 'newsDetail',
      component: () => import('../views/NewsDetail.vue')
    },
    {
      path: '/problem',
      name: 'problem',
      component: () => import('../views/Problem.vue')
    },



    {
      path: '*',
      name: 'notFound',
      component: () => import('../views/NotFound.vue')
    },

  ]
})

export default router
