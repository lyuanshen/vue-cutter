(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("vue-picture-cropper", [], factory);
	else if(typeof exports === 'object')
		exports["vue-picture-cropper"] = factory();
	else
		root["vue-picture-cropper"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 39);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(28)('wks');
var uid = __webpack_require__(29);
var Symbol = __webpack_require__(0).Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),
/* 2 */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.6.11' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(5);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(11);
var createDesc = __webpack_require__(26);
module.exports = __webpack_require__(6) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(25)(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(0);
var core = __webpack_require__(2);
var ctx = __webpack_require__(9);
var hide = __webpack_require__(4);
var has = __webpack_require__(12);
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && has(exports, key)) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(10);
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(3);
var IE8_DOM_DEFINE = __webpack_require__(50);
var toPrimitive = __webpack_require__(51);
var dP = Object.defineProperty;

exports.f = __webpack_require__(6) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),
/* 12 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),
/* 13 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),
/* 14 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),
/* 15 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = true;


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(5);
var document = __webpack_require__(0).document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(58);
var defined = __webpack_require__(15);
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(28)('keys');
var uid = __webpack_require__(29);
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(11).f;
var has = __webpack_require__(12);
var TAG = __webpack_require__(1)('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 25.4.1.5 NewPromiseCapability(C)
var aFunction = __webpack_require__(10);

function PromiseCapability(C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = aFunction(resolve);
  this.reject = aFunction(reject);
}

module.exports.f = function (C) {
  return new PromiseCapability(C);
};


/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_vue_cutter_vue_vue_type_script_lang_js___ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_vue_cutter_vue_vue_type_script_lang_js____default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_vue_cutter_vue_vue_type_script_lang_js___);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_vue_cutter_vue_vue_type_script_lang_js___) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_vue_cutter_vue_vue_type_script_lang_js___[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (__WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_vue_cutter_vue_vue_type_script_lang_js____default.a); 

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mixin = __webpack_require__(43);

var _mixin2 = _interopRequireDefault(_mixin);

var _exif = __webpack_require__(44);

var _exif2 = _interopRequireDefault(_exif);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
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
    },

    // 输出图片压缩比
    outputSize: {
      type: Number,
      default: 1
    },

    outputType: {
      type: String,
      default: "jpeg"
    },

    // 输出截图是否缩放
    full: {
      type: Boolean,
      default: false
    },

    highQuality: {
      type: Boolean,
      default: false
    },

    // 倍数  可渲染当前截图框的n倍 0 - 1000;
    enlarge: {
      type: [Number, String],
      default: 1
    },

    // 上传图片按照原始比例显示
    original: {
      type: Boolean,
      default: false
    }

  },
  data: function data() {
    return {
      app: {
        init: false,
        width: 0,
        height: 0,
        touches: [],
        touchNow: false,
        support: '',
        // 控制emit触发频率
        isCanShow: true
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
        coeStatus: ""
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
        moveY: 0
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
    };
  },

  mixins: [_mixin2.default],
  created: function created() {
    var _this = this;

    this.$nextTick(function () {
      _this.initApp();
      _this.checkedImg(_this.src);
    });
  },

  watch: {
    containerBounding: function containerBounding() {
      this.initApp();
    },

    src: function src(val) {
      if (val !== '') {
        this.checkedImg(this.src);
      }
    },
    app: {
      deep: true,
      handler: function handler() {
        this.preview();
      }
    },
    image: {
      deep: true,
      handler: function handler() {
        this.preview();
      }
    },
    cropBox: {
      deep: true,
      handler: function handler() {
        this.preview();
      }
    }
  },
  mounted: function mounted() {
    this.support = "onwheel" in document.createElement("div") ? "wheel" : document.onmousewheel !== undefined ? "mousewheel" : "DOMMouseScroll";
  },

  methods: {
    initApp: function initApp() {
      var app = this.app,
          containerBounding = this.containerBounding;

      var bounding = containerBounding.split(' ');
      var el = document.getElementById('outer');
      switch (bounding.length) {
        case 1:
          var str0 = bounding[0];
          if (/^[0-9]+.?[0-9]*$/.test(str0)) {
            el.style.width = str0 + 'px';
            el.style.height = str0 + 'px';
          } else {
            el.style.width = str0;
            el.style.height = str0;
          }
          break;
        case 2:
          var str1 = bounding[0];
          var str2 = bounding[1];
          if (/^[0-9]+.?[0-9]*$/.test(str1) && /^[0-9]+.?[0-9]*$/.test(str2)) {
            el.style.width = str1 + 'px';
            el.style.height = str2 + 'px';
          } else if (!/^[0-9]+.?[0-9]*$/.test(str1) && !/^[0-9]+.?[0-9]*$/.test(str2)) {
            el.style.width = str1;
            el.style.height = str2;
          } else {
            console.error('param : `containerBounding` error');
            this.$emit('appInit', 'error');
            return;
          }
          break;
      }
      app.width = parseFloat(window.getComputedStyle(this.$refs.cutter).width);
      app.height = parseFloat(window.getComputedStyle(this.$refs.cutter).height);
      app.init = true;
      this.$emit('appInit', 'success');
    },
    checkedImg: function checkedImg(src) {
      var _this2 = this;

      var image = this.image;

      if (src === null || src === '' || typeof src === 'undefined') {
        image.url = '';
        return;
      }

      image.loading = true;
      image.rotate = 0;
      image.scale = 1;

      var img = new Image();
      img.onload = function () {
        if (src === '') {
          _this2.$emit("imgLoad", "error");
          _this2.$emit("img-load", "error");
          return false;
        }

        var width = img.width;
        var height = img.height;

        _exif2.default.getData(img).then(function (data) {
          image.orientation = data.orientation || 1;
          var max = _this2.maxImgSize;
          if (!image.orientation && width < max && height < max) {
            image.url = _this2.img;
            return;
          }

          if (width > max) {
            height = height / width * max;
            width = max;
          }

          if (height > max) {
            width = width / height * max;
            height = max;
          }
          _this2.checkOrientationImage(img, image.orientation, width, height);
          setTimeout(function () {
            if (image.url !== null) {
              _this2.reload();
            }
          }, 400);
        });
      };

      img.onerror = function () {
        _this2.$emit("imgLoad", "error");
        _this2.$emit("img-load", "error");
      };
      // 判断如果不是base64图片 再添加crossOrigin属性，否则会导致iOS低版本(10.2)无法显示图片
      if (src.substring(0, 4) !== "data") {
        img.crossOrigin = "";
      }
      if (this.isIE) {
        var xhr = new XMLHttpRequest();
        xhr.onload = function () {
          img.src = URL.createObjectURL(this.response);
        };
        xhr.open("GET", this.src, true);
        xhr.responseType = "blob";
        xhr.send();
      } else {
        img.src = src;
      }
    },
    reload: function reload() {
      var _this3 = this;

      var img = new Image();
      var image = this.image,
          app = this.app;

      img.onload = function () {
        image.width = img.width;
        image.height = img.height;

        image.scale = _this3.checkedMode();

        image.x = -(image.width - image.width * image.scale) / 2 + (app.width - image.width * image.scale) / 2;
        image.y = -(image.height - image.height * image.scale) / 2 + (app.height - image.height * image.scale) / 2;

        _this3.goAutoCrop();

        setTimeout(function () {
          image.loading = false;
        }, 0);

        // 图片加载成功的回调
        _this3.$emit("img-load", "success");
        _this3.$emit("imgLoad", "success");
      };

      img.onerror = function () {
        _this3.$emit("imgLoad", "error");
        _this3.$emit("img-load", "error");
      };
      img.src = image.url;
    },
    checkedMode: function checkedMode() {
      var scale = 1;
      var image = this.image,
          mode = this.mode,
          app = this.app;

      var imgW = image.width;
      var imgH = image.height;
      var arr = mode.split(" ");
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
            var str = arr[0];

            if (str.search("px") !== -1) {
              str = str.replace("px", "");
              imgW = parseFloat(str);
              var scaleX = imgW / image.width;
              var scaleY = 1;
              var strH = arr[1];
              if (strH.search("px") !== -1) {
                strH = strH.replace("px", "");
                imgH = parseFloat(strH);
                scaleY = imgH / image.height;
              }
              scale = Math.min(scaleX, scaleY);
            }

            if (str.search("%") !== -1) {
              str = str.replace("%", "");
              imgW = parseFloat(str) / 100 * app.width;
              scale = imgW / image.width;
            }

            if (arr.length === 2 && str === "auto") {
              var str2 = arr[1];
              if (str2.search("px") !== -1) {
                str2 = str2.replace("px", "");
                imgH = parseFloat(str2);
                scale = imgH / image.width;
              }
              if (str2.search("%") !== -1) {
                str2 = str2.replace("%", "");
                imgH = parseFloat(str2) / 100 * app.height;
                scale = imgH / image.height;
              }
            }
          } catch (e) {
            scale = 1;
          }
      }
      return scale;
    },
    goAutoCrop: function goAutoCrop() {
      var image = this.image,
          cropBox = this.cropBox,
          app = this.app,
          canCropOverImg = this.canCropOverImg,
          cropBoxBounding = this.cropBoxBounding,
          fixed = this.fixed;

      if (image.url === '' || image.url === null) return;
      app.initCropBox = false;
      this.clearCrop();
      var maxWidth = app.width;
      var maxHeight = app.height;
      if (!canCropOverImg) {
        var switchWH = Math.abs(image.rotate) % 2 > 0;
        var imgW = (switchWH ? image.height : image.width) * image.scale;
        var imgH = (switchWH ? image.width : image.height) * image.scale;
        maxWidth = imgW < maxWidth ? imgW : maxWidth;
        maxHeight = imgH < maxHeight ? imgH : maxHeight;
      }

      if (fixed !== null && fixed.length === 2) {
        cropBox.rate = fixed[0] / fixed[1];
      }

      var arr = cropBoxBounding.split(" ");
      var w = 0,
          h = 0;
      switch (arr.length) {
        case 1:
          if (arr[0] === 'auto') {
            w = app.width * 0.8;
          } else if (arr[0].search('px') !== -1) {
            var n = arr[0].replace(/[^0-9]/ig, "");
            w = n;
          } else if (arr[0].search('%') !== -1) {
            var _n = arr[0].replace(/[^0-9]/ig, "");
            w = app.width * _n / 100;
          } else if (/^\d{1,}$/.test(arr[0])) {
            w = arr[0];
          }
          if (fixed === null) cropBox.rate = 1;
          h = w / cropBox.rate;
          break;
        case 2:
          if (arr[0].search('px') !== -1) {
            var _n2 = arr[0].replace(/[^0-9]/ig, "");
            w = _n2;
            if (cropBox.rate !== null) h = w / cropBox.rate;
            h = arr[1].replace(/[^0-9]/ig, "");
          } else if (arr[0].search('%') !== -1) {
            var _n3 = arr[0].replace(/[^0-9]/ig, "");
            w = app.width * _n3 / 100;
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
      h = parseFloat(h);

      this.changeCrop(w, h);
    },
    changeCrop: function changeCrop(w, h) {
      var cropBox = this.cropBox,
          canCropOverImg = this.canCropOverImg,
          app = this.app;

      if (canCropOverImg) {
        var axis = this.getImgAxis();
        var imgW = axis.x2 - axis.x1;
        var imgH = axis.y2 - axis.y1;
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

      this.$nextTick(function () {
        cropBox.x = (app.width - cropBox.width) / 2;
        cropBox.y = (app.height - cropBox.height) / 2;
        cropBox.initCropBox = true;
      });
    },
    clearCrop: function clearCrop() {
      var cropBox = this.cropBox;

      cropBox.width = 0;
      cropBox.height = 0;
      cropBox.x = 0;
      cropBox.y = 0;
    },
    startMove: function startMove(e) {
      e.preventDefault();
      var imageMoveTemp = this.imageMoveTemp,
          app = this.app,
          image = this.image;
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
    moveImg: function moveImg(e) {
      e.preventDefault();
      var imageMoveTemp = this.imageMoveTemp,
          image = this.image,
          canImgMoved = this.canImgMoved,
          canCropOverImg = this.canCropOverImg,
          cropBox = this.cropBox;

      if (e.touches && e.touches.length === 2) {
        this.touches = e.touches;
        window.addEventListener("touchmove", this.touchScale);
        window.addEventListener("touchend", this.cancelTouchScale);
        window.removeEventListener("touchmove", this.moveImg);
        return false;
      }

      if (!canImgMoved) return;

      var nowX = e.clientX ? e.clientX : e.touches[0].clientX;
      var nowY = e.clientY ? e.clientY : e.touches[0].clientY;

      var changeX = void 0,
          changeY = void 0;
      changeX = nowX - imageMoveTemp.moveX;
      changeY = nowY - imageMoveTemp.moveY;

      this.$nextTick(function () {

        if (!canCropOverImg) {
          var axis = this.getImgAxis(changeX, changeY, image.scale);
          var cropAxis = this.getCropAxis();
          var imgW = image.width * image.scale;
          var imgH = image.height * image.scale;
          var maxLeft = void 0,
              maxTop = void 0,
              maxRight = void 0,
              maxBottom = void 0;

          switch (image.rotate) {
            case 1:
            case -1:
            case 3:
            case -3:
              maxLeft = cropBox.x - image.width * (1 - image.scale) / 2 - (imgW - imgH) / 2;
              maxTop = cropBox.y - image.height * (1 - image.scale) / 2 - (imgH - imgW) / 2;
              maxRight = maxLeft - imgW + cropBox.width + (imgW - imgH);
              maxBottom = maxTop - imgH + cropBox.height + (imgH - imgW);
              break;
            default:
              maxLeft = cropBox.x - image.width * (1 - image.scale) / 2;
              maxTop = cropBox.y - image.height * (1 - image.scale) / 2;
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
      });
    },
    leaveImg: function leaveImg(e) {
      window.removeEventListener("mousemove", this.moveImg);
      window.removeEventListener("touchmove", this.moveImg);
      window.removeEventListener("mouseup", this.leaveImg);
      window.removeEventListener("touchend", this.leaveImg);
      // 触发图片移动事件
      this.$emit("imgMoving", {
        moving: false
      });
    },
    touchScale: function touchScale(e) {
      e.preventDefault();
      var image = this.image,
          app = this.app,
          canImgScale = this.canImgScale;

      if (!canImgScale) return;
      var scale = image.scale;
      // 记录变化量
      // 第一根手指
      var oldTouch1 = {
        x: app.touches[0].clientX,
        y: app.touches[0].clientY
      };
      var newTouch1 = {
        x: e.touches[0].clientX,
        y: e.touches[0].clientY
      };

      // 第二根手指
      var oldTouch2 = {
        x: app.touches[1].clientX,
        y: app.touches[1].clientY
      };
      var newTouch2 = {
        x: e.touches[1].clientX,
        y: e.touches[1].clientY
      };

      var oldL = Math.sqrt(Math.pow(oldTouch1.x - oldTouch2.x, 2) + Math.pow(oldTouch1.y - oldTouch2.y, 2));
      var newL = Math.sqrt(Math.pow(newTouch1.x - newTouch2.x, 2) + Math.pow(newTouch1.y - newTouch2.y, 2));

      var cha = newL - oldL;
      var coe = 1;
      coe = coe / image.width > coe / image.height ? coe / image.height : coe / image.width;
      coe = coe > 0.1 ? 0.1 : coe;
      var num = coe * cha;

      if (!app.touchNow) {
        app.touchNow = true;
        if (cha > 0) {
          scale += Math.abs(num);
        } else if (cha < 0) {
          scale > Math.abs(num) ? scale -= Math.abs(num) : scale;
        }
        app.touches = e.touches;
        setTimeout(function () {
          app.touchNow = false;
        }, 8);

        if (!this.checkoutImgAxis(image.x, image.y, scale)) return false;

        image.scale = scale;
      }
    },
    cancelTouchScale: function cancelTouchScale() {
      window.removeEventListener("touchmove", this.touchScale);
    },
    scaleImg: function scaleImg() {
      window.addEventListener(this.support, this.changeSize, this.passive);
    },
    cancelScale: function cancelScale() {
      window.removeEventListener(this.support, this.changeSize);
    },
    changeSize: function changeSize(e) {
      e.preventDefault();
      var image = this.image,
          canImgScale = this.canImgScale;

      if (!canImgScale) return;
      var scale = image.scale;
      var change = e.deltaY || e.wheelDelta;
      var isFirefox = navigator.userAgent.indexOf("Firefox");
      change = isFirefox > 0 ? change * 30 : change;
      // 修复ie的滚动缩放
      if (this.isIE) {
        change = -change;
      }
      var coe = image.izf;
      coe = coe / image.width > coe / image.height ? coe / image.width : coe / image.height;
      var num = coe * change;
      num < 0 ? scale += Math.abs(num) : scale > Math.abs(num) ? scale -= Math.abs(num) : scale;
      // 延迟0.1s 每次放大大或者缩小的范围
      var status = num < 0 ? "add" : "reduce";
      if (status !== image.coeStatus) {
        image.coeStatus = status;
        image.izf = 0.2;
      }
      if (!image.scaling) {
        image.scalingSet = setTimeout(function () {
          image.scaling = false;
          image.izf = image.izf += 0.01;
        }, 50);
      }
      image.scaling = true;
      if (!this.checkoutImgAxis(image.x, image.y, scale)) return false;

      image.scale = scale;
    },
    checkoutImgAxis: function checkoutImgAxis(x, y, scale) {
      var image = this.image,
          canCropOverImg = this.canCropOverImg;

      x = x || image.x;
      y = y || image.y;
      scale = scale || image.scale;
      var canGo = true;
      // 开始校验 如果说缩放之后的坐标在截图框外 则阻止缩放

      if (!canCropOverImg) {
        var axis = this.getImgAxis(x, y, scale);
        var cropAxis = this.getCropAxis();
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
    getImgAxis: function getImgAxis(x, y, scale) {
      var image = this.image;

      x = x || image.x;
      y = y || image.y;
      scale = scale || image.scale;

      // 如果设置了截图框在图片内， 那么限制截图框不能超过图片的坐标
      // 图片的坐标
      var obj = {
        x1: 0,
        x2: 0,
        y1: 0,
        y2: 0
      };
      var imgW = image.width * image.scale;
      var imgH = image.height * image.scale;
      switch (image.rotate) {
        case 0:
          obj.x1 = x + image.width * (1 - scale) / 2;
          obj.x2 = obj.x1 + image.width * scale;
          obj.y1 = y + image.height * (1 - scale) / 2;
          obj.y2 = obj.y1 + image.height * scale;
          break;
        case 1:
        case -1:
        case 3:
        case -3:
          obj.x1 = x + image.width * (1 - scale) / 2 + (imgW - imgH) / 2;
          obj.x2 = obj.x1 + image.height * scale;
          obj.y1 = y + image.height * (1 - scale) / 2 + (imgH - imgW) / 2;
          obj.y2 = obj.y1 + image.width * scale;
          break;
        default:
          obj.x1 = x + image.width * (1 - scale) / 2;
          obj.x2 = obj.x1 + image.width * scale;
          obj.y1 = y + image.height * (1 - scale) / 2;
          obj.y2 = obj.y1 + image.height * scale;
          break;
      }
      return obj;
    },
    cropMove: function cropMove(e) {
      e.preventDefault();
      var canCropMove = this.canCropMove,
          cropBox = this.cropBox,
          cropBoxTemp = this.cropBoxTemp;

      if (!canCropMove) {
        this.startMove(e);
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

      var x = e.clientX ? e.clientX : e.touches[0].clientX;
      var y = e.clientY ? e.clientY : e.touches[0].clientY;

      var newX = void 0,
          newY = void 0;
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
    moveCrop: function moveCrop(e) {
      var _this4 = this;

      e.preventDefault();
      var canCropOverImg = this.canCropOverImg,
          cropBox = this.cropBox,
          cropBoxTemp = this.cropBoxTemp,
          app = this.app;

      var nowX = 0;
      var nowY = 0;
      if (e) {
        e.preventDefault();
        nowX = e.clientX ? e.clientX : e.touches[0].clientX;
        nowY = e.clientY ? e.clientY : e.touches[0].clientY;
      }

      this.$nextTick(function () {
        var cx = void 0,
            cy = void 0;
        var fw = nowX - cropBoxTemp.cropX;
        var fh = nowY - cropBoxTemp.cropY;

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
          var axis = _this4.getImgAxis();
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

        _this4.$emit("cropMoving", {
          moving: true,
          axis: _this4.getCropAxis()
        });
      });
    },
    leaveCrop: function leaveCrop() {
      window.removeEventListener("mousemove", this.moveCrop);
      window.removeEventListener("mouseup", this.leaveCrop);
      window.removeEventListener("touchmove", this.moveCrop);
      window.removeEventListener("touchend", this.leaveCrop);
      this.$emit("cropMoving", {
        moving: false,
        axis: this.getCropAxis()
      });
    },
    getCropAxis: function getCropAxis() {
      var obj = {
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
    resizeCropBox: function resizeCropBox(e, w, h, typeW, typeH, dot) {
      var cropBoxTemp = this.cropBoxTemp,
          cropBox = this.cropBox,
          fixed = this.fixed;

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

      console.log(cropBoxTemp);

      if (fixed !== null) {
        if (!(cropBoxTemp.canChangeX && cropBoxTemp.canChangeY)) {
          cropBoxTemp.canChangeY = 0;
          cropBoxTemp.canChangeX = 0;
        }
      }
    },
    changeCropNow: function changeCropNow(e) {
      var cropBoxTemp = this.cropBoxTemp,
          cropBox = this.cropBox,
          canCropOverImg = this.canCropOverImg,
          fixed = this.fixed,
          app = this.app;

      e.preventDefault();
      var nowX = e.clientX ? e.clientX : e.touches ? e.touches[0].clientX : 0;
      var nowY = e.clientY ? e.clientY : e.touches ? e.touches[0].clientY : 0;
      // 容器的宽高
      var wrapperW = app.width;
      var wrapperH = app.height;
      // 不能超过的坐标轴
      var minX = 0;
      var minY = 0;

      if (!canCropOverImg) {
        var axis = this.getImgAxis();
        var imgW = axis.x2;
        var imgH = axis.y2;
        minX = axis.x1 > 0 ? axis.x1 : 0;
        minY = axis.y1 > 0 ? axis.y1 : 0;
        if (wrapperW > imgW) {
          wrapperW = imgW;
        }
        if (wrapperH > imgH) {
          wrapperH = imgH;
        }
      }
      this.$nextTick(function () {
        var fw = nowX - cropBoxTemp.cropX;
        var fh = nowY - cropBoxTemp.cropY;
        if (fixed !== null) {
          switch (cropBoxTemp.dot) {
            case 1:
              if (fw > fh) {
                fh = fw / cropBox.rate;
              } else {
                fw = fh * cropBox.rate;
              }
              break;
            case 3:
              if (Math.abs(fw) > Math.abs(fh)) {
                fh = -fw / cropBox.rate;
              } else {
                fw = -fh * cropBox.rate;
              }
          }
        }
        if (cropBoxTemp.canChangeX) {
          if (cropBoxTemp.changeCropTypeX === 1) {
            if (cropBoxTemp.cropOldW - fw > 0) {
              cropBox.width = wrapperW - cropBoxTemp.cropChangeX - fw <= wrapperW - minX ? cropBoxTemp.cropOldW - fw : cropBoxTemp.cropOldW + cropBoxTemp.cropChangeX - minX;
              cropBox.x = wrapperW - cropBoxTemp.cropChangeX - fw <= wrapperW - minX ? cropBoxTemp.cropChangeX + fw : minX;
            } else {
              cropBox.width = Math.abs(fw) + cropBoxTemp.cropChangeX <= wrapperW ? Math.abs(fw) - cropBoxTemp.cropOldW : wrapperW - cropBoxTemp.cropOldW - cropBoxTemp.cropChangeX;
              cropBox.x = cropBoxTemp.cropChangeX + cropBoxTemp.cropOldW;
            }
          } else if (cropBoxTemp.changeCropTypeX === 2) {
            if (cropBoxTemp.cropOldW + fw > 0) {
              cropBox.width = cropBoxTemp.cropOldW + fw + cropBox.x <= wrapperW ? cropBoxTemp.cropOldW + fw : wrapperW - cropBox.x;
              cropBox.x = cropBoxTemp.cropChangeX;
            } else {
              cropBox.width = wrapperW - cropBoxTemp.cropChangeX + Math.abs(fw + cropBoxTemp.cropOldW) <= wrapperW - minX ? Math.abs(fw + cropBoxTemp.cropOldW) : cropBoxTemp.cropChangeX - minX;
              cropBox.x = wrapperW - cropBoxTemp.cropChangeX + Math.abs(fw + cropBoxTemp.cropOldW) <= wrapperW - minX ? cropBoxTemp.cropChangeX - Math.abs(fw + cropBoxTemp.cropOldW) : minX;
            }
          }
        }
        if (cropBoxTemp.canChangeY) {
          if (cropBoxTemp.changeCropTypeY === 1) {
            if (cropBoxTemp.cropOldH - fh > 0) {
              cropBox.height = wrapperH - cropBoxTemp.cropChangeY - fh <= wrapperH - minY ? cropBoxTemp.cropOldH - fh : cropBoxTemp.cropOldH + cropBoxTemp.cropChangeY - minY;
              cropBox.y = wrapperH - cropBoxTemp.cropChangeY - fh <= wrapperH - minY ? cropBoxTemp.cropChangeY + fh : minY;
            } else {
              cropBox.height = Math.abs(fh) + cropBoxTemp.cropChangeY <= wrapperH ? Math.abs(fh) - cropBoxTemp.cropOldH : wrapperH - cropBoxTemp.cropOldH - cropBoxTemp.cropChangeY;
              cropBox.y = cropBoxTemp.cropChangeY + cropBoxTemp.cropOldH;
            }
          } else if (cropBoxTemp.changeCropTypeY === 2) {
            if (cropBoxTemp.cropOldH + fh > 0) {
              cropBox.height = cropBoxTemp.cropOldH + fh + cropBox.y <= wrapperH ? cropBoxTemp.cropOldH + fh : wrapperH - cropBox.y;
              cropBox.y = cropBoxTemp.cropChangeY;
            } else {
              cropBox.height = wrapperH - cropBoxTemp.cropChangeY + Math.abs(fh + cropBoxTemp.cropOldH) <= wrapperH - minY ? Math.abs(fh + cropBoxTemp.cropOldH) : cropBoxTemp.cropChangeY - minY;
              cropBox.y = wrapperH - cropBoxTemp.cropChangeY + Math.abs(fh + cropBoxTemp.cropOldH) <= wrapperH - minY ? cropBoxTemp.cropChangeY - Math.abs(fh + cropBoxTemp.cropOldH) : minY;
            }
          }
        }
        if (cropBoxTemp.canChangeX && fixed !== null) {
          var fixedHeight = cropBox.width / cropBox.rate;
          if (fixedHeight + cropBox.y > wrapperH) {
            cropBox.height = wrapperH - cropBox.y;
            cropBox.width = cropBox.height * cropBox.rate;
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
      });
    },
    changeCropEnd: function changeCropEnd() {
      window.removeEventListener("mousemove", this.changeCropNow);
      window.removeEventListener("mouseup", this.changeCropEnd);
      window.removeEventListener("touchmove", this.changeCropNow);
      window.removeEventListener("touchend", this.changeCropEnd);
    },
    getCropChecked: function getCropChecked(cb) {
      var image = this.image,
          cropBox = this.cropBox,
          full = this.full,
          highQuality = this.highQuality,
          enlarge = this.enlarge;

      var canvas = document.createElement("canvas");
      var img = new Image();
      var rotate = image.rotate;
      var trueWidth = image.width;
      var trueHeight = image.height;
      var cropOffsertX = cropBox.x;
      var cropOffsertY = cropBox.y;
      img.onload = function () {
        if (image.width !== 0) {
          var ctx = canvas.getContext("2d");
          var dpr = 1;
          if (highQuality && !full) {
            dpr = window.devicePixelRatio;
          }
          if (enlarge !== 1 && !full) {
            dpr = Math.abs(Number(enlarge));
          }
          var width = cropBox.width * dpr;
          var height = cropBox.height * dpr;
          var imgW = trueWidth * image.scale * dpr;
          var imgH = trueHeight * image.scale * dpr;
          // 图片x轴偏移
          var dx = (image.x - cropOffsertX + image.width * (1 - image.scale) / 2) * dpr;
          // 图片y轴偏移
          var dy = (image.y - cropOffsertY + image.height * (1 - image.scale) / 2) * dpr;
          //保存状态
          setCanvasSize(width, height);
          ctx.save();
          switch (rotate) {
            case 0:
              if (full) {
                ctx.drawImage(img, dx, dy, imgW, imgH);
              } else {
                // 输出原图比例截图
                setCanvasSize(width / image.scale, height / image.scale);
                ctx.drawImage(img, dx / image.scale, dy / image.scale, imgW / image.scale, imgH / image.scale);
              }
              break;
            case 1:
            case -3:
              if (full) {
                // 换算图片旋转后的坐标弥补
                dx = dx + (imgW - imgH) / 2;
                dy = dy + (imgH - imgW) / 2;
                ctx.rotate(rotate * 90 * Math.PI / 180);
                ctx.drawImage(img, dy, -dx - imgH, imgW, imgH);
              } else {
                setCanvasSize(width / image.scale, height / image.scale);
                // 换算图片旋转后的坐标弥补
                dx = dx / image.scale + (imgW / image.scale - imgH / image.scale) / 2;
                dy = dy / image.scale + (imgH / image.scale - imgW / image.scale) / 2;
                ctx.rotate(rotate * 90 * Math.PI / 180);
                ctx.drawImage(img, dy, -dx - imgH / image.scale, imgW / image.scale, imgH / image.scale);
              }
              break;
            case 2:
            case -2:
              if (full) {
                ctx.rotate(rotate * 90 * Math.PI / 180);
                ctx.drawImage(img, -dx - imgW, -dy - imgH, imgW, imgH);
              } else {
                setCanvasSize(width / image.scale, height / image.scale);
                ctx.rotate(rotate * 90 * Math.PI / 180);
                dx = dx / image.scale;
                dy = dy / image.scale;
                ctx.drawImage(img, -dx - imgW / image.scale, -dy - imgH / image.scale, imgW / image.scale, imgH / image.scale);
              }
              break;
            case 3:
            case -1:
              if (full) {
                // 换算图片旋转后的坐标弥补
                dx = dx + (imgW - imgH) / 2;
                dy = dy + (imgH - imgW) / 2;
                ctx.rotate(rotate * 90 * Math.PI / 180);
                ctx.drawImage(img, -dy - imgW, dx, imgW, imgH);
              } else {
                setCanvasSize(width / image.scale, height / image.scale);
                // 换算图片旋转后的坐标弥补
                dx = dx / image.scale + (imgW / image.scale - imgH / image.scale) / 2;
                dy = dy / image.scale + (imgH / image.scale - imgW / image.scale) / 2;
                ctx.rotate(rotate * 90 * Math.PI / 180);
                ctx.drawImage(img, -dy - imgW / image.scale, dx, imgW / image.scale, imgH / image.scale);
              }
              break;
            default:
              if (full) {
                ctx.drawImage(img, dx, dy, imgW, imgH);
              } else {
                // 输出原图比例截图
                setCanvasSize(width / image.scale, height / image.scale);
                ctx.drawImage(img, dx / image.scale, dy / image.scale, imgW / image.scale, imgH / image.scale);
              }
          }
          ctx.restore();
        } else {
          var _width = trueWidth * image.scale;
          var _height = trueHeight * image.scale;
          var _ctx = canvas.getContext("2d");
          _ctx.save();
          switch (rotate) {
            case 0:
              setCanvasSize(_width, _height);
              _ctx.drawImage(img, 0, 0, _width, _height);
              break;
            case 1:
            case -3:
              // 旋转90度 或者-270度 宽度和高度对调
              setCanvasSize(_height, _width);
              _ctx.rotate(rotate * 90 * Math.PI / 180);
              _ctx.drawImage(img, 0, -_height, _width, _height);
              break;
            case 2:
            case -2:
              setCanvasSize(_width, _height);
              _ctx.rotate(rotate * 90 * Math.PI / 180);
              _ctx.drawImage(img, -_width, -_height, _width, _height);
              break;
            case 3:
            case -1:
              setCanvasSize(_height, _width);
              _ctx.rotate(rotate * 90 * Math.PI / 180);
              _ctx.drawImage(img, -_width, 0, _width, _height);
              break;
            default:
              setCanvasSize(_width, _height);
              _ctx.drawImage(img, 0, 0, _width, _height);
          }
          _ctx.restore();
        }
        cb(canvas);
      };

      // 判断图片是否是base64
      var s = this.src.substring(0, 4);
      if (s !== "data") {
        img.crossOrigin = "Anonymous";
      }
      img.src = image.url;

      function setCanvasSize(width, height) {
        canvas.width = Math.round(width);
        canvas.height = Math.round(height);
      }
    },


    // 获取转换成base64 的图片信息
    getBase64Data: function getBase64Data(cb) {
      var _this5 = this;

      this.getCropChecked(function (data) {
        cb(data.toDataURL("image/" + _this5.outputType, _this5.outputSize));
      });
    },


    //canvas获取为blob对象
    getBlobData: function getBlobData(cb) {
      var _this6 = this;

      this.getCropChecked(function (data) {
        data.toBlob(function (blob) {
          return cb(blob);
        }, "image/" + _this6.outputType, _this6.outputSize);
      });
    },


    // 向左边旋转
    rotateLeft: function rotateLeft() {
      this.image.rotate = this.image.rotate <= -3 ? 0 : this.image.rotate - 1;
    },


    // 向右边旋转
    rotateRight: function rotateRight() {
      this.image.rotate = this.image.rotate >= 3 ? 0 : this.image.rotate + 1;
    },


    // 清除旋转
    rotateClear: function rotateClear() {
      this.image.rotate = 0;
    },
    relativeZoom: function relativeZoom(params) {
      var image = this.image;

      var scale = image.scale;
      var num = params || 1;
      var coe = 20;
      coe = coe / image.width > coe / image.height ? coe / image.height : coe / image.width;
      num = num * coe;
      num > 0 ? scale += Math.abs(num) : scale > Math.abs(num) ? scale -= Math.abs(num) : scale;
      if (!this.checkoutImgAxis(image.x, image.y, scale)) {
        return false;
      }
      image.scale = scale;
    },
    addLocalImage: function addLocalImage() {
      var el = document.getElementById('uploadFile');
      el.click();
    },
    uploadPic: function uploadPic(params) {
      var url = window.URL.createObjectURL(params.target.files[0]);
      this.checkedImg(url);
    },
    preview: function preview() {
      var app = this.app,
          cropBox = this.cropBox,
          image = this.image;

      if (app.isCanShow) {
        app.isCanShow = false;
        setTimeout(function () {
          app.isCanShow = true;
        }, 16);
      } else {
        return false;
      }
      var w = cropBox.width;
      var h = cropBox.height;
      var scale = image.scale;
      var obj = {};
      obj.div = {
        width: w + "px",
        height: h + "px"
      };
      var transformX = (image.x - cropBox.x) / scale;
      var transformY = (image.y - cropBox.y) / scale;
      var transformZ = 0;
      obj.w = w;
      obj.h = h;
      obj.url = image.url;
      obj.img = {
        width: image.width + "px",
        height: image.height + "px",
        transform: "scale(" + image.scale + ")translate3d(" + transformX + "px, " + transformY + "px, " + transformZ + "px)rotateZ(" + image.rotate * 90 + "deg)"
      };

      obj.html = "\n      <div class=\"show-preview\" style=\"width: " + obj.w + "px; height: " + obj.h + "px,; overflow: hidden\">\n        <div style=\"width: " + w + "px; height: " + h + "px\">\n          <img src=" + obj.url + " style=\"width: " + image.width + "px; height: " + image.height + "px; transform:\n          scale(" + scale + ")translate3d(" + transformX + "px, " + transformY + "px, " + transformZ + "px)rotateZ(" + image.rotate * 90 + "deg)\">\n        </div>\n      </div>";
      this.$emit("preview", obj);
    }
  }
};
module.exports = exports.default;

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(16);
var $export = __webpack_require__(8);
var redefine = __webpack_require__(52);
var hide = __webpack_require__(4);
var Iterators = __webpack_require__(7);
var $iterCreate = __webpack_require__(53);
var setToStringTag = __webpack_require__(20);
var getPrototypeOf = __webpack_require__(61);
var ITERATOR = __webpack_require__(1)('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(14);
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(2);
var global = __webpack_require__(0);
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__(16) ? 'pure' : 'global',
  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
});


/***/ }),
/* 29 */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),
/* 30 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(0).document;
module.exports = document && document.documentElement;


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(13);
var TAG = __webpack_require__(1)('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject = __webpack_require__(3);
var aFunction = __webpack_require__(10);
var SPECIES = __webpack_require__(1)('species');
module.exports = function (O, D) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(9);
var invoke = __webpack_require__(73);
var html = __webpack_require__(31);
var cel = __webpack_require__(17);
var global = __webpack_require__(0);
var process = global.process;
var setTask = global.setImmediate;
var clearTask = global.clearImmediate;
var MessageChannel = global.MessageChannel;
var Dispatch = global.Dispatch;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var defer, channel, port;
var run = function () {
  var id = +this;
  // eslint-disable-next-line no-prototype-builtins
  if (queue.hasOwnProperty(id)) {
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};
var listener = function (event) {
  run.call(event.data);
};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!setTask || !clearTask) {
  setTask = function setImmediate(fn) {
    var args = [];
    var i = 1;
    while (arguments.length > i) args.push(arguments[i++]);
    queue[++counter] = function () {
      // eslint-disable-next-line no-new-func
      invoke(typeof fn == 'function' ? fn : Function(fn), args);
    };
    defer(counter);
    return counter;
  };
  clearTask = function clearImmediate(id) {
    delete queue[id];
  };
  // Node.js 0.8-
  if (__webpack_require__(13)(process) == 'process') {
    defer = function (id) {
      process.nextTick(ctx(run, id, 1));
    };
  // Sphere (JS game engine) Dispatch API
  } else if (Dispatch && Dispatch.now) {
    defer = function (id) {
      Dispatch.now(ctx(run, id, 1));
    };
  // Browsers with MessageChannel, includes WebWorkers
  } else if (MessageChannel) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = listener;
    defer = ctx(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts) {
    defer = function (id) {
      global.postMessage(id + '', '*');
    };
    global.addEventListener('message', listener, false);
  // IE8-
  } else if (ONREADYSTATECHANGE in cel('script')) {
    defer = function (id) {
      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function () {
        html.removeChild(this);
        run.call(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function (id) {
      setTimeout(ctx(run, id, 1), 0);
    };
  }
}
module.exports = {
  set: setTask,
  clear: clearTask
};


/***/ }),
/* 35 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return { e: false, v: exec() };
  } catch (e) {
    return { e: true, v: e };
  }
};


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(3);
var isObject = __webpack_require__(5);
var newPromiseCapability = __webpack_require__(21);

module.exports = function (C, x) {
  anObject(C);
  if (isObject(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(82);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(84).default
var update = add("63dfda1d", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./vue-cutter.vue?vue&type=style&index=0&id=c4df5aae&scoped=true&lang=css&", function() {
     var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./vue-cutter.vue?vue&type=style&index=0&id=c4df5aae&scoped=true&lang=css&");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 38 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VueCutter = undefined;

var _vueCutter = __webpack_require__(40);

var _vueCutter2 = _interopRequireDefault(_vueCutter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var install = function install(Vue) {
  Vue.component(_vueCutter2.default.name, _vueCutter2.default);
};

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

exports.VueCutter = _vueCutter2.default;
exports.default = {
  version: '1.0.2',
  VueCutter: _vueCutter2.default,
  install: install,
  vueCutter: _vueCutter2.default
};

/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__vue_cutter_vue_vue_type_template_id_c4df5aae_scoped_true___ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__vue_cutter_vue_vue_type_script_lang_js___ = __webpack_require__(22);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_1__vue_cutter_vue_vue_type_script_lang_js___) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_1__vue_cutter_vue_vue_type_script_lang_js___[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__vue_cutter_vue_vue_type_style_index_0_id_c4df5aae_scoped_true_lang_css___ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__node_modules_vue_loader_lib_runtime_componentNormalizer_js__ = __webpack_require__(86);






/* normalize component */

