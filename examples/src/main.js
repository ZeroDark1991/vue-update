import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import VueUpdate from '../../index'
import foo from './foo.vue'
import bar from './bar.vue'

Vue.use(VueRouter)
Vue.use(VueUpdate)

const routes = [
  { path: '/foo', component: foo },
  { path: '/bar', component: bar },
  { path: '*', component: foo }
]
const router = new VueRouter({
	routes
})

new Vue({
  el: '#app',
  router: router,
  render: h => h(App)
})
