import Vue from 'vue'
import Router from 'vue-router'
import list from '@/components/list'
import Detail from '@/components/Detail'

Vue.use(Router)

// 解决多少点击报错问题
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

export default new Router({
  routes: [
    {
      path: '/',
      name: 'list',
      component: list
    },
    {
      path: '/Detail',
      name: 'list',
      component: Detail
    },
  ]
})
