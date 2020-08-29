import store from '@/store'

const { body } = document

export default {
  beforeMount() {
    window.addEventListener('resize', this.$_resizeHandler)
  },
  methods: {
    $_resizeHandler() {
      if (!document.hidden) {
        const rect = body.getBoundingClientRect()
        const width = rect.width;
        if (width >= 992){
          store.dispatch('app/toggleDevice','md')
        }else if (width < 992 && width >= 825) {
          store.dispatch('app/toggleDevice','sm')
        }else if (width <= 825){
          store.dispatch('app/toggleDevice','xs')
        }
      }
    }
  }
}