var component = Object(__WEBPACK_IMPORTED_MODULE_3__node_modules_vue_loader_lib_runtime_componentNormalizer_js__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_1__vue_cutter_vue_vue_type_script_lang_js___["default"],
  __WEBPACK_IMPORTED_MODULE_0__vue_cutter_vue_vue_type_template_id_c4df5aae_scoped_true___["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_0__vue_cutter_vue_vue_type_template_id_c4df5aae_scoped_true___["b" /* staticRenderFns */],
  false,
  null,
  "c4df5aae",
  null
  
)

/* hot reload */
if (false) {
  var api = require("F:\\personalProject\\vue-cutter\\node_modules\\vue-hot-reload-api\\dist\\index.js")
  api.install(require('vue'))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('c4df5aae')) {
      api.createRecord('c4df5aae', component.options)
    } else {
      api.reload('c4df5aae', component.options)
    }
    module.hot.accept("./vue-cutter.vue?vue&type=template&id=c4df5aae&scoped=true&", function () {
      api.rerender('c4df5aae', {
        render: render,
        staticRenderFns: staticRenderFns
      })
    })
  }
}
component.options.__file = "src/lib/vue-cutter.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_vue_cutter_vue_vue_type_template_id_c4df5aae_scoped_true___ = __webpack_require__(42);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_vue_cutter_vue_vue_type_template_id_c4df5aae_scoped_true___["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_vue_cutter_vue_vue_type_template_id_c4df5aae_scoped_true___["b"]; });


