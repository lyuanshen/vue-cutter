<template>
  <div id="outer">
    <div ref="cutter"
         @mouseover="scaleImage"
         style="cursor: move"
         @mouseout="cancelScale"
         class="container">
      <span class="cropper-container-bg theme"></span>
      <div class="cut-box" >
        <div
          v-if="!app.imgLoading"
          ref="image"
          class="img-container"
          :style="{
          width: image.width + 'px',
          height: image.height + 'px',
          transform: 'scale(' + image.scale + ',' + image.scale + ') '
            + 'translate3d('+ image.offsetX / image.scale + 'px,'
             + image.offsetY / image.scale + 'px,' + '0)'
             + 'rotateZ('+ image.rotate * 90 +'deg)'
        }"
        >
          <img :src="image.url" :alt="image.url">
        </div>
      </div>

      <div class="draw-box"
           :class="image.url === '' ? '': 'cropper-move'"
           v-on:mousedown="imageMove"
           v-on:touchstart="imageMove"
      >
      </div>

      <div
        class="cropper-context"
        :class="['solid', 'dashed'].includes(cropBorder) ? 'cropper-view-box-' + cropBorder : 'cropper-view-box-solid'"
        v-show="app.initCropBox && !app.imgLoading"
        :style="{
          width: cropBox.width + 'px',
          height: cropBox.height + 'px',
          'transform': 'translate3d('+ cropBox.offsetX + 'px,' + cropBox.offsetY + 'px,' + '0)'
        }">

        <span
          class="cropper-view-box-dr cropper-view-box-dr-bg">
        </span>

        <span
          class="cropper-view-box">
          <img
            :style="{
                       width: image.width,
                       height: image.height,
                        transform:'scale(' + image.scale + ',' + image.scale + ') '
                        + 'translate3d('+ (image.offsetX - cropBox.offsetX) / image.scale  + 'px,'
                        + (image.offsetY - cropBox.offsetY) / image.scale + 'px,' + '0)'
                        + 'rotateZ('+ image.rotate * 90 +'deg)'
                   }"
            :src="image.url" :alt="image.url">
        </span>

        <span
          @mousedown="moveCrop"
          @touchstart="moveCrop"
          class="cropper-view-box-dr">
        </span>

        <span class="fixedBox" v-if="canResizeCrop">
          <span class="f fht"
                v-if="fixed === null"
                @mousedown="resizeCropBox($event, false, true, 0, 1,22)">
          </span>
          <span
            v-if="fixed === null"
            @mousedown="resizeCropBox($event, true, false, 2, 0,2)"
            class="f fvr">
          </span>
          <span
            v-if="fixed === null"
            @mousedown="resizeCropBox($event, false, true, 0, 2,3)"
            class="f fhb"></span>
          <span
            v-if="fixed === null"
            @mousedown="resizeCropBox($event, true, false, 1, 0,4)"
            class="f fvl"></span>
          <span
            @mousedown="resizeCropBox($event, true, true, 1, 1,1)"
            class="f dot dot-1"></span>
          <span
            v-if="fixed === null"
            @mousedown="resizeCropBox($event, false, true, 0, 1,6)"
            class="f dot dot-2"></span>
          <span
            @mousedown="resizeCropBox($event, true, true, 2, 1,3)"
            class="f dot dot-3"></span>
          <span
            v-if="fixed === null"
            @mousedown="resizeCropBox($event, true, false, 2, 0,8)"
            class="f dot dot-4"></span>
          <span
            @mousedown="resizeCropBox($event, true, true, 2, 2,1)"
            class="f dot dot-5"></span>
          <span
            v-if="fixed === null"
            @mousedown="resizeCropBox($event, false, true, 0, 2,10)"
            class="f dot dot-6"></span>
          <span
            @mousedown="resizeCropBox($event, true, true, 1, 2,3)"
            class="f dot dot-7"></span>
          <span
            v-if="fixed === null"
            @mousedown="resizeCropBox($event, true, false, 1, 0,12)"
            class="f dot dot-8"></span>
        </span>

        <span class="dividing-line" v-if="cropDividingLine">
          <span class="line line1"></span>
          <span class="line line2"></span>
          <span class="line-1 line3"></span>
          <span class="line-1 line4"></span>
        </span>
      </div>

    </div>
  </div>
</template>

