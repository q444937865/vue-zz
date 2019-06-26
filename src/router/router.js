import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/home/home.vue'
import page from '../pages/page1/page1.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },{
      path: '/page',
      name: 'page',
      component: page
    },
  ]
})
