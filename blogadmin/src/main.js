import Vue from 'vue'
import App from './App.vue'
import './plugins/element.js'
import http from './network/http.js'
import router from './router/index.js'
Vue.config.productionTip = false

Vue.prototype.$http = http

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
