import VuePictureCropper from './vue-picture-cropper'

const install = function(Vue) {
  Vue.component('VuePictureCropper', VuePictureCropper);
};

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default VuePictureCropper
