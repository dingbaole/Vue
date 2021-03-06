import Vue from 'vue'
import Router from 'vue-router'
import list from '@/components/list'
import shop from '@/components/shop'

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
      name: 'HelloWorld',
      redirect:'/list'
    },
    {
      path:'/list',
      name:'list',
      component:list
    },
    {
      path:'/shop',
      name:'shop',
      component:shop
    }
  ]
})
