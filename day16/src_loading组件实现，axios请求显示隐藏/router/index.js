import Vue from 'vue'
import Router from 'vue-router'
import List from '@/components/List'
import Shop from '@/components/Shop'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'List',
      component: List
    },
    {
      path: '/shop',
      name: 'Shop',
      component: Shop
    }
  ]
})
