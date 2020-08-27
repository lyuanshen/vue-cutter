import Vue from 'vue'
import App from './App.vue'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import VuePictureCropper from '../dist/index'

Vue.use(VuePictureCropper);

Vue.use(ElementUI);

new Vue({
  el: '#app',
  render: h => h(App)
});
