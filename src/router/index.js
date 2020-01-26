/* eslint-disable */
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import Router from 'vue-router'
import index from '@/components/index'
import new_topict from '@/components/new_topict'
import that from '@/components/that'
import where from '@/components/where'
//import result from '@/components/rresult'

Vue.use(Router)
Vue.use(BootstrapVue)

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

export default new Router({
	mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
		{
      path: '/new',
      name: 'new_topict',
      component: new_topict,
    },
		{
      path: '/new/that',
      name: 'that',
      component: that,
    },
		{
      path: '/new/where',
      name: 'where',
      component: where,
    },
	//	{
	//		path: '/result',
	//		name: 'result',
	//		component: result
	//	}
  ]
})
