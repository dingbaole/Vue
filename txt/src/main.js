// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import axios from 'axios'


//axios请求拦截器
axios.interceptors.request.use((config)=>{
  store.state.loading = true
  console.log(111)
  return config
})

axios.interceptors.response.use((config)=>{
  store.state.loading = false
  return config
})
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
