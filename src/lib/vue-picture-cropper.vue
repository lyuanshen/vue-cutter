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
      :class="themes.indexOf(theme) !== -1 ? 'theme-' + theme : 'theme-dark'"
    >
      <div class="cropper-box" v-if="showImg">
        <div
          class="cropper-box-canvas"
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
                @mousedown="resizeCropBox($event, false, true, 0, 1)"
          ></span>
          <span class="f fvr"></span>
          <span class="f fhb"></span>
          <span class="f fvl"></span>
          <span class="f dot dot-1"></span>
          <span class="f dot dot-2"></span>
          <span class="f dot dot-3"></span>
          <span class="f dot dot-4"></span>
          <span class="f dot dot-5"></span>
          <span class="f dot dot-6"></span>
          <span class="f dot dot-7"></span>
          <span class="f dot dot-8"></span>
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
    },
    // cropCanOverImageBorder: {
    //   type: Boolean,
    //   default: true
    // },
    canMoveImage: {
      type: Boolean,
      default: true
    },
    cropBoxBoundary: {
      type: [String, Array, Number],
      default: 'auto'
    },
    // 是否开启固定宽高比
    fixed: {
      type: Boolean,
      default: false
    },
    // 宽高比 w/h
    fixedNumber: {
      type: Array,
      default: () => {
        return [1, 1];
      }
    },
    // 固定大小 禁止改变截图框大小
    fixedBox: {
      type: Boolean,
      default: false
    },
    canMoveCropBox:{
      type: Boolean,
      default: true
    },
  },
  data() {
    return {
      themes: ['dark', 'warm', 'pink'],
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
        cropChangeY: ''
      },
      showImg: '',
      // 图片加载
      loading: true,
      rotate: 0,
      support: "",
      // 图片缩放系数
      imgZF: 0.2,
      // 图片信息
      imgZFStatus: '',
      scaling: false,
      scalingSet: '',
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
      },
      ImgMoveData: {
        move: true,
        x: '',
        y: ''
      }
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
    showImg(val) {
      if (val === '' || val === null) {
        return
      }
      this.reload()
      this.initCropBox()
    },
    cropBoxBoundary(val) {
      console.log(val)
    }
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
          if (!this.orientation && (width < max) && (height < max)) {
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
          sourceImageData.x = -(sourceImageData.width - sourceImageData.width * sourceImageData.scale) / 2 +
            (cropperContainer.width - sourceImageData.width * sourceImageData.scale) / 2;
          sourceImageData.y = -(sourceImageData.height - sourceImageData.height * sourceImageData.scale) / 2 +
            (cropperContainer.height - sourceImageData.height * sourceImageData.scale) / 2;
          this.loading = false;
        })
      }
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
      let goScale = true;
      const {overImageBorder} = this;
      if (overImageBorder) {
        let axis = this.getImageAxis(x, y, scale);
        console.log(axis)
      }
      return goScale;
    },

    getImageAxis(x, y, scale) {
      const {sourceImageData,} = this;
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
          return
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

      const {sourceImageData, ImgMoveData} = this

      let nowX = e.clientX ? e.clientX : e.touches[0].clientX;
      let nowY = e.clientY ? e.clientY : e.touches[0].clientY;

      let changeX, changeY;

      changeX = nowX - ImgMoveData.x;
      changeY = nowY - ImgMoveData.y;

      this.$nextTick(() => {
        sourceImageData.x = changeX;
        sourceImageData.y = changeY;
      })

    },

    stopMoveImg(e) {
      window.removeEventListener('mousemove', this.movingImg)
    },

    //初始化截图框
    // type ： '10', '10px', '10%', '10px 10', 'auto' **
    initCropBox(bo) {
      const {showImg, cropBoxBoundary, cropperBox , fixed, fixedNumber} = this
      if (fixed) {

      }
      if (showImg === '' || showImg === null || typeof showImg === 'undefined') return
      cropperBox.cropping = true;
      let cropBoxB = bo || cropBoxBoundary;
      let ty = typeof cropBoxB;
      let boundary = [];
      switch (ty) {
        case "string":
          boundary = cropBoxB.split(' ');
          break;
        case "object":
          boundary = cropBoxB;
          break;
        case "number":
          boundary.push(cropBoxB);
          break;
      }
      if (boundary.length === 1){
        let b = boundary[0];
        if (/\d/.test(b)) {
          if (b.toString().search('px') !== -1) {
            cropperBox.width = b;
            cropperBox.height = b;
          }else if (b.toString().search('%') !== -1){
            let cw = parseFloat(window.getComputedStyle(this.$refs.cropper).width);
            if (cw > 100) {
              this.initCropBox(['80%', '80%'])
              return
            }
            let bs = b.replace(/[^0-9]/ig,"");
            cropperBox.width = cw * bs / 100;
            cropperBox.height = cw * bs / 100;
          }
        }else{
          if (b === 'auto'){
            this.initCropBox(['50%', '50%'])
            return
          }
        }
      }else if (boundary.length === 2){
        let w = boundary[0],
          h = boundary[1];
        let cw = parseFloat(window.getComputedStyle(this.$refs.cropper).width),
          ch = parseFloat(window.getComputedStyle(this.$refs.cropper).height);
       if (w.toString().search('px') !== -1) {
         w = w.replace(/[^0-9]/ig,"");
         h = h.replace(/[^0-9]/ig,"");
         if (w < cw){
           cropperBox.width = w
         }else {
           cropperBox.width = cw - 10
         }
         if (h < ch){
           cropperBox.height = h;
         }else {
           cropperBox.height = ch - 10
         }
       }else if (w.toString().search('%') !== -1){
         w = w.replace(/[^0-9]/ig,"");
         h = h.replace(/[^0-9]/ig,"");
         if (w > 100 || h > 100){
           this.initCropBox('auto');
           return
         }
         cropperBox.width = cw * w / 100;
         cropperBox.height = ch * h / 100;
       }else{
         w = w.toString().replace(/[^0-9]/ig,"");
         h = h.toString().replace(/[^0-9]/ig,"");
         this.initCropBox([w + 'px', h + 'px']);
         return;
       }
      }
      if (fixed){
        let rate = fixedNumber[0]/fixedNumber[1]
        this.changeCropBox(cropperBox.width, cropperBox.width/rate)
      }else{
        this.changeCropBox(cropperBox.width, cropperBox.height)
      }
    },

    changeCropBox(w, h){
      const { cropperBox, cropperContainer } = this
      cropperBox.width = w;
      cropperBox.height = h;
      // if (!this.overImageBorder) {
      //
      // }
      this.$nextTick(() => {
        setTimeout(()=>{
          cropperBox.x = (cropperContainer.width - cropperBox.width) / 2;
          cropperBox.y = (cropperContainer.height - cropperBox.height) / 2;
          cropperBox.ready = true
        },50)
      })
    },

    moveCrop(e){
      const { cropperBox, canMoveCropBox } = this
      e.preventDefault();
      if (!canMoveCropBox) {
        return;
      };

      if (e.touches && e.touches.length === 2) {
        return false;
      }

      window.addEventListener('mousemove',this.movingCropBox);
      window.addEventListener('mouseup',this.leaveCrop)

      let x = e.clientX ? e.clientX : e.touches[0].clientX;
      let y = e.clientY ? e.clientY : e.touches[0].clientY;

      let nowX = x - cropperBox.x,
        nowY = y - cropperBox.y;

      cropperBox.cropX = nowX;
      cropperBox.cropY = nowY;

    },

    movingCropBox(e){
      const  { cropperBox, cropperContainer } = this
      e.preventDefault();

      let nowX = 0;
      let nowY = 0;

      if (e) {
        e.preventDefault();
        nowX = e.clientX ? e.clientX : e.touches[0].clientX;
        nowY = e.clientY ? e.clientY : e.touches[0].clientY;
      }

      this.$nextTick(() => {
        let cx, cy ;
        let fw = nowX - cropperBox.cropX;
        let fh = nowY - cropperBox.cropY;

        if (fw <= 0 ) {
          cx = 2
        }else if(fw + cropperBox.width >= cropperContainer.width) {
          cx = cropperContainer.width - cropperBox.width - 1
        }else {
          cx = fw
        }

        if (fh <= 0) {
          cy = 2
        }else if (fh + cropperBox.height >= cropperContainer.height){
          cy = cropperContainer.height - cropperBox.height - 1
        }else {
          cy = fh
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

    resizeCropBox(e, w, h, typeW, typeH){
      const { cropperBox, fixed } = this
      e.preventDefault();
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
      if (fixed){
        if (cropperBox.canChangeX && cropperBox.canChangeY) {
          cropperBox.canChangeY = 0;
        }
      }
    },

    changeCropNow(e){
      e.preventDefault();
      const { cropperContainer, cropperBox } = this
      let nowX = e.clientX ? e.clientX : e.touches ? e.touches[0].clientX : 0,
       nowY = e.clientY ? e.clientY : e.touches ? e.touches[0].clientY : 0;

      let wrapperW = cropperContainer.width,
        wrapperH = cropperContainer.height;

      // 不能超过的坐标轴
      let minX = 0;
      let minY = 0;


    },

    changeCropEnd(e) {

    }

  }
}
</script>

<style scoped lang="sass">
@import "./styles/index"
</style>
