import Vue from 'vue'
import Router from 'vue-router'
import Admin from '@/admin'
import Message from '../client/message/message'
import Index from '../client/index/index'
import Application from '../client/application/application'
import Inbox from '../client/inbox/inbox'
import Sent from '../client/index/sent'
import Await from '../client/index/await'
import NotFind from '../client/notfind'
Vue.use(Router);


const router = new Router({
  routes: [
  	{
  		path:'',
  		name:'admin',
  		component:Admin,
      content:true,
      children:[
        {
          path:'index',name:'index',tabs:'首页',component:Index,
          children:[
            {path:'inbox',name:'index',tabs:'收件箱',component:Application},
            {path:'flag',name:'index',tabs:'红旗邮件',component:Inbox},
            {path:'await',name:'await_mail',tabs:'代办邮箱',component:Await},
            {path:'sent',name:'sent',tabs:'已发送邮箱',component:Sent}
          ]
        },
        {path:'/message',name:'message',tabs:'通讯录',component:Message},
        {path:'/application',name:'message',tabs:'应用中心',component:Application},
        {path:'/inbox',name:'message',tabs:'收件箱',component:Inbox},
      ]
  	},
    {
      path:'*',
      name:'notFind',
      component:NotFind
    }
  ]
});
export default router;
