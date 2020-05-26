import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import {store} from './store'
import vuex from 'vuex'
import axios from 'axios'
import router from './router'


Vue.config.productionTip = false
Vue.prototype.$http = axios
Vue.use(vuex)

new Vue({
  router,
  vuetify,
  store,
  vuex,
  axios,
  render: h => h(App)
}).$mount('#app')
