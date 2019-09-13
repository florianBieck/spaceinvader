import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: () => import('./views/Login.vue'),
      meta: {
        layout: 'none',
        requiresAuth: false
      }
    },
    {
      path: '/logout',
      name: 'Logout',
      component: () => import('./views/Logout.vue'),
      meta: {
        layout: 'none',
        requiresAuth: false
      }
    },
    {
      path: '/register',
      name: 'Register',
      component: () => import('./views/Register.vue'),
      meta: {
        layout: 'none',
        requiresAuth: false
      }
    },
    {
      path: '/registerverify',
      name: 'RegisterVerify',
      component: () => import('./views/RegisterVerify.vue'),
      meta: {
        layout: 'none',
        requiresAuth: false
      }
    },
    {
      path: '/',
      name: 'Home',
      component: () => import('./views/Home.vue'),
      meta: {
        layout: 'default',
        requiresAuth: true
      }
    },
    {
      path: '/game',
      name: 'Game',
      component: () => import('./views/Game.vue'),
      meta: {
        layout: 'default',
        requiresAuth: true
      }
    },
    {
      path: '/highscore',
      name: 'Highscore',
      component: () => import('./views/Highscore.vue'),
      meta: {
        layout: 'default',
        requiresAuth: true
      }
    }
  ]
})
