import Vue from 'vue'
import App from './App.vue'

import VuePictureCropper from './lib';

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);

Vue.component('vue-picture-cropper',VuePictureCropper)

new Vue({
  el: '#app',
  render: h => h(App)
})
