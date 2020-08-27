import VueCutter from './vue-cutter'

const install = function (Vue) {
  Vue.component(VueCutter.name, VueCutter);
}

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export {VueCutter}

export default {
  version: '1.0.2',
  VueCutter,
  install,
  vueCutter: VueCutter
}


