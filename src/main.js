import Vue from 'vue'
import App from './App.vue'

import VuePictureCropper from './lib'

Vue.component('vue-picture-cropper',VuePictureCropper)

new Vue({
  el: '#app',
  render: h => h(App)
})
