import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import routerConfig from './router'

/* eslint-disable no-new */
Vue.config.debug = true
Vue.use(VueRouter)

const router = new VueRouter({
  hashbang: true,
  history: true,
  saveScrollPosition: true,
  suppressTransitionError: true
})

routerConfig(router);
router.start(App, '#app')
router.go({path:"/"})

window.router = router