import VuePictureCropper from './vue-picture-cropper'

const install = function(Vue) {
    Vue.component(VuePictureCropper.name, VuePictureCropper);
}

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}

export { VuePictureCropper }

export default {
    version: '1.0.1',
    VuePictureCropper,
    install,
    vuePictureCropper:VuePictureCropper
}


