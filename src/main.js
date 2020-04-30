import Vue from 'vue'
import App from './App.vue'
import api from './api'
import router from './router'

Vue.config.productionTip = false

/* Create default values for session storage */
if (!sessionStorage.access) { sessionStorage.access = '' }
if (!sessionStorage.refresh) { sessionStorage.refresh = '' }

/** 
 * Method for fetching data from backend
 * 
*/
Vue.prototype.$http = api;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
