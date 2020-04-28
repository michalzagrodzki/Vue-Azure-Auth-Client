import Vue from 'vue'
import App from './App.vue'
import api from './api'
import router from './router'

Vue.config.productionTip = false

/** 
 * Method for fetching data from backend
 * 
*/
Vue.prototype.$http = api;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
