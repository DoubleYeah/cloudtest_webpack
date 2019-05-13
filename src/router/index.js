import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Dashboard from '@/components/Dashboard'
import ForeachController from '@/components/controller/ForeachController'
import TestPlan from '@/components/plan/TestPlan'
import ThreadGroup from '@/components/threads/ThreadGroup'
import UserDefinedConfig from '@/components/configelement/UserDefinedConfig'
import CsvDataSetConfig from '@/components/configelement/CsvDataSetConfig'

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
    },
    {
      path: '/plan/TestPlan',
      name: "TestPlan",
      component: TestPlan
    },{
      path: '/threads/ThreadGroup',
      name: "ThreadGroup",
      component: ThreadGroup
    }
    ,{
      path: '/configelement/UserDefinedConfig',
      name: "UserDefinedConfig",
      component: UserDefinedConfig
    },{
      path: '/configelement/CsvDataSetConfig',
      name: "CsvDataSetConfig",
      component: CsvDataSetConfig
    }
  ]
})
