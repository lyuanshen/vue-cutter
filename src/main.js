import Vue from 'vue'
import App from './App.vue'

import cropper from './lib';

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);

Vue.use(cropper)

new Vue({
  el: '#app',
  render: h => h(App)
})
