import Vue from 'vue'
import App from './App.vue'
import './assets/fonts/index.css'
import VueI18n from 'vue-i18n';

Vue.use(VueI18n);

const i18n = new VueI18n({
  locale: 'zh',
  messages:{
    'zh': require('./assets/languages/zh'),
    'en': require('./assets/languages/en')
  }
});

import { Icon,
  Dropdown,
  DropdownMenu,
  DropdownItem, } from 'element-ui';

Vue.use(Icon).use(Dropdown).use(DropdownItem).use(DropdownMenu)

new Vue({
  el: '#app',
  i18n,
  render: h => h(App)
});
