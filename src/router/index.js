import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import NotFound from '@/components/pages/404'

import LoginCloud from '@/components/pages/LoginCloud'
import HomeCloud from '@/components/pages/HomeCloud'
import IndexVue from '@/components/pages/homecloud/Index'
import Scenery from '@/components/pages/homecloud/Scenery'
import TerminalMessage from '@/components/pages/homecloud/TerminalMessage'
import EmissionSourceCount from '@/components/pages/homecloud/EmissionSourceCount'
import CodeMachineCount from '@/components/pages/homecloud/CodeMachineCount'
import EmissionSourceLog from '@/components/pages/homecloud/EmissionSourceLog'
import EmissionSource from '@/components/pages/homecloud/EmissionSource'
import PositionVersion from '@/components/pages/homecloud/PositionVersion'
import UpgradeState from '@/components/pages/homecloud/UpgradeState'
import UpgradeLog from '@/components/pages/homecloud/UpgradeLog'
import UserManager from '@/components/pages/homecloud/UserManager'
import RolesManager from '@/components/pages/homecloud/RolesManager'
import TerminalLeaseCount from '@/components/pages/homecloud/TerminalLeaseCount'
import SosCount from '@/components/pages/homecloud/SosCount'
import FenceCount from '@/components/pages/homecloud/FenceCount'
import PassengerFlowCount from '@/components/pages/homecloud/PassengerFlowCount'

Vue.use(Router)


export default new Router({
  routes: [
    {
      path: '/',
      name: 'loginCloud',
      component: LoginCloud
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
    {
        path: '/',
        component: HomeCloud,
        iconCls: 'el-icon-document',
        children: [
            {path: '/scenery', component: Scenery, name: '景区服务商'}
        ]
    },
    {
        path: '/',
        component: HomeCloud,
        iconCls: 'el-icon-document',
        children: [
            {path: '/terminal_Message', component: TerminalMessage, name: '设备信息'}
        ]
    },
    {
        path: '/',
        component: HomeCloud,
        iconCls: 'el-icon-document',
        children: [
            {path: '/emissionsource_count', component: EmissionSourceCount, name: '发射源统计'}
        ]
    },
    {
        path: '/',
        component: HomeCloud,
        iconCls: 'el-icon-document',
        children: [
            {path: '/machinecode_count', component: CodeMachineCount, name: '机器码统计'}
        ]
    },
    {
        path: '/',
        component: HomeCloud,
        iconCls: 'el-icon-document',
        children: [
            {path: '/emissionsource_log', component: EmissionSourceLog, name: '发射源访问日志'}
        ]
    },
    {
        path: '/',
        component: HomeCloud,
        iconCls: 'el-icon-document',
        children: [
            {path: '/emissionsource', component: EmissionSource, name: '发射源'}
        ]
    },
    {
        path: '/',
        component: HomeCloud,
        iconCls: 'el-icon-document',
        children: [
            {path: '/positionversion', component: PositionVersion, name: '位置版'}
        ]
    },
    {
        path: '/',
        component: HomeCloud,
        iconCls: 'el-icon-document',
        children: [
            {path: '/upgrade_state', component: UpgradeState, name: '升级情况'}
        ]
    },
    {
        path: '/',
        component: HomeCloud,
        iconCls: 'el-icon-document',
        children: [
            {path: '/upgrade_log', component: UpgradeLog, name: '升级日志'}
        ]
    },
    {
        path: '/',
        component: HomeCloud,
        iconCls: 'el-icon-document',
        children: [
            {path: '/user_manager', component: UserManager, name: '账号管理'}
        ]
    },{
        path: '/',
        component: HomeCloud,
        iconCls: 'el-icon-document',
        children: [
            {path: '/roles_manager', component: RolesManager, name: '角色管理'}
        ]
    },{
        path: '/',
        component: HomeCloud,
        iconCls: 'el-icon-document',
        children: [
            {path: '/terminal_lease', component: TerminalLeaseCount, name: '设备租赁统计'}
        ]
    },
    {
        path: '/',
        component: HomeCloud,
        iconCls: 'el-icon-document',
        children: [
            {path: '/sos_count', component: SosCount, name: 'SOS统计'}
        ]
    },{
        path: '/',
        component: HomeCloud,
        iconCls: 'el-icon-document',
        children: [
            {path: '/fence_count', component: FenceCount, name: '电子围栏统计'}
        ]
    },
    {
        path: '/',
        component: HomeCloud,
        iconCls: 'el-icon-document',
        children: [
            {path: '/passengerflow_count', component: PassengerFlowCount, name: '客流量统计'}
        ]
    },
    {
      path: '*',
      name: 'NotFound',
      component: NotFound
    },
    
  ]
})
