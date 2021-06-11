import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import vuetify from './plugins/vuetify'

const http = axios.create({
  baseURL:process.env.VUE_APP_API_URL || '/web/api',
  // baseURL:'http://localhost:3000/web/api/'
})
Vue.prototype.$http = http
Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