<script>
  import Exif from './exif'

  export default {
    name: "vue-cutter",
    props: {
      // 容器的宽高 单位 ：px, em, %
      containerBounding: {
        type: Array,
        default: () => {
          return ['0', '0']
        }
      },
      src: {
        type: [String, Blob, null, File],
        default: ''
      },
      mode: {
        type: String,
        default: 'contain'
      },
      highQuality: {
        type: Boolean,
        default: true
      },
      // 可以压缩图片宽高  默认不超过2000
      maxImgSize: {
        type: [Number, String],
        default: 2000
      },
      canImgMove: {
        type: Boolean,
        default: true
      },
      boxInImg: {
        type: Boolean,
        default: false
      },
      canScaleImg: {
        type: Boolean,
        default: true
      },
      canCropMove: {
        type: Boolean,
        default: true
      },
      cropBoxBounding: {
        type: [String, Number],
        default: 'auto'
      },
      fixed: {
        type: [Array, String],
        default: () => {
          return null
        }
      },
      canResizeCrop:{
        type: Boolean,
        default: true
      },
      cropBorder: {
        type: String,
        default: 'solid'
      },
      cropDividingLine: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        app: {
          init: false,
          imgLoading: '',
          touches: '',
          support: '',
          touchNow: false,
          initCropBox: false
        },
        image: {
          url: '',
          width: '',
          height: '',
          offsetX: '',
          offsetY: '',
          moveX: '',
          moveY: '',
          //缩放倍数
          scale: '',
          //选装
          rotate: 0,
          orientation: 0,
          imgZF: '0.24',
          imgZFStatus: ''
        },
        cropBox: {
          width: '',
          height: '',
          offsetX: '',
          offsetY: '',
          // first click position offsetLeft
          fcpl: '',
          // first click position offsetTop
          fcpt: '',
        }
      }
    },
    computed: {
      isIE() {
        var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串
        const isIE = !!window.ActiveXObject || 'ActiveXObject' in window; //判断是否IE浏览器
        return isIE;
      },
      getContainerBounding() {
        let obj = {
          width: 0,
          height: 0
        };
        obj.width = parseFloat(window.getComputedStyle(this.$refs.cutter).width);
        obj.height = parseFloat(window.getComputedStyle(this.$refs.cutter).height);
        return obj;
      }
    },
    mounted() {
      this.support = "onwheel" in document.createElement("div")
        ? "wheel"
        : document.onmousewheel !== undefined
          ? "mousewheel"
          : "DOMMouseScroll";

      this.$nextTick(() => {
        this.initApplication().then(() => {
          this.loadImage()
        })
      })
    },
    watch: {
      src() {
        this.loadImage()
      }
    },
    methods: {
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
        return result;
      },

      initApplication() {
        return new Promise((resolve, reject) => {
          const {containerBounding, app} = this;
          let con = document.getElementById('outer');
          con.style.display = 'inline-block';
          let len = containerBounding.length;
          switch (len) {
            case 1:
              con.style.width = containerBounding[0];
              con.style.height = containerBounding[0];
              app.init = true;
              resolve();
              break;
            case 2:
              con.style.width = containerBounding[0];
              con.style.height = containerBounding[1];
              app.init = true;
              resolve();
              break;
            case 0:
              con.style.width = 0;
              con.style.height = 0;
              console.error('containerBounding must be init');
              app.init = false;
              reject();
              break;
            default:
              console.error('containerBounding lenght must be tow');
              app.init = false;
              reject();
          }
        })
      },

      loadImage() {
        const {app, image, src, maxImgSize} = this;
        if (!app.init || src === '' || typeof src === 'undefined') return;
        app.imgLoading = true;
        image.scale = 1;
        image.rotate = 0;
        let img = new Image();
        img.onload = () => {
          let width = img.width;
          let height = img.height;

          Exif.getData(img).then(data => {
            image.orientation = data.orientation || 1;
            let max = maxImgSize;
            if (!this.orientation && (width < max) && (height < max)) {
              image.url = src;
              this.reload();
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

            this.checkOrientationImage(img, image.orientation, width, height)
            this.reload();
          })
        };
        image.onerror = () => {
          this.$emit("imgLoad", "error");
        };
        if (src.substring(0, 4) !== 'data') {
          img.crossOrigin = '';
        }
        if (this.isIE) {
          var xhr = new XMLHttpRequest();
          xhr.onload = () => {
            img.src = URL.createObjectURL(this.response);
          };
          xhr.open("GET", this.img, true);
          xhr.responseType = "blob";
          xhr.send();
        } else {
          img.src = src;
        }
      },

      checkOrientationImage(img, orientation, width, height) {
        // If the chrome kernel version is 81 and safari is above 605, the image rotation will not be processed
        // alert(navigator.userAgent)
        if (this.getVersion('chrome')[0] >= 81) {
          orientation = -1;
        } else {
          if (this.getVersion('safari')[0] >= 605) {
            const safariVersion = this.getVersion('version');
            if (safariVersion[0] > 13 && safariVersion[1] > 1) {
              orientation = -1
            }
          } else {
            //  判断 ios 版本进行处理
            // 针对 ios 版本大于 13.4的系统不做图片旋转
            const isIos = navigator.userAgent.toLowerCase().match(/cpu iphone os (.*?) like mac os/)
            if (isIos) {
              let version = isIos[1];
              version = version.split('_');
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
            this.image.url = data;
          },
          "image/" + this.outputType,
          1
        );
      },

      reload() {
        const {image, app} = this;
        let img = new Image();
        img.src = image.url;
        let bounding = this.getContainerBounding;
        img.onload = () => {
          image.width = img.width;
          image.height = img.height;
          image.rate = image.width / image.height;
          this.dealMode().then(res => {
            image.scale = res;
            this.$nextTick(() => {
              image.offsetX = -(image.width - image.width * image.scale) / 2 + (bounding.width - image.width * image.scale) / 2;
              image.offsetY = -(image.height - image.height * image.scale) / 2 + (bounding.height - image.height * image.scale) / 2;
              this.$emit('imgLoad', 'success');
              app.imgLoading = false;
              this.initCropBox();
            })
          });
        }
      },

      dealMode() {
        const {mode, image} = this;
        let scale = 1;
        let bounding = this.getContainerBounding;
        let imgW = image.width;
        let imgH = image.height;
        const m = mode.split(' ');
        switch (m[0]) {
          case 'original':
            scale = 1;
            break;
          case 'contain' :
            if (image.width > bounding.width) {
              scale = bounding.width / image.width;
            }
            if (image.height * scale > bounding.height) {
              scale = bounding.height / image.height;
            }
            break;
          case 'cover':
            imgW = bounding.width;
            scale = imgW / image.width;
            imgH = image.height * scale;
            if (imgH < bounding.height) {
              imgH = bounding.height;
              scale = imgH / image.height;
            }
            break;
          default:
            try {
              let str = m[0];
              if (str.search('px') !== '-1') {
                str = str.replace("px", "");
                imgW = parseFloat(str);
                scale = imgW / image.width;
              }

              if (str.search("%") !== -1) {
                str = str.replace("%", "");
                imgW = (parseFloat(str) / 100) * bounding.width;
                console.log(imgW)
                scale = imgW / image.width;
              }

              if (m.length === 2 && str === "auto") {
                let str2 = m[1];
                if (str2.search("px") !== -1) {
                  str2 = str2.replace("px", "");
                  imgH = parseFloat(str2);
                  scale = imgH / image.height;
                }
                if (str2.search("%") !== -1) {
                  str2 = str2.replace("%", "");
                  imgH = (parseFloat(str2) / 100) * bounding.height;
                  scale = imgH / image.height;
                }
              }
            } catch (e) {
              scale = 1;
            }
        }
        return new Promise(resolve => {
          resolve(scale)
        })
      },

      imageMove(e) {
        e.preventDefault();
        const {canImgMove, image, app} = this;
        if (!canImgMove) return;
        image.moveX = (e.clientX ? e.clientX : e.touches[0].clientX) - image.offsetX;
        image.moveY = (e.clientY ? e.clientY : e.touches[0].clientY) - image.offsetY;
        if (e.touches) {
          window.addEventListener("touchmove", this.imageMoving);
          window.addEventListener("touchend", this.imageMoved);
          if (e.touches.length === 2) {
            app.touches = e.touches;
            window.addEventListener("touchmove", this.touchScale);
            window.addEventListener("touchend", this.cancelTouchScale);
          }
        } else {
          window.addEventListener("mousemove", this.imageMoving);
          window.addEventListener("mouseup", this.imageMoved);
        }
      },

      imageMoving(e) {
        e.preventDefault();
        if (e.touches && e.touches.length === 2) {
          this.touches = e.touches;
          window.addEventListener("touchmove", this.touchScale);
          window.addEventListener("touchend", this.cancelTouchScale);
          window.removeEventListener("touchmove", this.imageMoving);
          return false;
        }

        const {image, boxInImg, cropBox} = this;


        let nowX = e.clientX ? e.clientX : e.touches[0].clientX;
        let nowY = e.clientY ? e.clientY : e.touches[0].clientY;

        let changeX, changeY;
        changeX = nowX - image.moveX;
        changeY = nowY - image.moveY;

        this.$nextTick(() => {
          if (boxInImg) {
            let axis = this.getImgAxis(changeX, changeY, image.scale);
            let cAxis = this.getCropAxis();
            let imgW = image.width * image.scale;
            let imgH = image.height * image.scale;
            let maxLeft, maxTop, maxRight, maxBottom;
            switch (image.rotate) {
              case 1:
              case -1:
              case 3:
              case -3:
                maxLeft = cropBox.offsetX - (image.width * (1 - image.scale)) / 2 +
                  (imgW - imgH) / 2;
                maxTop = cropBox.offsetY - (image.height * (1 - image.scale)) / 2 +
                  (imgH - imgW) / 2;
                maxRight = maxLeft - imgW + cropBox.width;
                maxBottom = maxTop - imgH + cropBox.height;
                break;
              default:
                maxLeft = cropBox.offsetX - (image.width * (1 - image.scale)) / 2;
                maxTop = cropBox.offsetY - (image.height * (1 - image.scale)) / 2;
                maxRight = maxLeft - imgW + cropBox.width;
                maxBottom = maxTop - imgH + cropBox.height;
            }

            if (axis.x1 >= cAxis.x1) {
              changeX = maxLeft;
            }
            if (axis.x2 <= cAxis.x2) {
              changeX = maxRight;
            }
            if (axis.y1 >= cAxis.y1) {
              changeY = maxTop;
            }
            if (axis.y2 <= cAxis.y2) {
              changeY = maxBottom;
            }

          }
          image.offsetX = changeX;
          image.offsetY = changeY;
          this.$emit('imageMoving', {
            moving: true,
            axis: this.getImgAxis()
          });
        })

      },

      imageMoved(e) {
        e.preventDefault();
        window.removeEventListener("mousemove", this.imageMoving);
        window.removeEventListener("touchmove", this.imageMoving);
        window.removeEventListener("mouseup", this.imageMoved);
        window.removeEventListener("touchend", this.imageMoved);
      },

      scaleImage() {
        if (this.canScaleImg) {
          window.addEventListener(this.support, this.changeSize, this.passive);
        }
      },

      cancelScale() {
        if (this.canScaleImg) {
          window.removeEventListener(this.support, this.changeSize);
        }
      },

      changeSize(e) {
        const {image} = this;
        let scale = image.scale;
        let change = e.deltaY || e.wheelDelta;
        let isFirefox = navigator.userAgent.indexOf("Firefox");
        change = isFirefox > 0 ? change * 30 : change;
        if (this.isIE) {
          change = -change;
        }
        let IZF = image.imgZF;
        IZF =
          IZF / image.width > IZF / image.height
            ? IZF / image.height
            : IZF / image.width;

        let num = IZF * change;
        num < 0
          ? (scale += Math.abs(num))
          : scale > Math.abs(num)
          ? (scale -= Math.abs(num))
          : scale;

        let status = num < 0 ? "add" : "reduce";

        if (status !== image.imgZFStatus) {
          image.imgZFStatus = status;
          image.imgZF = 0.2
        }

        image.imgZF = image.imgZF += 0.01;

        image.scale = scale;
      },

      touchScale(e) {
        e.preventDefault();
        const {image, app} = this;
        let scale = image.scale;
        var oldTouch1 = {
          x: app.touches[0].clientX,
          y: app.touches[0].clientY
        };
        var newTouch1 = {
          x: e.touches[0].clientX,
          y: e.touches[0].clientY
        };

        var oldTouch2 = {
          x: app.touches[1].clientX,
          y: app.touches[1].clientY
        };
        var newTouch2 = {
          x: e.touches[1].clientX,
          y: e.touches[1].clientY
        };
        var oldL = Math.sqrt(
          Math.pow(oldTouch1.x - oldTouch2.x, 2) +
          Math.pow(oldTouch1.y - oldTouch2.y, 2)
        );
        var newL = Math.sqrt(
          Math.pow(newTouch1.x - newTouch2.x, 2) +
          Math.pow(newTouch1.y - newTouch2.y, 2)
        );
        var cha = newL - oldL;
        // 根据图片本身大小 决定每次改变大小的系数, 图片越大系数越小
        // 1px - 0.2
        var coe = 1;
        coe =
          coe / image.width > coe / image.height
            ? coe / image.width
            : coe / image.height;
        coe = coe > 0.1 ? 0.1 : coe;
        var num = coe * cha;
        if (!app.touchNow) {
          app.touchNow = true;
          if (cha > 0) {
            scale += Math.abs(num);
          } else if (cha < 0) {
            scale > Math.abs(num) ? (scale -= Math.abs(num)) : scale;
          }
          app.touches = e.touches;
          setTimeout(() => {
            app.touchNow = false;
          }, 8);

          image.scale = scale;
        }
      },

      cancelTouchScale(e) {
        e.preventDefault();
        window.removeEventListener("touchmove", this.touchScale);
      },

      getImgAxis(x, y, scale) {
        const {image} = this;
        x = x || image.offsetX;
        y = y || image.offsetY;
        scale = scale || image.scale;
        let obj = {
          x1: 0,
          x2: 0,
          y1: 0,
          y2: 0
        };
        let imgW = image.width * image.scale;
        let imgH = image.height * image.scale;
        switch (image.rotate) {
          case 0:
            obj.x1 = x + (image.width * (1 - image.scale)) / 2;
            obj.x2 = obj.x1 + image.width * image.scale;
            obj.y1 = y + (image.height * (1 - image.scale)) / 2;
            obj.y2 = obj.y1 + image.height * image.scale;
            break;
          case 1:
          case -1:
          case 3:
          case -3:
            obj.x1 = x + (image.width * (1 - image.scale)) / 2 + (imgW - imgH) / 2;
            obj.x2 = obj.x1 + image.height * image.scale;
            obj.y1 = y + (image.height * (1 - image.scale)) / 2 + (imgH - imgW) / 2;
            obj.y2 = obj.y1 + image.width * image.scale;
            break;
          default:
            obj.x1 = x + (image.width * (1 - image.scale)) / 2;
            obj.x2 = obj.x1 + image.width * image.scale;
            obj.y1 = y + (image.height * (1 - image.scale)) / 2;
            obj.y2 = obj.y1 + image.height * image.scale;
            break;
        }
        return obj;
      },

      initCropBox(boundary) {
        const {image, cropBoxBounding} = this;
        if (image.url === '' || image.url === null || typeof image.url === 'undefined') return;
        let cropBoxWidth = 0,
          cropBoxHeight = 0;
        let bounding = boundary || cropBoxBounding;
        let boundList = bounding.split(' ')
        if (boundList.length === 1) {
          if (boundList[0] === 'auto') {
            let bounding = this.getContainerBounding
            this.initCropBox(bounding.width * 0.5 + 'px ' + bounding.height * 0.5 + 'px')
            return;
          } else if (boundList[0].search('px') !== -1 || boundList[0].search('%') !== -1) {
            this.initCropBox(boundList[0] + ' ' + boundList[0])
            return;
          } else if (/^\d{1,}$/.test(cbList[0])) {
            this.initCropBox(boundList[0] + 'px ' + boundList[0] + 'px');
            return;
          } else {
            console.error('参数: cropBoxBounding 不符合规范');
            return;
          }
        } else if (boundList.length === 2) {
          let w = boundList[0].replace(/[^0-9]/ig, ""),
            h = boundList[1].replace(/[^0-9]/ig, "");

          if (boundList[0].search('px') !== 'px') {
            cropBoxWidth = w;
            cropBoxHeight = h;
          } else if (boundList[0].search('%') !== -1) {
            let containerBounding = this.getContainerBounding;
            let cw = containerBounding.width,
              ch = containerBounding.height;

            if (w <= cw) {
              cropBoxWidth = cw * w / 100;
            } else {
              cropBoxWidth = cw;
            }

            if (h <= 100) {
              cropBoxHeight = ch * h / 100;
            } else {
              cropBoxHeight = ch;
            }

          } else if (/^\d{1,}$/.test(boundList[0]) && /^\d{1,}$/.test(boundList[1])) {
            this.initCropBox(boundList[0] + 'px ' + boundList[1] + 'px');
            return;
          } else {
            console.error('参数: cropBoxBounding 不符合规范')
            return;
          }
        } else {
          console.error('参数: cropBoxBounding 不符合规范')
          return;
        }
        this.changeCropBox(cropBoxWidth, cropBoxHeight);
      },

      changeCropBox(w, h) {
        const {boxInImg, app, cropBox, fixed, image} = this;
        let rate = 0;
        let bounding = this.getContainerBounding;
        if (fixed !== null) {
          if (fixed === 'auto') {
            rate = image.rate;
          } else {
            rate = fixed[0] / fixed[1];
          }
        } else {
          rate = w / h;
        }

        if (boxInImg) {
          h = w / rate;
          if (w > image.width * image.scale) {
            w = image.width * image.scale;
            h = w / rate;
          }
          if (h > image.height * image.scale) {
            h = image.height * image.scale;
            w = h * rate;
          }
        }

        cropBox.width = parseFloat(w);
        cropBox.height = parseFloat(h);

        cropBox.offsetX = (bounding.width - cropBox.width) / 2;
        cropBox.offsetY = (bounding.height - cropBox.height) / 2;

        app.initCropBox = true;
      },

      getCropAxis() {
        const {cropBox} = this
        let obj = {
          x1: 0,
          x2: 0,
          y1: 0,
          y2: 0
        };
        obj.x1 = cropBox.offsetX;
        obj.y1 = cropBox.offsetY;
        obj.x2 = cropBox.offsetX + cropBox.width;
        obj.y2 = cropBox.offsetY + cropBox.height;
        return obj;
      },

      moveCrop(e) {
        const {canCropMove, cropBox} = this;
        e.preventDefault();
        if (!canCropMove) return;

        if (e.touches && e.touches.length === 2) {
          return false;
        }

        window.addEventListener('mousemove', this.movingCropBox);
        window.addEventListener('mouseup', this.leaveCrop);
        window.addEventListener("touchmove", this.movingCropBox);
        window.addEventListener("touchend", this.leaveCrop);
        let x = e.clientX ? e.clientX : e.touches[0].clientX;
        let y = e.clientY ? e.clientY : e.touches[0].clientY;

        let nowX = x - cropBox.offsetX,
          nowY = y - cropBox.offsetY;

        cropBox.fcpl = nowX;
        cropBox.fcpt = nowY;

      },

      movingCropBox(e) {
        e.preventDefault();
        const {cropBox, image, boxInImg} = this;

        let nowX = 0;
        let nowY = 0;

        if (e) {
          e.preventDefault();
          nowX = e.clientX ? e.clientX : e.touches[0].clientX;
          nowY = e.clientY ? e.clientY : e.touches[0].clientY;
        }

        this.$nextTick(() => {
          let cx, cy;
          let containerBounding = this.getContainerBounding;
          let fw = nowX - cropBox.fcpl;
          let fh = nowY - cropBox.fcpt;

          if (fw <= 0) {
            cx = 0
          } else if (fw + cropBox.width >= containerBounding.width) {
            cx = containerBounding.width - cropBox.width - 1
          } else {
            cx = fw
          }

          if (fh <= 0) {
            cy = 0
          } else if (fh + cropBox.height >= containerBounding.height) {
            cy = containerBounding.height - cropBox.height - 1
          } else {
            cy = fh
          }

          if (boxInImg) {
            let axis = this.getImgAxis();

            if (cx < axis.x1) {
              cx = axis.x1;
            }

            if (cx + cropBox.width > axis.x2) {
              cx = axis.x2 - cropBox.width;
            }


            if (cy < axis.y1) {
              cy = axis.y1;
            }

            if (cy + cropBox.height > axis.y2) {
              cy = axis.y2 - cropBox.height;
            }

          }

          cropBox.offsetX = cx;
          cropBox.offsetY = cy;
        })

      },

      leaveCrop(e) {
        e.preventDefault();
        window.removeEventListener("mousemove", this.movingCropBox);
        window.removeEventListener("mouseup", this.leaveCrop);
        window.removeEventListener("touchmove", this.movingCropBox);
        window.removeEventListener("touchend", this.leaveCrop);
      },

      resizeCropBox(e, w, h, typeW, typeH, dot) {

      }
    }
  }
</script>

<style scoped lang="sass">
  @import "./styles/index"
</style>
