<template>
  <div id="outer"
       ref="cutter"
       @mouseover="scaleImg" @mouseout="cancelScale"
       v-show="app.init">
    <div
      v-if="image.url"
      class="cropper-box"
    >
      <div class="cropper-box-canvas"
           v-show="!image.loading"
           :style="{
             width: image.width + 'px',
             height: image.height + 'px',
             transform: 'scale(' + image.scale + ',' + image.scale + ') '
             + 'translate3d('+ image.x / image.scale + 'px,' + image.y / image.scale + 'px,' + '0)'
					   + 'rotateZ('+ image.rotate * 90 +'deg)'
           }"
      >
        <img :src="image.url" alt="image.url">
      </div>
    </div>

    <div
      class="cropper-drag-box modal"
      @mousedown="startMove"
      @touchstart="startMove"
    >
    </div>

    <div class="cropper-context"
         v-if="cropBox.initCropBox"
         :style="{
      width: cropBox.width + 'px',
      height: cropBox.height + 'px',
      transform: 'translate3d('+ cropBox.x + 'px,' + cropBox.y + 'px,' + '0)'
         }"
    >
      <span class="cropper-view-box">
        <img :src="image.url" :alt="image.url"
             :style="{
          width: image.width + 'px',
          height: image.height + 'px',
          transform: 'scale(' + image.scale + ',' + image.scale + ') ' + 'translate3d('+ (image.x - cropBox.x) / image.scale  + 'px,' + (image.y - cropBox.y) / image.scale + 'px,' + '0)'
						+ 'rotateZ('+ image.rotate * 90 +'deg)'
             }"
        >
      </span>

      <span class="crop-info" v-if="cropInfo">
          {{Math.round(cropBox.width)}} * {{Math.round(cropBox.height)}}
      </span>

      <span class="cropper-face cropper-move" @mousedown="cropMove" @touchstart="cropMove"></span>

      <span class="fixedBox" v-if="canCropResized">
          <span class="f fht"
                v-if="fixed === null"
                @touchstart="resizeCropBox($event, false, true, 0, 1,22)"
                @mousedown="resizeCropBox($event, false, true, 0, 1,22)">
          </span>
          <span
            v-if="fixed === null"
            @touchstart="resizeCropBox($event, true, false, 2, 0,2)"
            @mousedown="resizeCropBox($event, true, false, 2, 0,2)"
            class="f fvr">
          </span>
          <span
            v-if="fixed === null"
            @touchstart="resizeCropBox($event, false, true, 0, 2,3)"
            @mousedown="resizeCropBox($event, false, true, 0, 2,3)"
            class="f fhb"></span>
          <span
            v-if="fixed === null"
            @touchstart="resizeCropBox($event, true, false, 1, 0,4)"
            @mousedown="resizeCropBox($event, true, false, 1, 0,4)"
            class="f fvl"></span>
          <span
            @touchstart="resizeCropBox($event, true, true, 1, 1,1)"
            @mousedown="resizeCropBox($event, true, true, 1, 1,1)"
            class="f dot dot-1"></span>
          <span
            v-if="fixed === null"
            @touchstart="resizeCropBox($event, false, true, 0, 1,6)"
            @mousedown="resizeCropBox($event, false, true, 0, 1,6)"
            class="f dot dot-2"></span>
          <span
            @touchstart="resizeCropBox($event, true, true, 2, 1,3)"
            @mousedown="resizeCropBox($event, true, true, 2, 1,3)"
            class="f dot dot-3"></span>
          <span
            v-if="fixed === null"
            @touchstart="resizeCropBox($event, true, false, 2, 0,8)"
            @mousedown="resizeCropBox($event, true, false, 2, 0,8)"
            class="f dot dot-4"></span>
          <span
            @touchstart="resizeCropBox($event, true, true, 2, 2,1)"
            @mousedown="resizeCropBox($event, true, true, 2, 2,1)"
            class="f dot dot-5"></span>
          <span
            v-if="fixed === null"
            @touchstart="resizeCropBox($event, false, true, 0, 2,10)"
            @mousedown="resizeCropBox($event, false, true, 0, 2,10)"
            class="f dot dot-6"></span>
          <span
            @touchstart="resizeCropBox($event, true, true, 1, 2,3)"
            @mousedown="resizeCropBox($event, true, true, 1, 2,3)"
            class="f dot dot-7"></span>
          <span
            @touchstart="resizeCropBox($event, true, false, 1, 0,12)"
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
</template>

<script>
import mixin from "./mixin";
import Exif from "./exif";

