import Vue from 'vue'
import App from './App.vue'

import cropper from './lib';


import Vconsole from 'vconsole';
new Vconsole();

Vue.use(cropper)

new Vue({
  el: '#app',
  render: h => h(App)
})