/***/ }),
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      directives: [
        {
          name: "show",
          rawName: "v-show",
          value: _vm.app.init,
          expression: "app.init"
        }
      ],
      ref: "cutter",
      attrs: { id: "outer" },
      on: { mouseover: _vm.scaleImg, mouseout: _vm.cancelScale }
    },
    [
      _vm.image.url && !_vm.image.loading
        ? _c("div", { staticClass: "cropper-box" }, [
            _c(
              "div",
              {
                staticClass: "cropper-box-canvas",
                style: {
                  width: _vm.image.width + "px",
                  height: _vm.image.height + "px",
                  transform:
                    "scale(" +
                    _vm.image.scale +
                    "," +
                    _vm.image.scale +
                    ") " +
                    "translate3d(" +
                    _vm.image.x / _vm.image.scale +
                    "px," +
                    _vm.image.y / _vm.image.scale +
                    "px," +
                    "0)" +
                    "rotateZ(" +
                    _vm.image.rotate * 90 +
                    "deg)"
                }
              },
              [_c("img", { attrs: { src: _vm.image.url, alt: "image.url" } })]
            )
          ])
        : _vm._e(),
      _vm._v(" "),
      _vm.image.url && !_vm.image.loading
        ? _c("div", {
            staticClass: "cropper-drag-box cropper-modal",
            on: { mousedown: _vm.startMove, touchstart: _vm.startMove }
          })
        : _vm._e(),
      _vm._v(" "),
      _vm.cropBox.initCropBox && !_vm.image.loading
        ? _c(
            "div",
            {
              staticClass: "cropper-context",
              style: {
                width: _vm.cropBox.width + "px",
                height: _vm.cropBox.height + "px",
                transform:
                  "translate3d(" +
                  _vm.cropBox.x +
                  "px," +
                  _vm.cropBox.y +
                  "px," +
                  "0)"
              }
            },
            [
              _c("span", { staticClass: "cropper-view-box" }, [
                _c("img", {
                  style: {
                    width: _vm.image.width + "px",
                    height: _vm.image.height + "px",
                    transform:
                      "scale(" +
                      _vm.image.scale +
                      "," +
                      _vm.image.scale +
                      ") " +
                      "translate3d(" +
                      (_vm.image.x - _vm.cropBox.x) / _vm.image.scale +
                      "px," +
                      (_vm.image.y - _vm.cropBox.y) / _vm.image.scale +
                      "px," +
                      "0)" +
                      "rotateZ(" +
                      _vm.image.rotate * 90 +
                      "deg)"
                  },
                  attrs: { src: _vm.image.url, alt: _vm.image.url }
                })
              ]),
              _vm._v(" "),
              _vm.cropInfo
                ? _c("span", { staticClass: "crop-info" }, [
                    _vm._v(
                      "\n          " +
                        _vm._s(Math.round(_vm.cropBox.width)) +
                        " * " +
                        _vm._s(Math.round(_vm.cropBox.height)) +
                        "\n      "
                    )
                  ])
                : _vm._e(),
              _vm._v(" "),
              _c("span", {
                staticClass: "cropper-face cropper-move",
                on: { mousedown: _vm.cropMove, touchstart: _vm.cropMove }
              }),
              _vm._v(" "),
              _vm.canCropResized
                ? _c("span", { staticClass: "fixedBox" }, [
                    _vm.fixed === null
                      ? _c("span", {
                          staticClass: "f fht",
                          on: {
                            touchstart: function($event) {
                              return _vm.resizeCropBox(
                                $event,
                                false,
                                true,
                                0,
                                1,
                                22
                              )
                            },
                            mousedown: function($event) {
                              return _vm.resizeCropBox(
                                $event,
                                false,
                                true,
                                0,
                                1,
                                22
                              )
                            }
                          }
                        })
                      : _vm._e(),
                    _vm._v(" "),
                    _vm.fixed === null
                      ? _c("span", {
                          staticClass: "f fvr",
                          on: {
                            touchstart: function($event) {
                              return _vm.resizeCropBox(
                                $event,
                                true,
                                false,
                                2,
                                0,
                                2
                              )
                            },
                            mousedown: function($event) {
                              return _vm.resizeCropBox(
                                $event,
                                true,
                                false,
                                2,
                                0,
                                2
                              )
                            }
                          }
                        })
                      : _vm._e(),
                    _vm._v(" "),
                    _vm.fixed === null
                      ? _c("span", {
                          staticClass: "f fhb",
                          on: {
                            touchstart: function($event) {
                              return _vm.resizeCropBox(
                                $event,
                                false,
                                true,
                                0,
                                2,
                                3
                              )
                            },
                            mousedown: function($event) {
                              return _vm.resizeCropBox(
                                $event,
                                false,
                                true,
                                0,
                                2,
                                3
                              )
                            }
                          }
                        })
                      : _vm._e(),
                    _vm._v(" "),
                    _vm.fixed === null
                      ? _c("span", {
                          staticClass: "f fvl",
                          on: {
                            touchstart: function($event) {
                              return _vm.resizeCropBox(
                                $event,
                                true,
                                false,
                                1,
                                0,
                                4
                              )
                            },
                            mousedown: function($event) {
                              return _vm.resizeCropBox(
                                $event,
                                true,
                                false,
                                1,
                                0,
                                4
                              )
                            }
                          }
                        })
                      : _vm._e(),
                    _vm._v(" "),
                    _c("span", {
                      staticClass: "f dot dot-1",
                      on: {
                        touchstart: function($event) {
                          return _vm.resizeCropBox($event, true, true, 1, 1, 1)
                        },
                        mousedown: function($event) {
                          return _vm.resizeCropBox($event, true, true, 1, 1, 1)
                        }
                      }
                    }),
                    _vm._v(" "),
                    _vm.fixed === null
                      ? _c("span", {
                          staticClass: "f dot dot-2",
                          on: {
                            touchstart: function($event) {
                              return _vm.resizeCropBox(
                                $event,
                                false,
                                true,
                                0,
                                1,
                                6
                              )
                            },
                            mousedown: function($event) {
                              return _vm.resizeCropBox(
                                $event,
                                false,
                                true,
                                0,
                                1,
                                6
                              )
                            }
                          }
                        })
                      : _vm._e(),
                    _vm._v(" "),
                    _c("span", {
                      staticClass: "f dot dot-3",
                      on: {
                        touchstart: function($event) {
                          return _vm.resizeCropBox($event, true, true, 2, 1, 3)
                        },
                        mousedown: function($event) {
                          return _vm.resizeCropBox($event, true, true, 2, 1, 3)
                        }
                      }
                    }),
                    _vm._v(" "),
                    _vm.fixed === null
                      ? _c("span", {
                          staticClass: "f dot dot-4",
                          on: {
                            touchstart: function($event) {
                              return _vm.resizeCropBox(
                                $event,
                                true,
                                false,
                                2,
                                0,
                                8
                              )
                            },
                            mousedown: function($event) {
                              return _vm.resizeCropBox(
                                $event,
                                true,
                                false,
                                2,
                                0,
                                8
                              )
                            }
                          }
                        })
                      : _vm._e(),
                    _vm._v(" "),
                    _c("span", {
                      staticClass: "f dot dot-5",
                      on: {
                        touchstart: function($event) {
                          return _vm.resizeCropBox($event, true, true, 2, 2, 1)
                        },
                        mousedown: function($event) {
                          return _vm.resizeCropBox($event, true, true, 2, 2, 1)
                        }
                      }
                    }),
                    _vm._v(" "),
                    _vm.fixed === null
                      ? _c("span", {
                          staticClass: "f dot dot-6",
                          on: {
                            touchstart: function($event) {
                              return _vm.resizeCropBox(
                                $event,
                                false,
                                true,
                                0,
                                2,
                                10
                              )
                            },
                            mousedown: function($event) {
                              return _vm.resizeCropBox(
                                $event,
                                false,
                                true,
                                0,
                                2,
                                10
                              )
                            }
                          }
                        })
                      : _vm._e(),
                    _vm._v(" "),
                    _c("span", {
                      staticClass: "f dot dot-7",
                      on: {
                        touchstart: function($event) {
                          return _vm.resizeCropBox($event, true, true, 1, 2, 3)
                        },
                        mousedown: function($event) {
                          return _vm.resizeCropBox($event, true, true, 1, 2, 3)
                        }
                      }
                    }),
                    _vm._v(" "),
                    _vm.fixed === null
                      ? _c("span", {
                          staticClass: "f dot dot-8",
                          on: {
                            touchstart: function($event) {
                              return _vm.resizeCropBox(
                                $event,
                                true,
                                false,
                                1,
                                0,
                                12
                              )
                            },
                            mousedown: function($event) {
                              return _vm.resizeCropBox(
                                $event,
                                true,
                                false,
                                1,
                                0,
                                12
                              )
                            }
                          }
                        })
                      : _vm._e()
                  ])
                : _vm._e(),
              _vm._v(" "),
              _vm.cropDividingLine
                ? _c("span", { staticClass: "dividing-line" }, [
                    _c("span", { staticClass: "line line1" }),
                    _vm._v(" "),
                    _c("span", { staticClass: "line line2" }),
                    _vm._v(" "),
                    _c("span", { staticClass: "line-1 line3" }),
                    _vm._v(" "),
                    _c("span", { staticClass: "line-1 line4" })
                  ])
                : _vm._e()
            ]
          )
        : _vm._e(),
      _vm._v(" "),
      _c("input", {
        staticClass: "filepath",
        staticStyle: { width: "0.01rem" },
        attrs: {
          type: "file",
          id: "uploadFile",
          accept: "image/jpg,image/jpeg,image/png,image/PNG"
        },
        on: { change: _vm.uploadPic }
      })
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  computed: {
    isIE: function isIE() {
      var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串
      var isIE = !!window.ActiveXObject || 'ActiveXObject' in window; //判断是否IE浏览器
      return isIE;
    },
    passive: function passive() {
      return this.isIE ? null : {
        passive: false
      };
    }
  },
  methods: {
    getVersion: function getVersion(name) {
      var arr = navigator.userAgent.split(' ');
      var chromeVersion = '';
      var result = 0;
      var reg = new RegExp(name, 'i');
      for (var i = 0; i < arr.length; i++) {
        if (reg.test(arr[i])) chromeVersion = arr[i];
      }
      if (chromeVersion) {
        result = chromeVersion.split('/')[1].split('.');
      } else {
        result = ['0', '0', '0'];
      }
      return result;
    },
    checkOrientationImage: function checkOrientationImage(img, orientation, width, height) {
      var _this = this;

      // 如果是 chrome内核版本在81 safari 在 605 以上不处理图片旋转
      // alert(navigator.userAgent)
      if (this.getVersion('chrome')[0] >= 81) {
        orientation = -1;
      } else {
        if (this.getVersion('safari')[0] >= 605) {
          var safariVersion = this.getVersion('version');
          if (safariVersion[0] > 13 && safariVersion[1] > 1) {
            orientation = -1;
          }
        } else {
          //  判断 ios 版本进行处理
          // 针对 ios 版本大于 13.4的系统不做图片旋转
          var isIos = navigator.userAgent.toLowerCase().match(/cpu iphone os (.*?) like mac os/);
          if (isIos) {
            var version = isIos[1];
            version = version.split('_');
            if (version[0] > 13 || version[0] >= 13 && version[1] >= 4) {
              orientation = -1;
            }
          }
        }
      }

      // alert(`当前处理的orientation${orientation}`)
      var canvas = document.createElement("canvas");
      var ctx = canvas.getContext("2d");
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
          ctx.rotate(180 * Math.PI / 180);
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
          ctx.rotate(90 * Math.PI / 180);
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
          ctx.rotate(-90 * Math.PI / 180);
          ctx.translate(-width / 2, -height / 2);
          break;
        default:
          canvas.width = width;
          canvas.height = height;
      }

      ctx.drawImage(img, 0, 0, width, height);
      ctx.restore();
      canvas.toBlob(function (blob) {
        var data = URL.createObjectURL(blob);
        URL.revokeObjectURL(_this.imgs);
        _this.image.url = data;
      }, "image/" + this.outputType, 1);
    }
  }
};
module.exports = exports.default;

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _promise = __webpack_require__(45);

