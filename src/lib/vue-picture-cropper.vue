<template>
  <div
    class="container"
    ref="cropper"
    :style="{
        width: typeof containerWidth !== 'undefined' ? containerWidth + 'px' : containerHeight + 'px' ,
        height: typeof containerHeight === 'undefined' ? containerWidth + 'px' : containerHeight + 'px' }"
  >
    <div
      class="cropper-container theme"
      :class="themes.indexOf(theme) !== -1 ? 'theme-' + theme : 'theme-dark'"
    >
      <div class="cropper-box" v-if="showImg">
        <div
          class="cropper-box-canvas"
          v-show="!loading"
          :style="{
            width: sourceImageData.width + 'px',
            height: sourceImageData.height + 'px',
            transform: 'scale(' + sourceImageData.scale + ',' + sourceImageData.scale + ') '
            + 'translate3d('+ sourceImageData.x / sourceImageData.scale + 'px,'
             + sourceImageData.y / sourceImageData.scale + 'px,' + '0)'
             + 'rotateZ('+ sourceImageData.rotate * 90 +'deg)'
          }"
        >
          <img :src="showImg" alt="">
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  import Exif from './exif-js-min'

  export default {
    name: "vue-picture-cropper",
    props: {
      containerWidth: {
        type: Number
      },
      containerHeight: {
        type: Number
      },
      theme: {
        type: String,
        default: 'dark'
      },
      image: {
        type: [String, Blob, null, File],
        default: ''
      },
      mode: {
        type: String,
        default: 'contain'
      },
      // 可以压缩图片宽高  默认不超过200
      maxImgSize: {
        type: [Number, String],
        default: 2000
      },
      outputType: {
        type: String,
        default: 'png'
      },
      original: {
        type: Boolean,
        default: false
      },
      canScale: {
        type: Boolean,
        default: true
      }
    },
    data() {
      return {
        themes: ['dark', 'warm', 'pink'],
        modes: ['contain', 'cover', 'auto'],
        cropperContainer: {
          width: '',
          height: '',
        },
        showImg: '',
        // 图片加载
        loading: true,
        rotate: 0,

        // 图片信息
        sourceImageData: {
          width: '',
          height: '',
          //缩放倍数
          scale: '',
          //选装
          rotate: '',
          // 横坐标
          x: '',
          // 纵坐标
          y: '',
          orientation: 0
        }
      }
    },
    computed: {
      isIE() {
        var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串
        const isIE = !!window.ActiveXObject || 'ActiveXObject' in window; //判断是否IE浏览器
        return isIE;
      }
    },
    watch: {
      showImg(val) {
        if (val === '' || val === null) {
          return
        }
        this.reload()
      }
    },
    mounted() {
      this.checkedImg()
    },
    methods: {
      //checkout pic
      checkedImg() {
        if (this.image === null || this.image === '') {
          this.image = '';
          return
        }
        this.loading = true;
        this.sourceImageData.scale = 1;
        this.rotate = 0;
        let img = new Image();
        img.onload = () => {
          if (this.image === '') {
            // something will be do
            return
          }
          const {sourceImageData} = this;

          let width = img.width;
          let height = img.height;

          Exif.getData(img).then(data => {
            sourceImageData.orientation = data.orientation || 1;
            let max = this.maxImgSize;
            if (!this.orientation && (width < max) & (height < max)) {
              this.showImg = this.image;
              return;
            }

            if (width > max) {
              height = (height / width) * max;
              width = max;
            }

            if (height > max) {
              width = (width / height) * max;
              height = max;
            }
            this.checkOrientationImage(img, sourceImageData.orientation, width, height);
          })
        };
        img.onerror = () => {
          // something will be do
          return;
        };
        // 判断如果不是base64图片 再添加crossOrigin属性，否则会导致iOS低版本(10.2)无法显示图片
        if (this.image.substring(0, 4) !== "data") {
          img.crossOrigin = "";
        }
        if (this.isIE) {
          var xhr = new XMLHttpRequest();
          xhr.onload = function () {
            var url = URL.createObjectURL(this.response);
            img.src = url;
          };
          xhr.open("GET", this.img, true);
          xhr.responseType = "blob";
          xhr.send();
        } else {
          img.src = this.image;
        }
      },

      checkOrientationImage(img, orientation, width, height) {
        // If the chrome kernel version is 81 and safari is above 605, the image rotation will not be processed
        // alert(navigator.userAgent)
        if (this.getVersion('chrome')[0] >= 81) {
          orientation = -1;
        } else {
          if (this.getVersion('safari')[0] >= 605) {
            const safariVersion = this.getVersion('version')
            if (safariVersion[0] > 13 && safariVersion[1] > 1) {
              orientation = -1
            }
          } else {
            //  判断 ios 版本进行处理
            // 针对 ios 版本大于 13.4的系统不做图片旋转
            const isIos = navigator.userAgent.toLowerCase().match(/cpu iphone os (.*?) like mac os/)
            if (isIos) {
              let version = isIos[1]
              version = version.split('_')
              if (version[0] > 13 || (version[0] >= 13 && version[1] >= 4)) {
                orientation = -1
              }
            }
          }
        }

        let canvas = document.createElement("canvas");
        let ctx = canvas.getContext("2d");
        ctx.save();

        switch (orientation) {
          case 2 :
            canvas.width = width;
            canvas.height = height;
            // horizontal flip
            ctx.translate(width, 0);
            ctx.scale(-1, 1);
            break;
          case 3 :
            canvas.width = width;
            canvas.height = height;
            //180 graus
            ctx.translate(width / 2, height / 2);
            ctx.rotate((180 * Math.PI) / 180);
            ctx.translate(-width / 2, -height / 2);
            break;
          case 4 :
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
        canvas.toBlob(blob => {
            let data = URL.createObjectURL(blob);
            URL.revokeObjectURL(this.imgs)
            this.showImg = data;
          },
          "image/" + this.outputType,
          1
        );

      },

      getVersion(name) {
        var arr = navigator.userAgent.split(' ');
        var chromeVersion = '';
        let result = 0;
        const reg = new RegExp(name, 'i')
        for (var i = 0; i < arr.length; i++) {
          if (reg.test(arr[i]))
            chromeVersion = arr[i]
        }
        if (chromeVersion) {
          result = chromeVersion.split('/')[1].split('.');
        } else {
          result = ['0', '0', '0'];
        }
        return result
      },

      //  reload picture layout function
      reload() {
        let img = new Image();
        img.src = this.showImg;
        img.onload = () => {
          const {cropperContainer, sourceImageData} = this;

          cropperContainer.width = parseFloat(window.getComputedStyle(this.$refs.cropper).width);
          cropperContainer.height = parseFloat(window.getComputedStyle(this.$refs.cropper).height);

          sourceImageData.width = img.width;
          sourceImageData.height = img.height;

          if (!this.original) {
            sourceImageData.scale = this.dealMode();
          } else {
            sourceImageData.scale = 1;
          }

          this.$nextTick(() => {
            sourceImageData.x = - (sourceImageData.width - sourceImageData.width * sourceImageData.scale)/2 +
              (cropperContainer.width - sourceImageData.width * sourceImageData.scale) / 2;
            sourceImageData.y = - (sourceImageData.height - sourceImageData.height * sourceImageData.scale)/2 +
              (cropperContainer.height - sourceImageData.height * sourceImageData.scale) / 2;
            this.loading = false;

          })
        }
      },

      dealMode() {
        const {mode, modes, sourceImageData, cropperContainer} = this
        let scale = 1;
        let md = '';
        let imgWidth = sourceImageData.width,
          imgHeight = sourceImageData.height;
        let contWidth = cropperContainer.width,
          contHeight = cropperContainer.height;
        md = modes.find(element => element === mode)
        if (typeof md === 'undefined') {
          md = mode.split(' ')
        }

        switch (md) {
          case 'contain':
            if (imgWidth > contWidth) {
              scale = contWidth / imgWidth;
            }

            if (imgHeight > contHeight) {
              scale = contHeight / imgHeight;
            }

            break;
          case 'cover' :
            // 扩展布局 默认填充满整个容器
            // 图片宽度大于容器
            scale = contWidth / imgWidth;
            let h = imgHeight * scale;
            if (h < contHeight) {
              h = contHeight;
              scale = h / imgHeight;
            }
            break;
          default:
            try {
              let str = md[0];
              if (str.search('px') !== -1) {
                str.replace('px', '');
                scale = parseFloat(str) / imgWidth;
              }

              if (str.search('%') !== -1) {
                str = str.replace("%", "");
                scale = ((parseFloat(str) / 100) * contWidth) / imgWidth;
              }

            } catch (e) {
              scale = 1;
            }
        }
        return scale;
      },

      scaleImage(){

      }

    }
  }
</script>

<style scoped lang="sass">
  @import "./styles/index"
</style>
