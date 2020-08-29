import Vue from 'vue'
import App from './App.vue'
import store from './store'
import './assets/fonts/index.css'
import VueI18n from 'vue-i18n';

Vue.use(VueI18n);

const i18n = new VueI18n({
  locale: store.getters.lang,
  messages:{
    'zh': require('./assets/languages/zh'),
    'en': require('./assets/languages/en')
  }
});

import { Icon,
  Dropdown,
  DropdownMenu,
  Drawer,
  DropdownItem, } from 'element-ui';

Vue.use(Icon).use(Dropdown).use(DropdownItem).use(DropdownMenu).use(Drawer)

new Vue({
  el: '#app',
  store,
  i18n,
  render: h => h(App)
});
