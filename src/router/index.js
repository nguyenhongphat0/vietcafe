import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/HomePage'
import CafePage from '@/components/CafePage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/cafe',
      name: 'CafePage',
      component: CafePage
    }
  ]
})
