import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import axios from 'axios'
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  axios,
  render: h => h(App)
}).$mount('#app')
