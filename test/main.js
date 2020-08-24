import Vue from 'vue'
import App from './App.vue'

import VuePictureCropper from '../dist/index'

// Vue.component('vue-picture-cropper',VuePictureCropper)
Vue.use(VuePictureCropper)
new Vue({
    el: '#app',
    render: h => h(App)
})
