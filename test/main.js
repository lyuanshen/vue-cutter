import Vue from 'vue'
import App from './App.vue'

// 打包测试

import VuePictureCropper from '../dist/index'

Vue.use(VuePictureCropper)

new Vue({
    el: '#app',
    render: h => h(App)
})