export default {
  name: "vue-cutter",
  props: {
    containerBounding: {
      type: String,
      default: '0'
    },
    src: {
      type: [String, Blob, null, File],
      default: ''
    },
    // 可以压缩图片宽高  默认不超过200
    maxImgSize: {
      type: [Number, String],
      default: 2000
    },
    /*
      图片布局方式 mode 实现和css背景一样的效果
      contain  居中布局 默认不会缩放 保证图片在容器里面 mode: 'contain'
      cover    拉伸布局 填充整个容器  mode: 'cover'
      original 原始布局, 按照图片的原始尺寸喧嚷 mode ：'original'
      如果仅有一个数值被给定，这个数值将作为宽度值大小，高度值将被设定为auto。 mode: '50px'
      如果有两个数值被给定，第一个将作为宽度值大小，第二个作为高度值大小。 mode: '50px 60px'
    */
    mode: {
      type: String,
      default: "contain"
    },

    canImgMoved: {
      type: Boolean,
      default: true
    },

    canCropMove: {
      type: Boolean,
      default: true
    },

    canImgScale: {
      type: Boolean,
      default: true
    },

    cropBoxBounding: {
      type: String,
      default: 'auto'
    },

    canCropOverImg: {
      type: Boolean,
      default: true
    },

    fixed: {
      type: Array,
      default: null
    },

    canCropResized: {
      type: Boolean,
      default: true
    },

    cropDividingLine: {
      type: Boolean,
      default: false
    },

    cropInfo: {
      type: Boolean,
      default: false
    }

  },
  data() {
    return {
      app: {
        init: false,
        width: 0,
        height: 0,
        touches: [],
        touchNow: false,
        support: ''
      },
      image: {
        url: '',
        width: 0,
        height: 0,
        x: 0,
        y: 0,
        loading: false,
        scale: 0,
        rotate: 0,
        orientation: 0,
        //图片缩放系数
        izf: 0.2,
        // 是否正在多次缩放
        scaling: false,
        scalingSet: "",
        coeStatus: "",
        // 控制emit触发频率
      },
      cropBox: {
        width: 0,
        height: 0,
        x: 0,
        y: 0,
        rate: null,
        initCropBox: false
      },
      imageMoveTemp: {
        moveX: 0,
        moveY: 0,
      },
      cropBoxTemp: {
        cropX: 0,
        cropY: 0,
        canChangeX: 0,
        canChangeY: 0,
        dot: 0,
        changeCropTypeX: 0,
        changeCropTypeY: 0,
        cropOldW: 0,
        cropOldH: 0,
        cropChangeX: 0,
        cropChangeY: 0
      }
    }
  },
  mixins: [mixin],
  created() {
    this.$nextTick(() => {
      this.initApp();
      this.checkedImg();
    })
  },
  watch: {
    src: function (val) {
      if (val !== '') {
        this.checkedImg();
      }
    }
  },
  mounted() {
    this.support =
      "onwheel" in document.createElement("div")
        ? "wheel"
        : document.onmousewheel !== undefined
        ? "mousewheel"
        : "DOMMouseScroll";
  },
  methods: {
    initApp() {
      const {app, containerBounding} = this;
      let bounding = containerBounding.split(' ');
      let el = document.getElementById('outer')
      switch (bounding.length) {
        case 1:
          let str0 = bounding[0];
          if (/^[0-9]+.?[0-9]*$/.test(str0)) {
            el.style.width = str0 + 'px';
            el.style.height = str0 + 'px';
          } else {
            el.style.width = str0;
            el.style.height = str0;
          }
          break;
        case 2:
          let str1 = bounding[0];
          let str2 = bounding[1];
          if (/^[0-9]+.?[0-9]*$/.test(str1) && /^[0-9]+.?[0-9]*$/.test(str2)) {
            el.style.width = str1 + 'px';
            el.style.height = str2 + 'px';
          } else if (!/^[0-9]+.?[0-9]*$/.test(str1) && !/^[0-9]+.?[0-9]*$/.test(str2)) {
            el.style.width = str1;
            el.style.height = str2;
          } else {
            console.error('param : `containerBounding` error')
            this.$emit('appInit', 'error');
            return;
          }
          break;
      }
      app.width = parseFloat(window.getComputedStyle(this.$refs.cutter).width)
      app.height = parseFloat(window.getComputedStyle(this.$refs.cutter).height)
      app.init = true;
      this.$emit('appInit', 'success');
    },

    checkedImg() {
      const {src, image} = this;
      if (src === null || src === '') {
        image.url = '';
        return;
      }

      image.loading = true;
      image.rotate = 0;
      image.scale = 1;

      let img = new Image();
      img.onload = () => {
        if (src === '') {
          this.$emit("imgLoad", "error");
          this.$emit("img-load", "error");
          return false;
        }

        let width = img.width;
        let height = img.height;

        Exif.getData(img).then(data => {
          image.orientation = data.orientation || 1;
          let max = this.maxImgSize;
          if (!image.orientation && (width < max) && (height < max)) {
            image.url = this.img;
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
          this.checkOrientationImage(img, image.orientation, width, height);
          setTimeout(() => {
            if (image.url !== null) {
              this.reload();
            }
          }, 400)
        });
      };

      img.onerror = () => {
        this.$emit("imgLoad", "error");
        this.$emit("img-load", "error");
      };
      // 判断如果不是base64图片 再添加crossOrigin属性，否则会导致iOS低版本(10.2)无法显示图片
      if (src.substr(0, 4) !== "data") {
        img.crossOrigin = "";
      }
      if (this.isIE) {
        let xhr = new XMLHttpRequest();
        xhr.onload = function () {
          img.src = URL.createObjectURL(this.response);
        };
        xhr.open("GET", this.src, true);
        xhr.responseType = "blob";
        xhr.send();
      } else {
        img.src = this.src;
      }
    },

    reload() {
      let img = new Image();
      const {image, app} = this;
      img.onload = () => {
        image.width = img.width;
        image.height = img.height;

        image.scale = this.checkedMode();

        image.x =
          -(image.width - image.width * image.scale) / 2 +
          (app.width - image.width * image.scale) / 2;
        image.y =
          -(image.height - image.height * image.scale) / 2 +
          (app.height - image.height * image.scale) / 2;

        image.loading = false;

        this.goAutoCrop();

        // 图片加载成功的回调
        this.$emit("img-load", "success");
        this.$emit("imgLoad", "success");
      }

      img.onerror = () => {
        this.$emit("imgLoad", "error");
        this.$emit("img-load", "error");
      };
      img.src = image.url;
    },

    checkedMode() {
      let scale = 1;
      const {image, mode, app} = this;
      let imgW = image.width;
      let imgH = image.height;
      const arr = mode.split(" ");
      switch (arr[0]) {
        case "contain":
          if (image.width > app.width) {
            scale = app.width / image.width;
          }

          if (image.height * scale > app.height) {
            scale = app.height / image.height;
          }
          break;
        case "cover":
          // 扩展布局 默认填充满整个容器
          // 图片宽度大于容器
          imgW = app.width;
          scale = imgW / image.width;
          imgH = imgH * scale;
          // 如果扩展之后高度小于容器的外层高度 继续扩展高度
          if (imgH < app.height) {
            imgH = app.height;
            scale = imgH / image.height;
          }
          break;
        case "original":
          scale = 1;
          break;
        default:
          try {
            let str = arr[0];

            if (str.search("px") !== -1) {
              str = str.replace("px", "");
              imgW = parseFloat(str);
              const scaleX = imgW / image.width;
              let scaleY = 1;
              let strH = arr[1];
              if (strH.search("px") !== -1) {
                strH = strH.replace("px", "");
                imgH = parseFloat(strH);
                scaleY = imgH / image.height;
              }
              scale = Math.min(scaleX, scaleY)
            }

            if (str.search("%") !== -1) {
              str = str.replace("%", "");
              imgW = (parseFloat(str) / 100) * app.width;
              scale = imgW / image.width;
            }

            if (arr.length === 2 && str === "auto") {
              let str2 = arr[1];
              if (str2.search("px") !== -1) {
                str2 = str2.replace("px", "");
                imgH = parseFloat(str2);
                scale = imgH / image.width;
              }
              if (str2.search("%") !== -1) {
                str2 = str2.replace("%", "");
                imgH = (parseFloat(str2) / 100) * app.height;
                scale = imgH / image.height;
              }
            }
          } catch (e) {
            scale = 1;
          }
      }
      return scale;
    },

    goAutoCrop() {
      const {image, cropBox, app, canCropOverImg, cropBoxBounding, fixed} = this;
      if (image.url === '' || image.url === null) return;
      app.initCropBox = false;
      this.clearCrop();
      let maxWidth = app.width;
      let maxHeight = app.height;
      if (!canCropOverImg) {
        const switchWH = Math.abs(image.rotate) % 2 > 0;
        let imgW = (switchWH ? image.height : image.width) * image.scale;
        let imgH = (switchWH ? image.width : image.height) * image.scale;
        maxWidth = imgW < maxWidth ? imgW : maxWidth;
        maxHeight = imgH < maxHeight ? imgH : maxHeight;
      }

      if (fixed !== null && fixed.length === 2) {
        cropBox.rate = fixed[0] / fixed[1]
      }

      let arr = cropBoxBounding.split(" ");
      let w = 0,
        h = 0;
      switch (arr.length) {
        case 1:
          if (arr[0] === 'auto') {
            w = app.width * 0.8;
          } else if (arr[0].search('px') !== -1) {
            let n = arr[0].replace(/[^0-9]/ig, "");
            w = n;
          } else if (arr[0].search('%') !== -1) {
            let n = arr[0].replace(/[^0-9]/ig, "");
            w = app.width * n / 100;
          } else if (/^\d{1,}$/.test(arr[0])) {
            w = arr[0];
          }
          if (fixed === null) cropBox.rate = 1;
          h = w / cropBox.rate;
          break;
        case 2:
          if (arr[0].search('px') !== -1) {
            let n = arr[0].replace(/[^0-9]/ig, "");
            w = n;
            if (cropBox.rate !== null) h = w / cropBox.rate;
            h = arr[1].replace(/[^0-9]/ig, "");
          } else if (arr[0].search('%') !== -1) {
            let n = arr[0].replace(/[^0-9]/ig, "");
            w = app.width * n / 100;
            if (cropBox.rate !== null) h = w / cropBox.rate;
            h = arr[1].replace(/[^0-9]/ig, "") * app.height / 100;
          } else if (/^\d{1,}$/.test(arr[0])) {
            w = arr[0];
            if (cropBox.rate !== null) h = w / cropBox.rate;
            h = arr[1];
          }
          break;
      }
      w = parseFloat(w);
      h = parseFloat(h)

      this.changeCrop(w, h);
    },

    changeCrop(w, h) {
      const {cropBox, canCropOverImg, app} = this;
      if (canCropOverImg) {
        let axis = this.getImgAxis();
        let imgW = axis.x2 - axis.x1;
        let imgH = axis.y2 - axis.y1;
        if (w > imgW) {
          w = imgW;
          h = w / cropBox.rate;
        }
        if (h > imgH) {
          h = imgH;
          w = h * cropBox.rate;
        }
      }

      if (w > app.width) {
        w = app.width;
        h = w / cropBox.rate;
      }

      if (h > app.height) {
        h = app.height;
        w = h * cropBox.rate;
      }


      cropBox.width = w;
      cropBox.height = h;

      this.$nextTick(() => {
        cropBox.x = (app.width - cropBox.width) / 2;
        cropBox.y = (app.height - cropBox.height) / 2;
        cropBox.initCropBox = true;
      })
    },

    clearCrop() {
      const {cropBox} = this;
      cropBox.width = 0;
      cropBox.height = 0;
      cropBox.x = 0;
      cropBox.y = 0;
    },

    startMove(e) {
      e.preventDefault();
      const {imageMoveTemp, app, image} = this;
      // 开始移动
      imageMoveTemp.moveX = (e.clientX ? e.clientX : e.touches[0].clientX) - image.x;
      imageMoveTemp.moveY = (e.clientY ? e.clientY : e.touches[0].clientY) - image.y;
      if (e.touches) {
        window.addEventListener("touchmove", this.moveImg);
        window.addEventListener("touchend", this.leaveImg);
        if (e.touches.length === 2) {
          // 记录手指刚刚放上去
          app.touches = e.touches;
          window.addEventListener("touchmove", this.touchScale);
          window.addEventListener("touchend", this.cancelTouchScale);
        }
      } else {
        window.addEventListener("mousemove", this.moveImg);
        window.addEventListener("mouseup", this.leaveImg);
      }

      // 触发图片移动事件
      this.$emit("imgMoving", {
        moving: true
      });
    },

    moveImg(e) {
      e.preventDefault();
      const {imageMoveTemp, image, canImgMoved, canCropOverImg, cropBox} = this;
      if (e.touches && e.touches.length === 2) {
        this.touches = e.touches;
        window.addEventListener("touchmove", this.touchScale);
        window.addEventListener("touchend", this.cancelTouchScale);
        window.removeEventListener("touchmove", this.moveImg);
        return false;
      }

      if (!canImgMoved) return;

      let nowX = e.clientX ? e.clientX : e.touches[0].clientX;
      let nowY = e.clientY ? e.clientY : e.touches[0].clientY;

      let changeX, changeY;
      changeX = nowX - imageMoveTemp.moveX;
      changeY = nowY - imageMoveTemp.moveY;

      this.$nextTick(function () {

        if (!canCropOverImg) {
          let axis = this.getImgAxis(changeX, changeY, image.scale);
          let cropAxis = this.getCropAxis();
          let imgW = image.width * image.scale;
          let imgH = image.height * image.scale;
          let maxLeft, maxTop, maxRight, maxBottom;

          switch (image.rotate) {
            case 1:
            case -1:
            case 3:
            case -3:
              maxLeft =
                cropBox.x -
                (image.width * (1 - image.scale)) / 2 -
                (imgW - imgH) / 2;
              maxTop =
                cropBox.y -
                (image.height * (1 - image.scale)) / 2 -
                (imgH - imgW) / 2;
              maxRight = maxLeft - imgW + cropBox.width + (imgW - imgH);
              maxBottom = maxTop - imgH + cropBox.height + (imgH - imgW);
              break;
            default:
              maxLeft = cropBox.x - (image.width * (1 - image.scale)) / 2;
              maxTop = cropBox.y - (image.height * (1 - image.scale)) / 2;
              maxRight = maxLeft - imgW + cropBox.width;
              maxBottom = maxTop - imgH + cropBox.height;
              break;
          }

          // 图片左边 图片不能超过截图框
          if (axis.x1 >= cropAxis.x1) {
            changeX = maxLeft;
          }

          // 图片上边 图片不能超过截图框
          if (axis.y1 >= cropAxis.y1) {
            changeY = maxTop;
          }

          // 图片右边
          if (axis.x2 <= cropAxis.x2) {
            changeX = maxRight;
          }

          // 图片下边
          if (axis.y2 <= cropAxis.y2) {
            changeY = maxBottom;
          }

        }

        image.x = changeX;
        image.y = changeY;

        this.$emit("imgMoving", {
          moving: true
        });
      })
    },

    leaveImg(e) {
      window.removeEventListener("mousemove", this.moveImg);
      window.removeEventListener("touchmove", this.moveImg);
      window.removeEventListener("mouseup", this.leaveImg);
      window.removeEventListener("touchend", this.leaveImg);
      // 触发图片移动事件
      this.$emit("imgMoving", {
        moving: false
      });
    },

    touchScale(e) {
      e.preventDefault();
      const {image, app, canImgScale} = this;
      if (!canImgScale) return;
      let scale = image.scale;
      // 记录变化量
      // 第一根手指
      let oldTouch1 = {
        x: app.touches[0].clientX,
        y: app.touches[0].clientY
      };
      let newTouch1 = {
        x: e.touches[0].clientX,
        y: e.touches[0].clientY
      };

      // 第二根手指
      let oldTouch2 = {
        x: app.touches[1].clientX,
        y: app.touches[1].clientY
      };
      let newTouch2 = {
        x: e.touches[1].clientX,
        y: e.touches[1].clientY
      };

      let oldL = Math.sqrt(
        Math.pow(oldTouch1.x - oldTouch2.x, 2) +
        Math.pow(oldTouch1.y - oldTouch2.y, 2)
      );
      let newL = Math.sqrt(
        Math.pow(newTouch1.x - newTouch2.x, 2) +
        Math.pow(newTouch1.y - newTouch2.y, 2)
      );

      let cha = newL - oldL;
      let coe = 1;
      coe =
        coe / image.width > coe / image.height
          ? coe / image.height
          : coe / image.width;
      coe = coe > 0.1 ? 0.1 : coe;
      let num = coe * cha;

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

        if (!this.checkoutImgAxis(image.x, image.y, scale)) return false

        image.scale = scale;
      }
    },

    cancelTouchScale() {
      window.removeEventListener("touchmove", this.touchScale);
    },

    scaleImg() {
      window.addEventListener(this.support, this.changeSize, this.passive);
    },

    cancelScale() {
      window.removeEventListener(this.support, this.changeSize);
    },

    changeSize(e) {
      e.preventDefault();
      const {image, canImgScale} = this;
      if (!canImgScale) return;
      let scale = image.scale;
      let change = e.deltaY || e.wheelDelta;
      let isFirefox = navigator.userAgent.indexOf("Firefox");
      change = isFirefox > 0 ? change * 30 : change;
      // 修复ie的滚动缩放
      if (this.isIE) {
        change = -change;
      }
      let coe = image.izf;
      coe =
        coe / image.width > coe / image.height
          ? coe / image.width
          : coe / image.height;
      let num = coe * change;
      num < 0
        ? (scale += Math.abs(num))
        : scale > Math.abs(num)
        ? (scale -= Math.abs(num))
        : scale;
      // 延迟0.1s 每次放大大或者缩小的范围
      let status = num < 0 ? "add" : "reduce";
      if (status !== image.coeStatus) {
        image.coeStatus = status;
        image.izf = 0.2;
      }
      if (!image.scaling) {
        image.scalingSet = setTimeout(() => {
          image.scaling = false;
          image.izf = image.izf += 0.01;
        }, 50);
      }
      image.scaling = true;
      if (!this.checkoutImgAxis(image.x, image.y, scale)) return false;

      image.scale = scale;
    },

    checkoutImgAxis(x, y, scale) {
      const {image, canCropOverImg} = this;
      x = x || image.x;
      y = y || image.y;
      scale = scale || image.scale;
      let canGo = true;
      // 开始校验 如果说缩放之后的坐标在截图框外 则阻止缩放

      if (!canCropOverImg) {
        let axis = this.getImgAxis(x, y, scale);
        let cropAxis = this.getCropAxis();
        if (axis.x1 >= cropAxis.x1) {
          canGo = false;
        }

        // 右边横坐标
        if (axis.x2 <= cropAxis.x2) {
          canGo = false;
        }

        // 纵坐标上面
        if (axis.y1 >= cropAxis.y1) {
          canGo = false;
        }

        // 纵坐标下面
        if (axis.y2 <= cropAxis.y2) {
          canGo = false;
        }
      }
      return canGo;
    },

    getImgAxis(x, y, scale) {
      const {image} = this;
      x = x || image.x;
      y = y || image.y;
      scale = scale || image.scale;

      // 如果设置了截图框在图片内， 那么限制截图框不能超过图片的坐标
      // 图片的坐标
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
          obj.x1 = x + (image.width * (1 - scale)) / 2;
          obj.x2 = obj.x1 + image.width * scale;
          obj.y1 = y + (image.height * (1 - scale)) / 2;
          obj.y2 = obj.y1 + image.height * scale;
          break;
        case 1:
        case -1:
        case 3:
        case -3:
          obj.x1 = x + (image.width * (1 - scale)) / 2 + (imgW - imgH) / 2;
          obj.x2 = obj.x1 + image.height * scale;
          obj.y1 = y + (image.height * (1 - scale)) / 2 + (imgH - imgW) / 2;
          obj.y2 = obj.y1 + image.width * scale;
          break;
        default:
          obj.x1 = x + (image.width * (1 - scale)) / 2;
          obj.x2 = obj.x1 + image.width * scale;
          obj.y1 = y + (image.height * (1 - scale)) / 2;
          obj.y2 = obj.y1 + image.height * scale;
          break;
      }
      return obj;
    },

    cropMove(e) {
      e.preventDefault();
      const {canCropMove, cropBox, cropBoxTemp} = this;
      if (!canCropMove) {
        this.startMove(e)
        return false;
      }

      if (e.touches && e.touches.length === 2) {
        this.startMove(e);
        this.leaveCrop();
        return false;
      }

      window.addEventListener("mousemove", this.moveCrop);
      window.addEventListener("mouseup", this.leaveCrop);
      window.addEventListener("touchmove", this.moveCrop);
      window.addEventListener("touchend", this.leaveCrop);

      let x = e.clientX ? e.clientX : e.touches[0].clientX;
      let y = e.clientY ? e.clientY : e.touches[0].clientY;

      let newX, newY;
      newX = x - cropBox.x;
      newY = y - cropBox.y;

      cropBoxTemp.cropX = newX;
      cropBoxTemp.cropY = newY;

      // 触发截图框移动事件
      this.$emit("cropMoving", {
        moving: true,
        axis: this.getCropAxis()
      });

    },

    moveCrop(e) {
      e.preventDefault();
      const {canCropOverImg, cropBox, cropBoxTemp, app} = this;
      let nowX = 0;
      let nowY = 0;
      if (e) {
        e.preventDefault();
        nowX = e.clientX ? e.clientX : e.touches[0].clientX;
        nowY = e.clientY ? e.clientY : e.touches[0].clientY;
      }

      this.$nextTick(() => {
        let cx, cy;
        let fw = nowX - cropBoxTemp.cropX;
        let fh = nowY - cropBoxTemp.cropY;

        // 不能超过外层容器
        if (fw <= 0) {
          cx = 0;
        } else if (fw + cropBox.width > app.width) {
          cx = app.width - cropBox.width;
        } else {
          cx = fw;
        }

        if (fh <= 0) {
          cy = 0;
        } else if (fh + cropBox.height > app.height) {
          cy = app.height - cropBox.height;
        } else {
          cy = fh;
        }

        if (!canCropOverImg) {
          let axis = this.getImgAxis();
          // 横坐标判断
          if (cx <= axis.x1) {
            cx = axis.x1;
          }

          if (cx + cropBox.width > axis.x2) {
            cx = axis.x2 - cropBox.width;
          }

          // 纵坐标纵轴
          if (cy <= axis.y1) {
            cy = axis.y1;
          }

          if (cy + cropBox.height > axis.y2) {
            cy = axis.y2 - cropBox.height;
          }
        }

        cropBox.x = cx;
        cropBox.y = cy;

        this.$emit("cropMoving", {
          moving: true,
          axis: this.getCropAxis()
        });
      })

    },

    leaveCrop() {
      window.removeEventListener("mousemove", this.moveCrop);
      window.removeEventListener("mouseup", this.leaveCrop);
      window.removeEventListener("touchmove", this.moveCrop);
      window.removeEventListener("touchend", this.leaveCrop);
      this.$emit("cropMoving", {
        moving: false,
        axis: this.getCropAxis()
      });
    },

    getCropAxis() {
      let obj = {
        x1: 0,
        x2: 0,
        y1: 0,
        y2: 0
      };
      obj.x1 = this.cropBox.x;
      obj.x2 = obj.x1 + this.cropBox.width;
      obj.y1 = this.cropBox.y;
      obj.y2 = obj.y1 + this.cropBox.height;
      return obj;
    },

    resizeCropBox(e, w, h, typeW, typeH, dot) {
      const {cropBoxTemp, cropBox, fixed} = this;
      e.preventDefault();
      window.addEventListener("mousemove", this.changeCropNow);
      window.addEventListener("mouseup", this.changeCropEnd);
      window.addEventListener("touchmove", this.changeCropNow);
      window.addEventListener("touchend", this.changeCropEnd);
      cropBoxTemp.canChangeX = w;
      cropBoxTemp.canChangeY = h;
      cropBoxTemp.dot = dot;
      cropBoxTemp.changeCropTypeX = typeW;
      cropBoxTemp.changeCropTypeY = typeH;
      cropBoxTemp.cropX = e.clientX ? e.clientX : e.touches[0].clientX;
      cropBoxTemp.cropY = e.clientY ? e.clientY : e.touches[0].clientY;
      cropBoxTemp.cropOldW = cropBox.width;
      cropBoxTemp.cropOldH = cropBox.height;
      cropBoxTemp.cropChangeX = cropBox.x;
      cropBoxTemp.cropChangeY = cropBox.y;

      console.log(cropBoxTemp)

      if (fixed !== null) {
        if (!(cropBoxTemp.canChangeX && cropBoxTemp.canChangeY)) {
          cropBoxTemp.canChangeY = 0;
          cropBoxTemp.canChangeX = 0;
        }
      }
    },

    changeCropNow(e) {
      const {cropBoxTemp, cropBox, canCropOverImg, fixed, app} = this;
      e.preventDefault();
      let nowX = e.clientX ? e.clientX : e.touches ? e.touches[0].clientX : 0;
      let nowY = e.clientY ? e.clientY : e.touches ? e.touches[0].clientY : 0;
      // 容器的宽高
      let wrapperW = app.width;
      let wrapperH = app.height;
      // 不能超过的坐标轴
      let minX = 0;
      let minY = 0;

      if (!canCropOverImg) {
        let axis = this.getImgAxis();
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
        var fw = nowX - cropBoxTemp.cropX;
        var fh = nowY - cropBoxTemp.cropY;
        if (fixed !== null) {
          switch (cropBoxTemp.dot) {
            case 1 :
              if (fw > fh) {
                fh = fw / cropBox.rate
              } else {
                fw = fh * cropBox.rate
              }
              break;
            case 3:
              if (Math.abs(fw) > Math.abs(fh)) {
                fh = -fw / cropBox.rate
              } else {
                fw = -fh * cropBox.rate
              }
          }
        }
        if (cropBoxTemp.canChangeX) {
          if (cropBoxTemp.changeCropTypeX === 1) {
            if (cropBoxTemp.cropOldW - fw > 0) {
              cropBox.width =
                wrapperW - cropBoxTemp.cropChangeX - fw <= wrapperW - minX
                  ? cropBoxTemp.cropOldW - fw
                  : cropBoxTemp.cropOldW + cropBoxTemp.cropChangeX - minX;
              cropBox.x =
                wrapperW - cropBoxTemp.cropChangeX - fw <= wrapperW - minX
                  ? cropBoxTemp.cropChangeX + fw
                  : minX;
            } else {
              cropBox.width =
                Math.abs(fw) + cropBoxTemp.cropChangeX <= wrapperW
                  ? Math.abs(fw) - cropBoxTemp.cropOldW
                  : wrapperW - cropBoxTemp.cropOldW - cropBoxTemp.cropChangeX;
              cropBox.x = cropBoxTemp.cropChangeX + cropBoxTemp.cropOldW;
            }
          } else if (cropBoxTemp.changeCropTypeX === 2) {
            if (cropBoxTemp.cropOldW + fw > 0) {
              cropBox.width =
                cropBoxTemp.cropOldW + fw + cropBox.x <= wrapperW
                  ? cropBoxTemp.cropOldW + fw
                  : wrapperW - cropBox.x;
              cropBox.x = cropBoxTemp.cropChangeX;
            } else {
              cropBox.width =
                wrapperW - cropBoxTemp.cropChangeX + Math.abs(fw + cropBoxTemp.cropOldW) <=
                wrapperW - minX
                  ? Math.abs(fw + cropBoxTemp.cropOldW)
                  : cropBoxTemp.cropChangeX - minX;
              cropBox.x =
                wrapperW - cropBoxTemp.cropChangeX + Math.abs(fw + cropBoxTemp.cropOldW) <=
                wrapperW - minX
                  ? cropBoxTemp.cropChangeX - Math.abs(fw + cropBoxTemp.cropOldW)
                  : minX;
            }
          }
        }
        if (cropBoxTemp.canChangeY) {
          if (cropBoxTemp.changeCropTypeY === 1) {
            if (cropBoxTemp.cropOldH - fh > 0) {
              cropBox.height =
                wrapperH - cropBoxTemp.cropChangeY - fh <= wrapperH - minY
                  ?
                  cropBoxTemp.cropOldH - fh
                  :
                  cropBoxTemp.cropOldH + cropBoxTemp.cropChangeY - minY;
              cropBox.y =
                wrapperH - cropBoxTemp.cropChangeY - fh <= wrapperH - minY
                  ? cropBoxTemp.cropChangeY + fh
                  : minY;
            } else {
              cropBox.height =
                Math.abs(fh) + cropBoxTemp.cropChangeY <= wrapperH
                  ? Math.abs(fh) - cropBoxTemp.cropOldH
                  : wrapperH - cropBoxTemp.cropOldH - cropBoxTemp.cropChangeY;
              cropBox.y = cropBoxTemp.cropChangeY + cropBoxTemp.cropOldH;
            }
          } else if (cropBoxTemp.changeCropTypeY === 2) {
            if (cropBoxTemp.cropOldH + fh > 0) {
              cropBox.height =
                cropBoxTemp.cropOldH + fh + cropBox.y <= wrapperH
                  ? cropBoxTemp.cropOldH + fh
                  : wrapperH - cropBox.y;
              cropBox.y = cropBoxTemp.cropChangeY;
            } else {
              cropBox.height =
                wrapperH - cropBoxTemp.cropChangeY + Math.abs(fh + cropBoxTemp.cropOldH) <=
                wrapperH - minY
                  ? Math.abs(fh + cropBoxTemp.cropOldH)
                  : cropBoxTemp.cropChangeY - minY;
              cropBox.y =
                wrapperH - cropBoxTemp.cropChangeY + Math.abs(fh + cropBoxTemp.cropOldH) <=
                wrapperH - minY
                  ? cropBoxTemp.cropChangeY - Math.abs(fh + cropBoxTemp.cropOldH)
                  : minY;
            }
          }
        }
        if (cropBoxTemp.canChangeX && fixed !== null) {
          let fixedHeight = cropBox.width / cropBox.rate;
          if (fixedHeight + cropBox.y > wrapperH) {
            cropBox.height = wrapperH - cropBox.y;
            cropBox.width = cropBox.height * cropBox.rate
          } else {
            cropBox.height = fixedHeight;
          }
        }
        if (cropBoxTemp.canChangeY && fixed !== null) {
          var fixedWidth = cropBox.height * cropBox.rate;
          if (fixedWidth + cropBox.x > wrapperW) {
            cropBox.width = wrapperW - cropBox.x;
            cropBox.height = cropBox.width / cropBox.rate;
          } else {
            cropBox.width = fixedWidth;
          }
        }
      })
    },

    changeCropEnd() {
      window.removeEventListener("mousemove", this.changeCropNow);
      window.removeEventListener("mouseup", this.changeCropEnd);
      window.removeEventListener("touchmove", this.changeCropNow);
      window.removeEventListener("touchend", this.changeCropEnd);
    }

  }
}
</script>

<style scoped>
@import url('./styles/vue-cutter.scss');
</style>
