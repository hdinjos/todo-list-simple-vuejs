import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/address',
    name: 'address',
    component: () => import(/* webpackChunkName: "address" */ '../views/Address'),
    children: [
      {
        path:'addressone',
        name: 'addressone',
        component: () => import(/* webpackChunkName: "addressone" */ '@/views/addrress/addressOne')
      },
      {
        path:'addresstwo',
        name: 'addresstwo',
        component: () => import(/* webpackChunkName: "addresstwo" */ '@/views/addrress/addressTwo')
      }
    ]
  },
  {
    path:'/:name',
    name: 'id',
    component: () => import(/* webpackChunkName: "id" */ '@/views/RouterParam')
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
