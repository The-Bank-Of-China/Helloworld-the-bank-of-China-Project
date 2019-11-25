/*
 * @Author: your name
 * @Date: 2019-11-04 19:08:33
 * @LastEditTime: 2019-11-15 23:10:00
 * @LastEditors: 陈晶华
 * @Description: In User Settings Edit
 * @FilePath: \第三阶段d:\Vue-cli\pro\prj\src\router\index.js
 */
import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Index from '@/pages/Index'
import Search from '@/pages/Search'
import Kefu from '@/pages/Kefu'
// import Money from '@/pages/Money'
// import Mypage from '@/pages/Mypage'
import Life from '@/pages/Life'
import News from '@/pages/News'
import Newpage from '@/pages/Newpage'
import Login from '@/pages/Login'
import Registe from '@/pages/Registe'
import Mypage from '@/pages/Mypage'
import User from '@/pages/User'
import Money from '@/pages/Money'
import Count from '@/pages/Count'
import Addcard from '@/pages/Addcard'
import Addauto from '@/pages/Addauto'
import Trade from '@/pages/Trade'
// import Tradepass from '@/pages/Tradepass'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/Index',
      name: 'Index',
      component: Index
    },
    {
      path: '/Search',
      name: 'Search',
      component: Search
    },
    {
      path: '/Kefu',
      name: 'Kefu',
      component: Kefu
    },
    {
      path: '/Life',
      name: 'Life',
      component: Life
    },
    {
      path: '/News',
      name: 'News',
      component: News
    },
    {
      path: '/Newpage',
      name: 'Newpage',
      component: Newpage
    },
    {
      path: '/Registe',
      name: 'Registe',
      component: Registe
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login
    },
    {
      path: '/Mypage',
      name: 'Mypage',
      component: Mypage
    },
    {
      path: '/User',
      name: 'User',
      component: User
    },
    {
      path: '/Money',
      name: 'Money',
      component: Money
    },
    {
      path: '/Count',
      name: 'Count',
      component: Count
    },
    {
      path: '/Addcard',
      name: 'Addcard',
      component: Addcard
    },
    {
      path: '/Addauto',
      name: 'Addauto',
      component: Addauto
    },
    {
      path: '/Trade',
      name: 'Trade',
      component: Trade
    }
  ]
})
