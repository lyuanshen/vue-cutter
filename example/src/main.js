import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import VueCutter from 'vue-cutter'
Vue.use(VueCutter)

import { Button, Container, Header, Aside, Main, Row, Col } from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(Button).use(Container).use(Header).use(Aside).use(Main)
  .use(Row).use(Col)

Vue.prototype.$ELEMENT = { size: 'mini', zIndex: 3000 };


new Vue({
  render: h => h(App),
}).$mount('#app')
