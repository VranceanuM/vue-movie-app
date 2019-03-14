import '@babel/polyfill'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import './plugins/axios'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import FingerprintSpinner from './components/global/FingerprintSpinner'

Vue.config.productionTip = false
Vue.component("fingerprint-spinner",FingerprintSpinner)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
