import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
// import Admin from './components/Admin'
import VueRouter from 'vue-router'
import Movie from './components/Movie'
import Accueil from './components/Accueil'
import MovieCreation from "@/components/MovieCreation";


Vue.use(VueRouter)
Vue.config.productionTip = false

const routes = [
  {path:'/admin',name:'admin',component: MovieCreation},
  {path: '/movie/:id', name:"movie", component: Movie, props: true},
  { path: '/accueil', name: 'accueil', component: Accueil, props: true},

]


const router = new VueRouter({routes})

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
