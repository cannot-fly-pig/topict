/* eslint-disable */
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import Router from 'vue-router'
import HelloWorld from '@/components/index'

Vue.use(Router)
Vue.use(BootstrapVue)

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: HelloWorld
    }
  ]
})
