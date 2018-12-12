import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

import LoginCloud from '@/components/pages/LoginCloud'
import HomeCloud from '@/components/pages/HomeCloud'
import IndexVue from '@/components/pages/homecloud/Index'

Vue.use(Router)


export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/loginCloud',
      name: 'LoginCloud',
      component: LoginCloud
    },
    {
      path: '/homeCloud',
      name: 'HomeCloud',
      component: HomeCloud
    },
    {
        path: '/',
        component: HomeCloud,
        iconCls: 'el-icon-document',
        children: [
            {path: '/showIndex', component: IndexVue, name: '首页'}
        ]
    },
  ]
})
