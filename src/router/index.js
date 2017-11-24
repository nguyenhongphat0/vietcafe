import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/pages/HomePage'
import CafePage from '@/components/pages/CafePage'
import InfoPage from '@/components/pages/InfoPage';

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
    },
    {
      path: '/info',
      name: 'InfoPage',
      component: InfoPage
    }
  ]
})
