import Vue from 'vue'
import App from './App.vue'
import Router from './route.js'

import VueResourse from 'vue-resource'

Vue.use(VueResourse)

new Vue({
  el: '#app',
  render: h => h(App),
  router: Router
})
