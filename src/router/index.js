import Vue from 'vue'
import Router from 'vue-router'
import vueClipboard from 'vue-clipboard2'
import Home from '@/components/Home'
import Index from '@/components/index'
import Interface from '@/components/interface'
import Else from '@/components/else'
import group from '@/components/group/create'
import look from '@/components/interface/look'
import edit from '@/components/interface/edit'
import show from '@/components/interface/show'
import people from '@/components/group/people'
import draft from '@/components/interface/draft'
import recycle from '@/components/interface/recycle'

// 懒加载 当路由被访问时才会加载相应的组件
const Login = resolve => require(['@/components/Login'])

Vue.use(Router)
Vue.use(vueClipboard)

export default new Router({
	// 去掉 路由处的 #
    mode:"history",
  routes: [
    {
      path: '/login',
      name: '登录',
      component: Login
    },
    {
    	path:'/',
    	name:'首页',
    	component:Home,
    	menuShow:true,
    	redirect: '/index',
        leaf:true,
    	iconCls:'fa fa-home',
    	children:[
    		{path:'/index',component:Index,name:'首页',menuShow:true}
    	]
    },
    {
    	path:'/interface',
    	name:'接口',
    	component:Home,
    	menuShow:true,
        leaf:true,
    	iconCls:'fa fa-plug',
    	children:[
    		{path:'/interface/group',component:group,name:'接口',menuShow:true},
        {path:'/interface/look',component:look,name:'接口',menuShow:true},
        {path:'/interface/edit',component:edit,name:'接口',menuShow:true},
        {path:'/interface/show',component:show,name:'接口',menuShow:true},
        {path:'/interface/people',component:people,name:'接口',menuShow:true},
        {path:'/interface/draft',component:draft,name:'接口',menuShow:true},
        {path:'/interface/recycle',component:recycle,name:'接口',menuShow:true}
    	]
    },
    {
    	path:'/else',
    	name:'其他',
    	component:Home,
    	menuShow:true,
        leaf:true,
    	iconCls:'fa fa-desktop',
    	children:[
    		{path:'/else',component:Else,name:'其他',menuShow:true}
    	]
    },
  ]
})
