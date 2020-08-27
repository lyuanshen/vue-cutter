<template>
  <div
    class="container"
    ref="cropper"
    @mouseover="scaleImage"
    @mouseout="cancelScale"
    :style="{
        width: typeof containerWidth !== 'undefined' ? containerWidth + 'px' : containerHeight + 'px' ,
        height: typeof containerHeight === 'undefined' ? containerWidth + 'px' : containerHeight + 'px' }"
  >
    <div
      class="cropper-container theme"
    >
      <input type="file"
             class="addImage"
             id="addFile"
             @change="addImageChange"
             ref="add">
      <span class="cropper-container-bg"
            :class="themes.indexOf(theme) !== -1 ? 'theme-' + theme : 'theme-dark'"></span>
      <div class="cropper-box" v-if="showImg">
        <div
          class="cropper-box-canvas"
          ref="image"
          v-if="!loading"
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
      <div
        @mousedown="moveImage"
        class="cropper-drag-box cropper-move">
      </div>
      <div
        class="cropper-context"
        v-show="!loading && cropperBox.ready"
        :style="{
        width: cropperBox.width + 'px',
        height: cropperBox.height + 'px',
        'transform': 'translate3d('+ cropperBox.x + 'px,' + cropperBox.y + 'px,' + '0)'
        }"
      >
        <span
          class="cropper-view-box">
          <img
            :style="{
            width: sourceImageData.width,
            height: sourceImageData.height,
            transform:'scale(' + sourceImageData.scale + ',' + sourceImageData.scale + ') '
            + 'translate3d('+ (sourceImageData.x - cropperBox.x) / sourceImageData.scale  + 'px,'
            + (sourceImageData.y - cropperBox.y) / sourceImageData.scale + 'px,' + '0)'
						+ 'rotateZ('+ sourceImageData.rotate * 90 +'deg)'
            }"
            :src="showImg" alt="">
        </span>

        <span
          @mousedown="moveCrop"
          class="cropper-view-box-dr cropper-view-box-dr-bg">
        </span>

        <div class="fixedBox" v-if="!fixedBox && showImg">
          <span class="f fht"
                @mousedown="resizeCropBox($event, false, true, 0, 1,22)"
          ></span>
          <span
            @mousedown="resizeCropBox($event, true, false, 2, 0,2)"
            class="f fvr"></span>
          <span
            @mousedown="resizeCropBox($event, false, true, 0, 2,3)"
            class="f fhb"></span>
          <span
            @mousedown="resizeCropBox($event, true, false, 1, 0,4)"
            class="f fvl"></span>
          <span
            @mousedown="resizeCropBox($event, true, true, 1, 1,1)"
            class="f dot dot-1"></span>
          <span
            @mousedown="resizeCropBox($event, false, true, 0, 1,6)"
            class="f dot dot-2"></span>
          <span
            @mousedown="resizeCropBox($event, true, true, 2, 1,3)"
            class="f dot dot-3"></span>
          <span
            @mousedown="resizeCropBox($event, true, false, 2, 0,8)"
            class="f dot dot-4"></span>
          <span
            @mousedown="resizeCropBox($event, true, true, 2, 2,1)"
            class="f dot dot-5"></span>
          <span
            @mousedown="resizeCropBox($event, false, true, 0, 2,10)"
            class="f dot dot-6"></span>
          <span
            @mousedown="resizeCropBox($event, true, true, 1, 2,3)"
            class="f dot dot-7"></span>
          <span
            @mousedown="resizeCropBox($event, true, false, 1, 0,12)"
            class="f dot dot-8"></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Exif from './exif-js-min'

  export default {
    name: "vue-cutter",
    props: {
      // 容器宽度
      containerWidth: {
        type: Number
      },
      // 容器高度
      containerHeight: {
        type: Number
      },
      //容器背景主题
      theme: {
        type: String,
        default: 'dark'
      },
      // 需裁剪的图片
      image: {
        type: [String, Blob, null, File],
        default: ''
      },
      //图片布局模式
      mode: {
        type: String,
        default: 'contain'
      },
      // 可以压缩图片宽高  默认不超过200
      maxImgSize: {
        type: [Number, String],
        default: 2000
      },
      //输出图片格式
      outputType: {
        type: String,
        default: 'png'
      },
      original: {
        type: Boolean,
        default: false
      },
      //图片是否缩放
      canScale: {
        type: Boolean,
        default: true
      },
      cropCanOverImageBorder: {
        type: Boolean,
        default: true
      },
      //是否能移动图片
      canMoveImage: {
        type: Boolean,
        default: true
      },
      //裁剪框宽高
      cropBoxBoundary: {
        type: [String, Number],
        default: 'auto'
      },
      // 是否开启固定宽高比
      fixed: {
        type: Boolean,
        default: false
      },
      // 宽高比 w/h
      fixedNumber: {
        type: Array
      },
      // 固定大小 禁止改变截图框大小
      fixedBox: {
        type: Boolean,
        default: false
      },
      //是否能移动裁剪框
      canMoveCropBox: {
        type: Boolean,
        default: true
      },
    },
    data() {
      return {
        themes: ['dark', 'warm', 'pink', 'test'],
        modes: ['contain', 'cover', 'auto'],
        cropperContainer: {
          width: '',
          height: '',
        },
        cropperBox: {
          ready: false,
          // 开启截图
          crop: false,
          // 正在截图
          cropping: false,
          // 裁剪框大小
          width: '',
          height: '',
          //裁剪框坐标
          x: 0,
          y: 0,
          cropX: 0,
          cropY: 0,
          canChangeX: '',
          canChangeY: '',
          changeCropTypeX: '',
          changeCropTypeY: '',
          cropOldW: '',
          cropOldH: '',
          cropChangeX: '',
          cropChangeY: '',
          dot: 0
        },
        sourceImageData: {
          width: '',
          height: '',
          //缩放倍数
          scale: '',
          //选装
          rotate: 0,
          // 横坐标
          x: '',
          // 纵坐标
          y: '',
          orientation: 0,
          rate: 0,
        },
        ImgMoveData: {
          move: true,
          x: '',
          y: ''
        },
        showImg: '',
        // 图片加载
        loading: true,
        support: "",
        // 图片缩放系数
        imgZF: 0.2,
        // 图片信息
        imgZFStatus: '',
        scaling: false,
        scalingSet: '',
      }
    },
    computed: {
      isIE() {
        var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串
        const isIE = !!window.ActiveXObject || 'ActiveXObject' in window; //判断是否IE浏览器
        return isIE;
      },
      passive() {
        return this.isIE ? null : {
          passive: false
        }
      }
    },
    watch: {
      async showImg(val) {
        if (val === '' || val === null) {
          return
        }
        await this.reload();
        this.initCropBox()
      },
      cropBoxBoundary(val) {
        console.log(val)
      }
    },
    beforeMount() {
      this.initApp();
    },
    mounted() {
      this.support =
        "onwheel" in document.createElement("div")
          ? "wheel"
          : document.onmousewheel !== undefined
          ? "mousewheel"
          : "DOMMouseScroll";
      this.checkedImg()
    },
    methods: {

      initApp() {
        this.$nextTick(() => {
          const {cropperContainer} = this
          cropperContainer.width = parseFloat(window.getComputedStyle(this.$refs.cropper).width);
          cropperContainer.height = parseFloat(window.getComputedStyle(this.$refs.cropper).height);
        })
      },

      getVersion(name) {
        var arr = navigator.userAgent.split(' ');
        var chromeVersion = '';
        let result = 0;
        const reg = new RegExp(name, 'i');
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

      //checkout pic
      checkedImg(Img) {

        let image = Img || this.image
        if (image === null || image === '') {
          image = '';
          return
        }

        this.loading = true;
        this.sourceImageData.scale = 1;
        this.rotate = 0;
        let img = new Image();
        img.onload = () => {
          if (image === '') {
            // something will be do
            return
          }
          const {sourceImageData} = this;

          let width = img.width;
          let height = img.height;

          Exif.getData(img).then(data => {

            sourceImageData.orientation = data.orientation || 1;
            let max = this.maxImgSize;
            if (!this.orientation && (width < max) && (height < max)) {
              this.showImg = image;
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
          img.src = image;
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
            this.showImg = data;
          },
          "image/" + this.outputType,
          1
        );

      },

      //  reload picture layout function
      reload() {
        let img = new Image();
        img.src = this.showImg;
        img.onload = () => {
          const {cropperContainer, sourceImageData} = this;
          sourceImageData.width = img.width;
          sourceImageData.height = img.height;

          if (!this.original) {
            sourceImageData.scale = this.dealMode();
          } else {
            sourceImageData.scale = 1;
          }

          this.$nextTick(() => {
            sourceImageData.x = -(sourceImageData.width - sourceImageData.width * sourceImageData.scale) / 2 +
              (cropperContainer.width - sourceImageData.width * sourceImageData.scale) / 2;
            sourceImageData.y = -(sourceImageData.height - sourceImageData.height * sourceImageData.scale) / 2 +
              (cropperContainer.height - sourceImageData.height * sourceImageData.scale) / 2;
            this.loading = false;
          })
        };
        return;
      },

      dealMode() {
        const {mode, modes, sourceImageData, cropperContainer} = this;
        let scale = 1;
        let md = '';
        let imgWidth = sourceImageData.width,
          imgHeight = sourceImageData.height;
        let contWidth = cropperContainer.width,
          contHeight = cropperContainer.height;
        md = modes.find(element => element === mode);
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

      scaleImage() {
        if (this.canScale) {
          window.addEventListener(this.support, this.changeSize, this.passive);
        }
      },

      cancelScale() {
        if (this.canScale) {
          window.removeEventListener(this.support, this.changeSize)
        }
      },

      changeSize(e) {
        e.preventDefault();
        const {sourceImageData, imgZF, imgZFStatus} = this;
        let scale = sourceImageData.scale;
        var change = e.deltaY || e.wheelDelta;
        var isFirefox = navigator.userAgent.indexOf("Firefox");
        change = isFirefox > 0 ? change * 30 : change;

        if (this.isIE) {
          change = -change;
        }

        var IZF = imgZF;
        IZF =
          IZF / sourceImageData.width > IZF / sourceImageData.height
            ? IZF / sourceImageData.height
            : IZF / sourceImageData.width;

        var num = IZF * change;

        num < 0
          ? (scale += Math.abs(num))
          : scale > Math.abs(num)
          ? (scale -= Math.abs(num))
          : scale;

        let status = num < 0 ? "add" : "reduce";

        if (status !== imgZFStatus) {
          this.imgZFStatus = status;
          this.imgZF = 0.2
        }

        if (!this.scaling) {
          this.scalingSet = setTimeout(() => {
            this.scaling = false;
            this.imgZF = this.imgZF += 0.01;
          }, 50);
        }

        this.scaling = true;

        if (!this.checkoutImageAxis(sourceImageData.x, sourceImageData.y, scale)) {
          return false;
        }
        this.sourceImageData.scale = scale
      },

      checkoutImageAxis(x, y, scale) {
        const {cropCanOverImageBorder, sourceImageData} = this;
        x = x || sourceImageData.x;
        y = y || sourceImageData.y;
        scale = scale || sourceImageData.scale;

        let goScale = true;
        if (!cropCanOverImageBorder) {
          let axis = this.getImageAxis(x, y, scale);
          let cropAxis = this.getCropAxis();
          if (axis.x1 >= cropAxis.x1) {
            goScale = false;
          }

          // 右边横坐标
          if (axis.x2 <= cropAxis.x2) {
            goScale = false;
          }

          // 纵坐标上面
          if (axis.y1 >= cropAxis.y1) {
            goScale = false;
          }

          // 纵坐标下面
          if (axis.y2 <= cropAxis.y2) {
            goScale = false;
          }
        }
        return goScale;
      },

      getImageAxis(x, y, scale) {
        const {sourceImageData,} = this;
        x = x || sourceImageData.x;
        y = y || sourceImageData.y;
        scale = scale || sourceImageData.scale;
        let obj = {
          x1: 0,
          x2: 0,
          y1: 0,
          y2: 0
        };
        let imgW = sourceImageData.width * sourceImageData.scale;
        let imgH = sourceImageData.height * sourceImageData.scale;

        switch (sourceImageData.rotate) {
          case 0 :
            obj.x1 = x + (sourceImageData.width * (1 - scale)) / 2;
            obj.x2 = obj.x1 + sourceImageData.width * scale;
            obj.y1 = y + (sourceImageData.height * (1 - scale)) / 2;
            obj.y2 = obj.y1 + sourceImageData.height * scale;
            break;
          case 1:
          case -1:
          case 3:
          case -3:
            obj.x1 = x + (sourceImageData.width * (1 - scale)) / 2 + (imgW - imgH) / 2;
            obj.x2 = obj.x1 + sourceImageData.height * scale;
            obj.y1 = y + (sourceImageData.height * (1 - scale)) / 2 + (imgW - imgH) / 2;
            obj.y2 = obj.y1 + sourceImageData.width * scale;
            break;
          default:
            obj.x1 = x + (sourceImageData.width * (1 - scale)) / 2;
            obj.x2 = obj.x1 + sourceImageData.width * scale;
            obj.y1 = y + (sourceImageData.height * (1 - scale)) / 2;
            obj.y2 = obj.y1 + sourceImageData.height * scale;
            break;
        }
        return obj;
      },

      moveImage(e) {
        e.preventDefault();
        const {ImgMoveData, canMoveImage, sourceImageData, cropperBox} = this
        if (ImgMoveData.move && !cropperBox.crop) {
          if (!canMoveImage) {
            return;
          } else {
            if (ImgMoveData.move) {
              ImgMoveData.x = (e.clientX ? e.clientX : e.touches[0].clientX) - sourceImageData.x;
              ImgMoveData.y = (e.clientY ? e.clientY : e.touches[0].clientY) - sourceImageData.y;
              if (e.touches) {

              } else {
                window.addEventListener('mousemove', this.movingImg);
                window.addEventListener('mouseup', this.stopMoveImg);
              }
            }
          }
        } else {

        }

      },

      movingImg(e) {
        e.preventDefault();
        if (e.touches && e.touches.length === 2) {
          return
        }

        const {sourceImageData, ImgMoveData, cropCanOverImageBorder, cropperBox} = this

        let nowX = e.clientX ? e.clientX : e.touches[0].clientX;
        let nowY = e.clientY ? e.clientY : e.touches[0].clientY;

        let changeX, changeY;

        changeX = nowX - ImgMoveData.x;
        changeY = nowY - ImgMoveData.y;

        this.$nextTick(() => {
          if (!cropCanOverImageBorder) {
            let axis = this.getImageAxis(changeX, changeY, sourceImageData.scale);
            let cAxis = this.getCropAxis();
            let imgW = sourceImageData.width * sourceImageData.scale;
            let imgH = sourceImageData.height * sourceImageData.scale;
            let maxLeft, maxTop, maxRight, maxBottom;
            switch (sourceImageData.rotate) {
              case 1 :
                maxLeft = cropperBox.x - (sourceImageData.width * (1 - sourceImageData.scale)) / 2 +
                  (imgW - imgH) / 2;
                maxTop = cropperBox.y - (sourceImageData.height * (1 - sourceImageData.scale)) / 2 +
                  (imgH - imgW) / 2;
                maxRight =maxLeft - imgW + cropperBox.width;
                maxBottom = maxTop - imgH + cropperBox.height;
                break;
              default:
                maxLeft = cropperBox.x - (sourceImageData.width * (1 - sourceImageData.scale)) / 2;
                maxTop = cropperBox.y - (sourceImageData.height * (1 - sourceImageData.scale)) / 2;
                maxRight = maxLeft - imgW + cropperBox.width;
                maxBottom = maxTop - imgH + cropperBox.height;
            }


            if (axis.x1 >= cAxis.x1) {
              changeX = maxLeft;
            }
            if(axis.x2 <= cAxis.x2) {
              changeX = maxRight;
            }
            if (axis.y1 >= cAxis.y1) {
              changeY = maxTop;
            }
            if (axis.y2 <= cAxis.y2) {
              changeY = maxBottom;
            }
          }

          sourceImageData.x = changeX;
          sourceImageData.y = changeY;

        })

      },

      stopMoveImg(e) {
        window.removeEventListener('mousemove', this.movingImg)
      },

      //初始化截图框
      // type ： '10', '10px', '10%', '10px 10', 'auto' **
      initCropBox(boundary) {
        const {showImg, cropBoxBoundary, cropperContainer} = this
        if (showImg === '' || showImg === null || typeof showImg === 'undefined') return;
        let cropBoxWidth = 0,
          cropBoxHeight = 0;
        let cbb = boundary || cropBoxBoundary;
        let cbList = cbb.split(' ');
        if (cbList.length === 1) {
          if (cbList[0] === 'auto') {
            this.initCropBox('50% 50%')
            return;
          } else if (cbList[0].search('px') !== -1
            || cbList[0].search('%') !== -1) {
            this.initCropBox(cbList[0] + ' ' + cbList[0])
            return;
          } else if (/^\d{1,}$/.test(cbList[0])) {
            this.initCropBox(cbList[0] + 'px ' + cbList[0] + 'px');
            return;
          } else {
            console.error('参数: crop-box-boundary 不符合规范')
            return;
          }
        } else if (cbList.length === 2) {
          let w = cbList[0].replace(/[^0-9]/ig, ""),
            h = cbList[1].replace(/[^0-9]/ig, "");

          if (cbList[0].search('px') !== -1) {
            cropBoxWidth = w;
            cropBoxHeight = h;

          } else if (cbList[0].search('%') !== -1) {
            let cw = cropperContainer.width,
              ch = cropperContainer.height;

            if (w <= 100) {
              cropBoxWidth = cw * w / 100;
            } else {
              cropBoxWidth = cw;
            }
            if (h <= 100) {
              cropBoxHeight = ch * h / 100;
            } else {
              cropBoxHeight = ch;
            }

          } else if (/^\d{1,}$/.test(cbList[0]) && /^\d{1,}$/.test(cbList[1])) {
            this.initCropBox(cbList[0] + 'px ' + cbList[1] + 'px');
            return;
          } else {
            console.error('参数: crop-box-boundary 不符合规范')
            return;
          }
        } else {
          console.error('参数: crop-box-boundary 不符合规范')
          return;
        }

        this.changeCropBox(cropBoxWidth, cropBoxHeight);
      },

      changeCropBox(w, h) {
        const {
          cropperBox, cropperContainer,
          cropCanOverImageBorder, sourceImageData,
          fixed, fixedNumber
        } = this;

        this.$nextTick(() => {
          setTimeout(() => {
            let rate = fixed ?
              typeof fixedNumber === 'undefined' ? cropperContainer.width / cropperContainer.height : fixedNumber[0] / fixedNumber[1]
              : w / h
            sourceImageData.rate = rate;
            if (!cropCanOverImageBorder) {
              h = w / rate;
              if (w > sourceImageData.width) {
                w = sourceImageData.width
                h = w / rate;
              }
              if (h > sourceImageData.height) {
                h = sourceImageData.height;
                w = h * rate;
              }
            }
            cropperBox.width = w;
            cropperBox.height = w / rate

            cropperBox.x = (cropperContainer.width - cropperBox.width) / 2;
            cropperBox.y = (cropperContainer.height - cropperBox.height) / 2;
            cropperBox.ready = true
          }, 50)
        })
      },

      moveCrop(e) {
        const {cropperBox, canMoveCropBox} = this
        e.preventDefault();
        if (!canMoveCropBox) {
          return;
        }
        ;

        if (e.touches && e.touches.length === 2) {
          return false;
        }

        window.addEventListener('mousemove', this.movingCropBox);
        window.addEventListener('mouseup', this.leaveCrop)

        let x = e.clientX ? e.clientX : e.touches[0].clientX;
        let y = e.clientY ? e.clientY : e.touches[0].clientY;

        let nowX = x - cropperBox.x,
          nowY = y - cropperBox.y;

        cropperBox.cropX = nowX;
        cropperBox.cropY = nowY;

      },

      movingCropBox(e) {
        const {
          cropperBox, cropperContainer, sourceImageData,
          cropCanOverImageBorder
        } = this
        e.preventDefault();

        let nowX = 0;
        let nowY = 0;

        if (e) {
          e.preventDefault();
          nowX = e.clientX ? e.clientX : e.touches[0].clientX;
          nowY = e.clientY ? e.clientY : e.touches[0].clientY;
        }

        this.$nextTick(() => {
          let cx, cy;
          let fw = nowX - cropperBox.cropX;
          let fh = nowY - cropperBox.cropY;

          if (fw <= 0) {
            cx = 2
          } else if (fw + cropperBox.width >= cropperContainer.width) {
            cx = cropperContainer.width - cropperBox.width - 1
          } else {
            cx = fw
          }

          if (fh <= 0) {
            cy = 2
          } else if (fh + cropperBox.height >= cropperContainer.height) {
            cy = cropperContainer.height - cropperBox.height - 1
          } else {
            cy = fh
          }


          if (!cropCanOverImageBorder) {

            let axis = this.getImageAxis();

            if (cx < axis.x1) {
              cx = axis.x1;
            }

            if (cx + cropperBox.width > axis.x2) {
              cx = axis.x2 - cropperBox.width;
            }


            if (cy < axis.y1) {
              cy = axis.y1;
            }

            if (cy + cropperBox.height > axis.y2) {
              cy = axis.y2 - cropperBox.height;
            }

          }

          cropperBox.x = cx;
          cropperBox.y = cy;

        })
      },

      leaveCrop(e) {
        e.preventDefault();
        window.removeEventListener("mousemove", this.movingCropBox);
        window.removeEventListener("mouseup", this.leaveCrop);
      },

      resizeCropBox(e, w, h, typeW, typeH, dot) {
        const {cropperBox, fixed} = this;
        e.preventDefault();
        cropperBox.dot = dot;
        window.addEventListener("mousemove", this.changeCropNow);
        window.addEventListener("mouseup", this.changeCropEnd);
        cropperBox.canChangeX = w;
        cropperBox.canChangeY = h;
        cropperBox.changeCropTypeX = typeW;
        cropperBox.changeCropTypeY = typeH;
        cropperBox.cropX = e.clientX ? e.clientX : e.touches[0].clientX;
        cropperBox.cropY = e.clientY ? e.clientY : e.touches[0].clientY;
        cropperBox.cropOldW = cropperBox.width;
        cropperBox.cropOldH = cropperBox.height;
        cropperBox.cropChangeX = cropperBox.x;
        cropperBox.cropChangeY = cropperBox.y;
        if (fixed) {
          if (!(cropperBox.canChangeX && cropperBox.canChangeY)) {
            cropperBox.canChangeY = 0;
            cropperBox.canChangeX = 0;
          }
        }
      },

      changeCropNow(e) {
        e.preventDefault();
        const {cropperContainer, cropperBox, fixed, sourceImageData, cropCanOverImageBorder} = this
        let nowX = e.clientX ? e.clientX : e.touches ? e.touches[0].clientX : 0,
          nowY = e.clientY ? e.clientY : e.touches ? e.touches[0].clientY : 0;
        let wrapperW = cropperContainer.width,
          wrapperH = cropperContainer.height;
        // 不能超过的坐标轴
        let minX = 0;
        let minY = 0;

        if (!cropCanOverImageBorder) {
          let axis = this.getImageAxis();
          let imgW = axis.x2;
          let imgH = axis.y2;
          minX = axis.x1 > 0 ? axis.x1 : 0;
          minY = axis.y1 > 0 ? axis.y1 : 0;

          if (wrapperW > imgW) {
            wrapperW = imgW;
          }

          if (wrapperH > imgH) {
            wrapperH = imgH;
          }
        }

        this.$nextTick(() => {
          var fw = nowX - cropperBox.cropX
          var fh = nowY - cropperBox.cropY;

          if (fixed) {
            switch (cropperBox.dot) {
              case 1 :
                if (fw > fh) {
                  fh = fw / sourceImageData.rate
                } else {
                  fw = fh * sourceImageData.rate
                }
                break;
              case 3:
                if (Math.abs(fw) > Math.abs(fh)) {
                  fh = -fw / sourceImageData.rate
                } else {
                  fw = -fh * sourceImageData.rate
                }
            }
          }

          if (cropperBox.canChangeX) {
            if (cropperBox.changeCropTypeX === 1) {
              if (cropperBox.cropOldW - fw > 0) {
                cropperBox.width =
                  wrapperW - cropperBox.cropChangeX - fw <= wrapperW - minX
                    ? cropperBox.cropOldW - fw
                    : cropperBox.cropOldW + cropperBox.cropChangeX - minX;
                cropperBox.x =
                  wrapperW - cropperBox.cropChangeX - fw <= wrapperW - minX
                    ? cropperBox.cropChangeX + fw
                    : minX;
              } else {
                this.cropW =
                  Math.abs(fw) + this.cropChangeX <= wrapperW
                    ? Math.abs(fw) - this.cropOldW
                    : wrapperW - this.cropOldW - this.cropChangeX;
                this.cropOffsertX = this.cropChangeX + this.cropOldW;
              }
            } else if (cropperBox.changeCropTypeX === 2) {
              if (cropperBox.cropOldW + fw > 0) {
                cropperBox.width =
                  cropperBox.cropOldW + fw + cropperBox.x <= wrapperW
                    ? cropperBox.cropOldW + fw
                    : wrapperW - cropperBox.x;
                cropperBox.x = cropperBox.cropChangeX;
              } else {
                cropperBox.width =
                  wrapperW - cropperBox.cropChangeX + Math.abs(fw + cropperBox.cropOldW) <=
                  wrapperW - minX
                    ? Math.abs(fw + cropperBox.cropOldW)
                    : cropperBox.cropChangeX - minX;
                cropperBox.x =
                  wrapperW - cropperBox.cropChangeX + Math.abs(fw + cropperBox.cropOldW) <=
                  wrapperW - minX
                    ? cropperBox.cropChangeX - Math.abs(fw + cropperBox.cropOldW)
                    : minX;
              }
            }
          }
          if (cropperBox.canChangeY) {
            if (cropperBox.changeCropTypeY === 1) {
              if (cropperBox.cropOldH - fh > 0) {
                cropperBox.height =
                  wrapperH - cropperBox.cropChangeY - fh <= wrapperH - minY
                    ?
                    cropperBox.cropOldH - fh
                    :
                    cropperBox.cropOldH + cropperBox.cropChangeY - minY;
                cropperBox.y =
                  wrapperH - cropperBox.cropChangeY - fh <= wrapperH - minY
                    ? cropperBox.cropChangeY + fh
                    : minY;
              } else {
                cropperBox.height =
                  Math.abs(fh) + cropperBox.cropChangeY <= wrapperH
                    ? Math.abs(fh) - cropperBox.cropOldH
                    : wrapperH - cropperBox.cropOldH - cropperBox.cropChangeY;
                cropperBox.y = cropperBox.cropChangeY + cropperBox.cropOldH;
              }
            } else if (cropperBox.changeCropTypeY === 2) {
              if (cropperBox.cropOldH + fh > 0) {
                cropperBox.height =
                  cropperBox.cropOldH + fh + cropperBox.y <= wrapperH
                    ? cropperBox.cropOldH + fh
                    : wrapperH - cropperBox.y;
                cropperBox.y = cropperBox.cropChangeY;
              } else {
                cropperBox.height =
                  wrapperH - cropperBox.cropChangeY + Math.abs(fh + cropperBox.cropOldH) <=
                  wrapperH - minY
                    ? Math.abs(fh + cropperBox.cropOldH)
                    : cropperBox.cropChangeY - minY;
                cropperBox.y =
                  wrapperH - cropperBox.cropChangeY + Math.abs(fh + cropperBox.cropOldH) <=
                  wrapperH - minY
                    ? cropperBox.cropChangeY - Math.abs(fh + cropperBox.cropOldH)
                    : minY;
              }
            }
          }

          if (cropperBox.canChangeX && fixed) {
            let fixedHeight = cropperBox.width / sourceImageData.rate
            if (fixedHeight + cropperBox.y > wrapperH) {
              cropperBox.height = wrapperH - cropperBox.y;
              cropperBox.width = cropperBox.height * sourceImageData.rate
            }else {
              cropperBox.height = fixedHeight;
            }
          }

          if (cropperBox.canChangeY && fixed) {
            var fixedWidth = cropperBox.height * sourceImageData.rate;
            if (fixedWidth + cropperBox.x > wrapperW){
              cropperBox.width = wrapperW - cropperBox.x;
              cropperBox.height = cropperBox.width / sourceImageData.rate;
            }else {
              cropperBox.width = fixedWidth;
            }
          }


        })
      },

      changeCropEnd(e) {
        window.removeEventListener("mousemove", this.changeCropNow);
        window.removeEventListener("mouseup", this.changeCropEnd);
      },

      getCropAxis() {
        const {cropperBox} = this
        let obj = {
          x1: 0,
          x2: 0,
          y1: 0,
          y2: 0
        };
        obj.x1 = cropperBox.x;
        obj.y1 = cropperBox.y;
        obj.x2 = cropperBox.x + cropperBox.width;
        obj.y2 = cropperBox.y + cropperBox.height;
        return obj;
      },

      //canvas获取为blob对象
      getCropBlob(cb) {
        this.getCropInfo(data => {
          data.toBlob(
            blob => cb(blob),
            "image/" + this.outputType,
            1
          );
        });
      },

      getCropInfo(cb) {
        const {cropperBox, sourceImageData, showImg} = this
        let canvas = document.createElement("canvas");
        let img = new Image();
        let rotate = sourceImageData.rotate;
        let trueWidth = sourceImageData.width;
        let trueHeight = sourceImageData.height;
        let cropOffsertX = cropperBox.x;
        let cropOffsertY = cropperBox.y;
        img.onload = () => {
          if (cropperBox.width !== 0) {
            let ctx = canvas.getContext("2d");
            let dpr = 1;
            let width = this.cropperBox.width * dpr;
            let height = this.cropperBox.height * dpr;
            let imgW = trueWidth * sourceImageData.scale * dpr;
            let imgH = trueHeight * sourceImageData.scale * dpr;
            // 图片x轴偏移
            let dx =
              (sourceImageData.x - cropOffsertX + (sourceImageData.width * (1 - sourceImageData.scale)) / 2) *
              dpr;
            // 图片y轴偏移
            let dy =
              (sourceImageData.y - cropOffsertY + (sourceImageData.height * (1 - sourceImageData.scale)) / 2) *
              dpr;
            setCanvasSize(width, height);
            ctx.save();

            switch (rotate) {
              case 0 :
                setCanvasSize(width / sourceImageData.scale, height / sourceImageData.scale);
                ctx.drawImage(
                  img,
                  dx / sourceImageData.scale,
                  dy / sourceImageData.scale,
                  imgW / sourceImageData.scale,
                  imgH / sourceImageData.scale
                );
            }
            ctx.restore();
          }
          cb(canvas);
        };
        var s = this.image.substring(0, 4);
        if (s !== "data") {
          img.crossOrigin = "Anonymous";
        }
        img.src = this.showImg

        function setCanvasSize(width, height) {
          canvas.width = Math.round(width);
          canvas.height = Math.round(height);
        }
      },

      addImage() {
        let el = this.$refs.add
        el.click()
      },

      addImageChange() {
        let el = this.$refs.add;
        if (el.value === '' || el.value === null) return
        let file = el.files[0];
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
          this.checkedImg(reader.result)
        }
      }
    }
  }
</script>

<style scoped lang="sass">
  @import "./styles/index"
</style>
