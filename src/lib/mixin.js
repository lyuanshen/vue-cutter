export default {
  computed: {
    isIE() {
      var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串
      const isIE = !!window.ActiveXObject || 'ActiveXObject' in window; //判断是否IE浏览器
      return isIE;
    },

    passive () {
      return this.isIE ? null : {
        passive: false
      }
    }
  },
  methods: {
    getVersion (name) {
      var arr = navigator.userAgent.split(' ');
      var chromeVersion = '';
      let result = 0;
      const reg = new RegExp(name, 'i')
      for(var i=0;i < arr.length;i++){
        if(reg.test(arr[i]))
          chromeVersion = arr[i]
      }
      if(chromeVersion){
        result = chromeVersion.split('/')[1].split('.');
      } else {
        result = ['0', '0', '0'];
      }
      return result
    },

    checkOrientationImage(img, orientation, width, height) {
      // 如果是 chrome内核版本在81 safari 在 605 以上不处理图片旋转
      // alert(navigator.userAgent)
      if (this.getVersion('chrome')[0] >= 81) {
        orientation = -1
      } else {
        if (this.getVersion('safari')[0] >= 605 ) {
          const safariVersion = this.getVersion('version')
          if (safariVersion[0] > 13 && safariVersion[1] > 1) {
            orientation = -1
          }
        } else {
          //  判断 ios 版本进行处理
          // 针对 ios 版本大于 13.4的系统不做图片旋转
          const isIos  = navigator.userAgent.toLowerCase().match(/cpu iphone os (.*?) like mac os/)
          if (isIos) {
            let version = isIos[1]
            version = version.split('_')
            if (version[0] > 13 ||  (version[0] >= 13 && version[1] >= 4)) {
              orientation = -1
            }
          }
        }
      }

      // alert(`当前处理的orientation${orientation}`)
      let canvas = document.createElement("canvas");
      let ctx = canvas.getContext("2d");
      ctx.save();

      switch (orientation) {
        case 2:
          canvas.width = width;
          canvas.height = height;
          // horizontal flip
          ctx.translate(width, 0);
          ctx.scale(-1, 1);
          break;
        case 3:
          canvas.width = width;
          canvas.height = height;
          //180 graus
          ctx.translate(width / 2, height / 2);
          ctx.rotate((180 * Math.PI) / 180);
          ctx.translate(-width / 2, -height / 2);
          break;
        case 4:
          canvas.width = width;
          canvas.height = height;
          // vertical flip
          ctx.translate(0, height);
          ctx.scale(1, -1);
          break;
        case 5:
          // vertical flip + 90 rotate right
          canvas.height = width;
          canvas.width = height;
          ctx.rotate(0.5 * Math.PI);
          ctx.scale(1, -1);
          break;
        case 6:
          canvas.width = height;
          canvas.height = width;
          //90 graus
          ctx.translate(height / 2, width / 2);
          ctx.rotate((90 * Math.PI) / 180);
          ctx.translate(-width / 2, -height / 2);
          break;
        case 7:
          // horizontal flip + 90 rotate right
          canvas.height = width;
          canvas.width = height;
          ctx.rotate(0.5 * Math.PI);
          ctx.translate(width, -height);
          ctx.scale(-1, 1);
          break;
        case 8:
          canvas.height = width;
          canvas.width = height;
          //-90 graus
          ctx.translate(height / 2, width / 2);
          ctx.rotate((-90 * Math.PI) / 180);
          ctx.translate(-width / 2, -height / 2);
          break;
        default:
          canvas.width = width;
          canvas.height = height;
      }

      ctx.drawImage(img, 0, 0, width, height);
      ctx.restore();
      canvas.toBlob(
        blob => {
          let data = URL.createObjectURL(blob);
          URL.revokeObjectURL(this.imgs)
          this.image.url = data;
        },
        "image/" + this.outputType,
        1
      );
    }
  }
}
