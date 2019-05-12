import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Dashboard from '@/components/Dashboard'
import ForeachController from '@/components/controller/ForeachController'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/helloworld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/dashboard',
      name: "Dashboard",
      component: Dashboard
    },
    {
      path: '/controller/ForeachController',
      name: "ForeachController",
      component: ForeachController
    }
  ]
})