var _promise2 = _interopRequireDefault(_promise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Exif = {};

Exif.getData = function (img) {
  return new _promise2.default(function (reslove, reject) {
    var obj = {};
    getImageData(img).then(function (data) {
      obj.arrayBuffer = data;
      obj.orientation = getOrientation(data);
      reslove(obj);
    }).catch(function (error) {
      reject(error);
    });
  });
};

// 这里的获取exif要将图片转ArrayBuffer对象，这里假设获取了图片的baes64
// 步骤一
// base64转ArrayBuffer对象
function getImageData(img) {
  var data = null;
  return new _promise2.default(function (reslove, reject) {
    if (img.src) {
      if (/^data\:/i.test(img.src)) {
        // Data URI
        data = base64ToArrayBuffer(img.src);
        reslove(data);
      } else if (/^blob\:/i.test(img.src)) {
        // Object URL
        var fileReader = new FileReader();
        fileReader.onload = function (e) {
          data = e.target.result;
          reslove(data);
        };
        objectURLToBlob(img.src, function (blob) {
          fileReader.readAsArrayBuffer(blob);
        });
      } else {
        var http = new XMLHttpRequest();
        http.onload = function () {
          if (this.status == 200 || this.status === 0) {
            data = http.response;
            reslove(data);
          } else {
            throw "Could not load image";
          }
          http = null;
        };
        http.open("GET", img.src, true);
        http.responseType = "arraybuffer";
        http.send(null);
      }
    } else {
      reject('img error');
    }
  });
}

function objectURLToBlob(url, callback) {
  var http = new XMLHttpRequest();
  http.open("GET", url, true);
  http.responseType = "blob";
  http.onload = function (e) {
    if (this.status == 200 || this.status === 0) {
      callback(this.response);
    }
  };
  http.send();
}

function base64ToArrayBuffer(base64) {
  base64 = base64.replace(/^data\:([^\;]+)\;base64,/gmi, '');
  var binary = atob(base64);
  var len = binary.length;
  var buffer = new ArrayBuffer(len);
  var view = new Uint8Array(buffer);
  for (var i = 0; i < len; i++) {
    view[i] = binary.charCodeAt(i);
  }
  return buffer;
}
// 步骤二，Unicode码转字符串
// ArrayBuffer对象 Unicode码转字符串
function getStringFromCharCode(dataView, start, length) {
  var str = '';
  var i;
  for (i = start, length += start; i < length; i++) {
    str += String.fromCharCode(dataView.getUint8(i));
  }
  return str;
}

// 步骤三，获取jpg图片的exif的角度（在ios体现最明显）
function getOrientation(arrayBuffer) {
  var dataView = new DataView(arrayBuffer);
  var length = dataView.byteLength;
  var orientation;
  var exifIDCode;
  var tiffOffset;
  var firstIFDOffset;
  var littleEndian;
  var endianness;
  var app1Start;
  var ifdStart;
  var offset;
  var i;
  // Only handle JPEG image (start by 0xFFD8)
  if (dataView.getUint8(0) === 0xFF && dataView.getUint8(1) === 0xD8) {
    offset = 2;
    while (offset < length) {
      if (dataView.getUint8(offset) === 0xFF && dataView.getUint8(offset + 1) === 0xE1) {
        app1Start = offset;
        break;
      }
      offset++;
    }
  }
  if (app1Start) {
    exifIDCode = app1Start + 4;
    tiffOffset = app1Start + 10;
    if (getStringFromCharCode(dataView, exifIDCode, 4) === 'Exif') {
      endianness = dataView.getUint16(tiffOffset);
      littleEndian = endianness === 0x4949;

      if (littleEndian || endianness === 0x4D4D /* bigEndian */) {
          if (dataView.getUint16(tiffOffset + 2, littleEndian) === 0x002A) {
            firstIFDOffset = dataView.getUint32(tiffOffset + 4, littleEndian);

            if (firstIFDOffset >= 0x00000008) {
              ifdStart = tiffOffset + firstIFDOffset;
            }
          }
        }
    }
  }
  if (ifdStart) {
    length = dataView.getUint16(ifdStart, littleEndian);

    for (i = 0; i < length; i++) {
      offset = ifdStart + i * 12 + 2;
      if (dataView.getUint16(offset, littleEndian) === 0x0112 /* Orientation */) {

          // 8 is the offset of the current tag's value
          offset += 8;

          // Get the original orientation value
          orientation = dataView.getUint16(offset, littleEndian);

          // Override the orientation with its default value for Safari (#120)
          // if (IS_SAFARI_OR_UIWEBVIEW) {
          //   dataView.setUint16(offset, 1, littleEndian);
          // }
          break;
        }
    }
  }
  return orientation;
}

exports.default = Exif;
module.exports = exports.default;

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(46), __esModule: true };

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(47);
__webpack_require__(48);
__webpack_require__(63);
__webpack_require__(67);
__webpack_require__(79);
__webpack_require__(80);
module.exports = __webpack_require__(2).Promise;


