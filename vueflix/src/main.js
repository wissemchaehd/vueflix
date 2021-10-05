import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'

import VueRouter from 'vue-router'
import Admin from './components/Admin'
import Movie from './components/Movie'


Vue.use(VueRouter)
Vue.config.productionTip = false

const routes = [
  {path:'/admin',component: Admin},
  {path: '/movie/:id', name:"movie", component: Movie, props: true}

]


const router = new VueRouter({routes})

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
