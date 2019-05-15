import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify'
import BootstrapVue from 'bootstrap-vue'
import VuetifyToast from 'vuetify-toast-snackbar'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

require('vuetify/dist/vuetify.min.css')

Vue.use(BootstrapVue)
Vue.use(Vuetify)

Vue.use(VuetifyToast, {
  x: 'center', // default
  y: 'bottom', // default
  color: '#292929', // default
  icon: 'Tset',
  timeout: 3000, // default
  dismissable: true, // default
  autoHeight: false, // default
  multiLine: false, // default
  vertical: false, // default
  shorts: {
    Success: {
      color: 'green'
    },
    Error: {
      color: 'red'
    }
  },
  property: '$toast' // default
})

new Vue({
  render: h => h(App),
}).$mount('#app')