/***/ }),
/* 47 */
/***/ (function(module, exports) {



/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__(49)(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(24)(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(14);
var defined = __webpack_require__(15);
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(6) && !__webpack_require__(25)(function () {
  return Object.defineProperty(__webpack_require__(17)('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(5);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(4);


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(54);
var descriptor = __webpack_require__(26);
var setToStringTag = __webpack_require__(20);
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(4)(IteratorPrototype, __webpack_require__(1)('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(3);
var dPs = __webpack_require__(55);
var enumBugKeys = __webpack_require__(30);
var IE_PROTO = __webpack_require__(19)('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(17)('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(31).appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(11);
var anObject = __webpack_require__(3);
var getKeys = __webpack_require__(56);

module.exports = __webpack_require__(6) ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(57);
var enumBugKeys = __webpack_require__(30);

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(12);
var toIObject = __webpack_require__(18);
var arrayIndexOf = __webpack_require__(59)(false);
var IE_PROTO = __webpack_require__(19)('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(13);
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(18);
var toLength = __webpack_require__(27);
var toAbsoluteIndex = __webpack_require__(60);
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(14);
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(12);
var toObject = __webpack_require__(62);
var IE_PROTO = __webpack_require__(19)('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(15);
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(64);
var global = __webpack_require__(0);
var hide = __webpack_require__(4);
var Iterators = __webpack_require__(7);
var TO_STRING_TAG = __webpack_require__(1)('toStringTag');

var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
  'TextTrackList,TouchList').split(',');

for (var i = 0; i < DOMIterables.length; i++) {
  var NAME = DOMIterables[i];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(65);
var step = __webpack_require__(66);
var Iterators = __webpack_require__(7);
var toIObject = __webpack_require__(18);

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(24)(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),
/* 65 */
/***/ (function(module, exports) {

module.exports = function () { /* empty */ };


/***/ }),
/* 66 */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(16);
var global = __webpack_require__(0);
var ctx = __webpack_require__(9);
var classof = __webpack_require__(32);
var $export = __webpack_require__(8);
var isObject = __webpack_require__(5);
var aFunction = __webpack_require__(10);
var anInstance = __webpack_require__(68);
var forOf = __webpack_require__(69);
var speciesConstructor = __webpack_require__(33);
var task = __webpack_require__(34).set;
var microtask = __webpack_require__(74)();
var newPromiseCapabilityModule = __webpack_require__(21);
var perform = __webpack_require__(35);
var userAgent = __webpack_require__(75);
var promiseResolve = __webpack_require__(36);
var PROMISE = 'Promise';
var TypeError = global.TypeError;
var process = global.process;
var versions = process && process.versions;
var v8 = versions && versions.v8 || '';
var $Promise = global[PROMISE];
var isNode = classof(process) == 'process';
var empty = function () { /* empty */ };
var Internal, newGenericPromiseCapability, OwnPromiseCapability, Wrapper;
var newPromiseCapability = newGenericPromiseCapability = newPromiseCapabilityModule.f;

var USE_NATIVE = !!function () {
  try {
    // correct subclassing with @@species support
    var promise = $Promise.resolve(1);
    var FakePromise = (promise.constructor = {})[__webpack_require__(1)('species')] = function (exec) {
      exec(empty, empty);
    };
    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    return (isNode || typeof PromiseRejectionEvent == 'function')
      && promise.then(empty) instanceof FakePromise
      // v8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
      // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
      // we can't detect it synchronously, so just check versions
      && v8.indexOf('6.6') !== 0
      && userAgent.indexOf('Chrome/66') === -1;
  } catch (e) { /* empty */ }
}();

// helpers
var isThenable = function (it) {
  var then;
  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};
var notify = function (promise, isReject) {
  if (promise._n) return;
  promise._n = true;
  var chain = promise._c;
  microtask(function () {
    var value = promise._v;
    var ok = promise._s == 1;
    var i = 0;
    var run = function (reaction) {
      var handler = ok ? reaction.ok : reaction.fail;
      var resolve = reaction.resolve;
      var reject = reaction.reject;
      var domain = reaction.domain;
      var result, then, exited;
      try {
        if (handler) {
          if (!ok) {
            if (promise._h == 2) onHandleUnhandled(promise);
            promise._h = 1;
          }
          if (handler === true) result = value;
          else {
            if (domain) domain.enter();
            result = handler(value); // may throw
            if (domain) {
              domain.exit();
              exited = true;
            }
          }
          if (result === reaction.promise) {
            reject(TypeError('Promise-chain cycle'));
          } else if (then = isThenable(result)) {
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch (e) {
        if (domain && !exited) domain.exit();
        reject(e);
      }
    };
    while (chain.length > i) run(chain[i++]); // variable length - can't use forEach
    promise._c = [];
    promise._n = false;
    if (isReject && !promise._h) onUnhandled(promise);
  });
};
var onUnhandled = function (promise) {
  task.call(global, function () {
    var value = promise._v;
    var unhandled = isUnhandled(promise);
    var result, handler, console;
    if (unhandled) {
      result = perform(function () {
        if (isNode) {
          process.emit('unhandledRejection', value, promise);
        } else if (handler = global.onunhandledrejection) {
          handler({ promise: promise, reason: value });
        } else if ((console = global.console) && console.error) {
          console.error('Unhandled promise rejection', value);
        }
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
    } promise._a = undefined;
    if (unhandled && result.e) throw result.v;
  });
};
var isUnhandled = function (promise) {
  return promise._h !== 1 && (promise._a || promise._c).length === 0;
};
var onHandleUnhandled = function (promise) {
  task.call(global, function () {
    var handler;
    if (isNode) {
      process.emit('rejectionHandled', promise);
    } else if (handler = global.onrejectionhandled) {
      handler({ promise: promise, reason: promise._v });
    }
  });
};
var $reject = function (value) {
  var promise = this;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  promise._v = value;
  promise._s = 2;
  if (!promise._a) promise._a = promise._c.slice();
  notify(promise, true);
};
var $resolve = function (value) {
  var promise = this;
  var then;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  try {
    if (promise === value) throw TypeError("Promise can't be resolved itself");
    if (then = isThenable(value)) {
      microtask(function () {
        var wrapper = { _w: promise, _d: false }; // wrap
        try {
          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
        } catch (e) {
          $reject.call(wrapper, e);
        }
      });
    } else {
      promise._v = value;
      promise._s = 1;
      notify(promise, false);
    }
  } catch (e) {
    $reject.call({ _w: promise, _d: false }, e); // wrap
  }
};

// constructor polyfill
if (!USE_NATIVE) {
  // 25.4.3.1 Promise(executor)
  $Promise = function Promise(executor) {
    anInstance(this, $Promise, PROMISE, '_h');
    aFunction(executor);
    Internal.call(this);
    try {
      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
    } catch (err) {
      $reject.call(this, err);
    }
  };
  // eslint-disable-next-line no-unused-vars
  Internal = function Promise(executor) {
    this._c = [];             // <- awaiting reactions
    this._a = undefined;      // <- checked in isUnhandled reactions
    this._s = 0;              // <- state
    this._d = false;          // <- done
    this._v = undefined;      // <- value
    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
    this._n = false;          // <- notify
  };
  Internal.prototype = __webpack_require__(76)($Promise.prototype, {
    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
    then: function then(onFulfilled, onRejected) {
      var reaction = newPromiseCapability(speciesConstructor(this, $Promise));
      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail = typeof onRejected == 'function' && onRejected;
      reaction.domain = isNode ? process.domain : undefined;
      this._c.push(reaction);
      if (this._a) this._a.push(reaction);
      if (this._s) notify(this, false);
      return reaction.promise;
    },
    // 25.4.5.1 Promise.prototype.catch(onRejected)
    'catch': function (onRejected) {
      return this.then(undefined, onRejected);
    }
  });
  OwnPromiseCapability = function () {
    var promise = new Internal();
    this.promise = promise;
    this.resolve = ctx($resolve, promise, 1);
    this.reject = ctx($reject, promise, 1);
  };
  newPromiseCapabilityModule.f = newPromiseCapability = function (C) {
    return C === $Promise || C === Wrapper
      ? new OwnPromiseCapability(C)
      : newGenericPromiseCapability(C);
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Promise: $Promise });
__webpack_require__(20)($Promise, PROMISE);
__webpack_require__(77)(PROMISE);
Wrapper = __webpack_require__(2)[PROMISE];

// statics
$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
  // 25.4.4.5 Promise.reject(r)
  reject: function reject(r) {
    var capability = newPromiseCapability(this);
    var $$reject = capability.reject;
    $$reject(r);
    return capability.promise;
  }
});
$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
  // 25.4.4.6 Promise.resolve(x)
  resolve: function resolve(x) {
    return promiseResolve(LIBRARY && this === Wrapper ? $Promise : this, x);
  }
});
$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(78)(function (iter) {
  $Promise.all(iter)['catch'](empty);
})), PROMISE, {
  // 25.4.4.1 Promise.all(iterable)
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var values = [];
      var index = 0;
      var remaining = 1;
      forOf(iterable, false, function (promise) {
        var $index = index++;
        var alreadyCalled = false;
        values.push(undefined);
        remaining++;
        C.resolve(promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[$index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if (result.e) reject(result.v);
    return capability.promise;
  },
  // 25.4.4.4 Promise.race(iterable)
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var reject = capability.reject;
    var result = perform(function () {
      forOf(iterable, false, function (promise) {
        C.resolve(promise).then(capability.resolve, reject);
      });
    });
    if (result.e) reject(result.v);
    return capability.promise;
  }
});


/***/ }),
/* 68 */
/***/ (function(module, exports) {

module.exports = function (it, Constructor, name, forbiddenField) {
  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(9);
var call = __webpack_require__(70);
var isArrayIter = __webpack_require__(71);
var anObject = __webpack_require__(3);
var toLength = __webpack_require__(27);
var getIterFn = __webpack_require__(72);
var BREAK = {};
var RETURN = {};
var exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
  var iterFn = ITERATOR ? function () { return iterable; } : getIterFn(iterable);
  var f = ctx(fn, that, entries ? 2 : 1);
  var index = 0;
  var length, step, iterator, result;
  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
  // fast case for arrays with default iterator
  if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {
    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if (result === BREAK || result === RETURN) return result;
  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
    result = call(iterator, f, step.value, entries);
    if (result === BREAK || result === RETURN) return result;
  }
};
exports.BREAK = BREAK;
exports.RETURN = RETURN;


/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__(3);
module.exports = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
};


/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators = __webpack_require__(7);
var ITERATOR = __webpack_require__(1)('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(32);
var ITERATOR = __webpack_require__(1)('iterator');
var Iterators = __webpack_require__(7);
module.exports = __webpack_require__(2).getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),
/* 73 */
/***/ (function(module, exports) {

// fast apply, http://jsperf.lnkit.com/fast-apply/5
module.exports = function (fn, args, that) {
  var un = that === undefined;
  switch (args.length) {
    case 0: return un ? fn()
                      : fn.call(that);
    case 1: return un ? fn(args[0])
                      : fn.call(that, args[0]);
    case 2: return un ? fn(args[0], args[1])
                      : fn.call(that, args[0], args[1]);
    case 3: return un ? fn(args[0], args[1], args[2])
                      : fn.call(that, args[0], args[1], args[2]);
    case 4: return un ? fn(args[0], args[1], args[2], args[3])
                      : fn.call(that, args[0], args[1], args[2], args[3]);
  } return fn.apply(that, args);
};


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(0);
var macrotask = __webpack_require__(34).set;
var Observer = global.MutationObserver || global.WebKitMutationObserver;
var process = global.process;
var Promise = global.Promise;
var isNode = __webpack_require__(13)(process) == 'process';

module.exports = function () {
  var head, last, notify;

  var flush = function () {
    var parent, fn;
    if (isNode && (parent = process.domain)) parent.exit();
    while (head) {
      fn = head.fn;
      head = head.next;
      try {
        fn();
      } catch (e) {
        if (head) notify();
        else last = undefined;
        throw e;
      }
    } last = undefined;
    if (parent) parent.enter();
  };

  // Node.js
  if (isNode) {
    notify = function () {
      process.nextTick(flush);
    };
  // browsers with MutationObserver, except iOS Safari - https://github.com/zloirock/core-js/issues/339
  } else if (Observer && !(global.navigator && global.navigator.standalone)) {
    var toggle = true;
    var node = document.createTextNode('');
    new Observer(flush).observe(node, { characterData: true }); // eslint-disable-line no-new
    notify = function () {
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if (Promise && Promise.resolve) {
    // Promise.resolve without an argument throws an error in LG WebOS 2
    var promise = Promise.resolve(undefined);
    notify = function () {
      promise.then(flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessag
  // - onreadystatechange
  // - setTimeout
  } else {
    notify = function () {
      // strange IE + webpack dev server bug - use .call(global)
      macrotask.call(global, flush);
    };
  }

  return function (fn) {
    var task = { fn: fn, next: undefined };
    if (last) last.next = task;
    if (!head) {
      head = task;
      notify();
    } last = task;
  };
};


/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(0);
var navigator = global.navigator;

module.exports = navigator && navigator.userAgent || '';


/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

var hide = __webpack_require__(4);
module.exports = function (target, src, safe) {
  for (var key in src) {
    if (safe && target[key]) target[key] = src[key];
    else hide(target, key, src[key]);
  } return target;
};


/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(0);
var core = __webpack_require__(2);
var dP = __webpack_require__(11);
var DESCRIPTORS = __webpack_require__(6);
var SPECIES = __webpack_require__(1)('species');

module.exports = function (KEY) {
  var C = typeof core[KEY] == 'function' ? core[KEY] : global[KEY];
  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
    configurable: true,
    get: function () { return this; }
  });
};


/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR = __webpack_require__(1)('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function () { SAFE_CLOSING = true; };
  // eslint-disable-next-line no-throw-literal
  Array.from(riter, function () { throw 2; });
} catch (e) { /* empty */ }

module.exports = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR]();
    iter.next = function () { return { done: safe = true }; };
    arr[ITERATOR] = function () { return iter; };
    exec(arr);
  } catch (e) { /* empty */ }
  return safe;
};


/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// https://github.com/tc39/proposal-promise-finally

var $export = __webpack_require__(8);
var core = __webpack_require__(2);
var global = __webpack_require__(0);
var speciesConstructor = __webpack_require__(33);
var promiseResolve = __webpack_require__(36);

$export($export.P + $export.R, 'Promise', { 'finally': function (onFinally) {
  var C = speciesConstructor(this, core.Promise || global.Promise);
  var isFunction = typeof onFinally == 'function';
  return this.then(
    isFunction ? function (x) {
      return promiseResolve(C, onFinally()).then(function () { return x; });
    } : onFinally,
    isFunction ? function (e) {
      return promiseResolve(C, onFinally()).then(function () { throw e; });
    } : onFinally
  );
} });


/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/tc39/proposal-promise-try
var $export = __webpack_require__(8);
var newPromiseCapability = __webpack_require__(21);
var perform = __webpack_require__(35);

$export($export.S, 'Promise', { 'try': function (callbackfn) {
  var promiseCapability = newPromiseCapability.f(this);
  var result = perform(callbackfn);
  (result.e ? promiseCapability.reject : promiseCapability.resolve)(result.v);
  return promiseCapability.promise;
} });


/***/ }),
/* 81 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_vue_cutter_vue_vue_type_style_index_0_id_c4df5aae_scoped_true_lang_css___ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_vue_cutter_vue_vue_type_style_index_0_id_c4df5aae_scoped_true_lang_css____default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_vue_cutter_vue_vue_type_style_index_0_id_c4df5aae_scoped_true_lang_css___);
/* unused harmony reexport namespace */
 /* unused harmony default export */ var _unused_webpack_default_export = (__WEBPACK_IMPORTED_MODULE_0__node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_vue_cutter_vue_vue_type_style_index_0_id_c4df5aae_scoped_true_lang_css____default.a); 

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(38)(false);
// imports
exports.i(__webpack_require__(83), "");

// module
exports.push([module.i, "\n", ""]);

// exports


/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(38)(false);
// imports


// module
exports.push([module.i, "#outer{\n  position: relative;\n  background-image: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAQMAAAAlPW0iAAAAA3NCSVQICAjb4U/gAAAABlBMVEXMzMz////TjRV2AAAACXBIWXMAAArrAAAK6wGCiw1aAAAAHHRFWHRTb2Z0d2FyZQBBZG9iZSBGaXJld29ya3MgQ1M26LyyjAAAABFJREFUCJlj+M/AgBVhF/0PAH6/D/HkDxOGAAAAAElFTkSuQmCC\") !important;\n  top: 0;\n  left: 0;\n  overflow: hidden;\n}\n.cropper-box-canvas,\n.cropper-drag-box,\n.cropper-crop-box,\n.cropper-view-box,\n.cropper-face,\n.cropper-box{\n  position: absolute!important;\n  top: 1px!important;\n  left: 1px!important;\n  right: 1px!important;\n  bottom: 1px!important;\n  user-select: none;\n}\n\n.cropper-view-box{\n  overflow: hidden;\n}\n\n.cropper-modal{\n  background: rgba(0, 0, 0, 0.6) !important;\n}\n\n.cropper-context {\n  position: absolute!important;\n  display: block!important;\n  width: 100%;\n  height: 100%;\n  outline: 2px dashed #3399FF;\n  user-select: none;\n}\n\n.cropper-face{\n  top: 0;\n  left: 0;\n  background-color: #fff;\n  opacity: 0.1;\n}\n\n.cropper-move{\n  cursor: move;\n}\n\n.f {\n  display: inline-block;\n  position: absolute;\n}\n\n.fht {\n  top: -1px;\n  left: 0;\n  width: 100%;\n  height: 2px;\n  cursor: n-resize;\n}\n\n.fhb {\n  bottom: -1px;\n  left: 0;\n  width: 100%;\n  height: 2px;\n  cursor: s-resize;\n}\n\n.fvl {\n  height: 100%;\n  width: 2px;\n  left: -1px;\n  top: 0;\n  cursor: w-resize;\n}\n\n.fvr {\n  height: 100%;\n  width: 2px;\n  right: -1px;\n  top: 0;\n  cursor: e-resize;\n}\n\n.dot {\n  background: rgb(51, 153, 255);\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n}\n\n.dot-1 {\n  top: -5px;\n  left: -5px;\n  cursor: nw-resize;\n}\n\n.dot-2 {\n  top: -5px;\n  left: 50%;\n  transform: translateX(-5px);\n  cursor: n-resize;\n}\n\n.dot-3 {\n  top: -5px;\n  right: -5px;\n  cursor: ne-resize;\n}\n\n.dot-4 {\n  top: 50%;\n  right: -5px;\n  transform: translateY(-5px);\n  cursor: e-resize;\n}\n\n.dot-5 {\n  bottom: -5px;\n  right: -5px;\n  cursor: se-resize;\n}\n\n.dot-6 {\n  bottom: -5px;\n  left: 50%;\n  transform: translateX(-5px);\n  cursor: s-resize;\n}\n\n.dot-7 {\n  bottom: -5px;\n  left: -5px;\n  cursor: sw-resize;\n}\n\n.dot-8 {\n  top: 50%;\n  transform: translateY(-5px);\n  left: -5px;\n  cursor: w-resize;\n}\n\n.dividing-line,\n.fixedBox {\n  display: inline-block;\n}\n\n.line {\n  position: absolute;\n  left: 0;\n  height: 1px;\n  width: 100%;\n  border-top: 1px dashed rgba(51,153,255,0.8);\n}\n.line1{\n  top: 33.3%;\n}\n.line2{\n  top: 66.6%;\n}\n.line-1{\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 1px;\n  height: 100%;\n  border-left: 2px dashed rgba(51,153,255,0.5);\n}\n.line3{\n  left: 33.3%;\n}\n.line4{\n  left: 66.6%;\n}\n\n.crop-info{\n  display: inline-block;\n  position: absolute;\n  padding: 1px 6px;\n  background: rgba(141, 191, 234, 0.31);\n  top: -15px;\n  color: #dde4ea;\n  left: 0;\n  line-height: 1;\n  font-size: 0.6875rem;\n}\n", ""]);

// exports


/***/ }),
/* 84 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["default"] = addStylesClient;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__listToStyles__ = __webpack_require__(85);
/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/



var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}
var options = null
var ssrIdKey = 'data-vue-ssr-id'

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

function addStylesClient (parentId, list, _isProduction, _options) {
  isProduction = _isProduction

  options = _options || {}

  var styles = Object(__WEBPACK_IMPORTED_MODULE_0__listToStyles__["a" /* default */])(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = Object(__WEBPACK_IMPORTED_MODULE_0__listToStyles__["a" /* default */])(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[' + ssrIdKey + '~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }
  if (options.ssrId) {
    styleElement.setAttribute(ssrIdKey, obj.id)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),
/* 85 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = listToStyles;
/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}


/***/ }),
/* 86 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = normalizeComponent;
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ })
/******/ ]);
});
//# sourceMappingURL=index.js.map