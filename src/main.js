import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import RouterConfig from './router.config'
import store from './store/index'
import axios from 'axios'
require('./assets/css/base.css')
Vue.use(VueRouter)

import filters from './filters/index'
Object.keys(filters).forEach(function (key) {
  Vue.filter(key, filters[key]);
})

axios.defaults.timeout = 5000; //响应时间
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'; //配置请求头
axios.defaults.baseURL = '/';

axios.interceptors.request.use((config) => {
  //在发送请求之前做某件事
  store.commit('showLoading');
  return config;
}, (error) => {
  return Promise.reject(error);
});

//返回状态判断(添加响应拦截器)
axios.interceptors.response.use((res) => {
  store.commit('hideLoading');
  return res;
}, (error) => {
  return Promise.reject(error);
});

//axios的一些配置，比如发送请求显示loading，请求回来loading消失之类的
//
// axios.interceptors.request.use(function (config) { //配置发送请求的信息
//   store.commit('showLoading');
//   return config;
// }, function (error) {
//   return Promise.reject(error);
// });

// axios.interceptors.response.use(function (response) { //配置请求回来的信息
//   store.commit('hideLoading');
//   return response;
// }, function (error) {

//   return Promise.reject(error);
// });

Vue.prototype.$http = axios;

const router = new VueRouter({
  mode: 'history',
  scrollBehavior: () => ({
    y: 0
  }), // 滚动条滚动的行为，不加这个默认就会记忆原来滚动条的位置
  routes: RouterConfig
})
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})