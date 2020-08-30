import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import './assets/fonts/index.css'
import VueI18n from 'vue-i18n';
import './icons'

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
  Tooltip,
  Menu,
  MenuItem,
  MenuItemGroup,
  Submenu,
  Button,
  Row,
  Col,
  Drawer,
  DropdownItem, } from 'element-ui';

Vue.use(Icon)
  .use(Row)
  .use(Col)
  .use(Button)
  .use(Submenu)
  .use(Menu)
  .use(MenuItem)
  .use(MenuItemGroup)
  .use(Tooltip)
  .use(Dropdown)
  .use(DropdownItem)
  .use(DropdownMenu)
  .use(Drawer)

new Vue({
  el: '#app',
  store,
  router,
  i18n,
  render: h => h(App)
});
