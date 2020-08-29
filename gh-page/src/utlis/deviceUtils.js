class DeviceUtils {
  constructor() {}
  static initDevice() {
    const { body } = document
    const width = body.getBoundingClientRect().width
    if (width >= 992) {
      return 'md'
    }else if (width>= 825 && width < 992) {
      return 'sm'
    }else if (width<825){
      return 'xs'
    }
  }
}

export default DeviceUtils
