import Vue from 'vue'
import App from './App.vue'

// 打包测试

import VueCutter from '../dist/index'

Vue.use(VueCutter)

new Vue({
    el: '#app',
    render: h => h(App)
})
