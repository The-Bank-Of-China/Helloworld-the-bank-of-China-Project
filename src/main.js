/*
 * @Author: 陈晶华
 * @Date: 2019-11-04 19:08:33
 * @LastEditors: 陈晶华
 * @LastEditTime: 2019-11-14 19:14:47
 * @Description: 
 */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from './store'
import router from './router'

import './font/iconfont.css'
import 'element-ui/lib/theme-chalk/index.css'
import ElementUI from 'element-ui';

Vue.use(ElementUI);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
