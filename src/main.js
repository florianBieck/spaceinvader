import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import firebase from 'firebase'

Vue.component('default-layout', () => import('./layouts/LayoutDefault.vue'))
Vue.component('none-layout', () => import('./layouts/LayoutNone.vue'))

Vue.config.productionTip = false

// Initialize Firebase
const firebaseConfig = {
  apiKey: 'AIzaSyDqGy9gyxxPoO3PS098WEdW5eRDJ82jfKM',
  authDomain: 'spaceinvader-6da00.firebaseapp.com',
  databaseURL: 'https://spaceinvader-6da00.firebaseio.com',
  projectId: 'spaceinvader-6da00',
  storageBucket: 'spaceinvader-6da00.appspot.com',
  messagingSenderId: '241099133401',
  appId: '1:241099133401:web:b856d4547c029aaa'
}
firebase.initializeApp(firebaseConfig)

router.beforeEach((to, from, next) => {
  /* firebase.auth().onAuthStateChanged(user => {
    if (to.matched.some(record => record.meta.requiresAuth) && !user) {
      store.commit('clearFirestoreListeners')
      next({ name: 'Login' })
    } else {
      next()
    }
  }) */
  next()
})

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
