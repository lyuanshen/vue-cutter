import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import 'element-ui/lib/theme-chalk/index.css';

import VueCutter from 'vue-cutter'
Vue.use(VueCutter)


import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

// app.js
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'




new Vue({
  render: h => h(App),
}).$mount('#app')
