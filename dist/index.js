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

var store = __webpack_require__(29)('wks');
var uid = __webpack_require__(30);
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
var createDesc = __webpack_require__(27);
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
module.exports = !__webpack_require__(26)(function () {
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
var IE8_DOM_DEFINE = __webpack_require__(51);
var toPrimitive = __webpack_require__(52);
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
var IObject = __webpack_require__(59);
var defined = __webpack_require__(15);
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(29)('keys');
var uid = __webpack_require__(30);
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

var _regenerator = __webpack_require__(43);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(46);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _exifJsMin = __webpack_require__(82);

var _exifJsMin2 = _interopRequireDefault(_exifJsMin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
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
    }
  },
  data: function data() {
    return {
      themes: ['dark', 'warm', 'pink', 'test'],
      modes: ['contain', 'cover', 'auto'],
      cropperContainer: {
        width: '',
        height: ''
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
        rate: 0
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
      scalingSet: ''
    };
  },

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
  watch: {
    showImg: function showImg(val) {
      var _this = this;

      return (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!(val === '' || val === null)) {
                  _context.next = 2;
                  break;
                }

                return _context.abrupt('return');

              case 2:
                _context.next = 4;
                return _this.reload();

              case 4:
                _this.initCropBox();

              case 5:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this);
      }))();
    },
    cropBoxBoundary: function cropBoxBoundary(val) {
      console.log(val);
    }
  },
  beforeMount: function beforeMount() {
    this.initApp();
  },
  mounted: function mounted() {
    this.support = "onwheel" in document.createElement("div") ? "wheel" : document.onmousewheel !== undefined ? "mousewheel" : "DOMMouseScroll";
    this.checkedImg();
  },

  methods: {
    initApp: function initApp() {
      var _this2 = this;

      this.$nextTick(function () {
        var cropperContainer = _this2.cropperContainer;

        cropperContainer.width = parseFloat(window.getComputedStyle(_this2.$refs.cropper).width);
        cropperContainer.height = parseFloat(window.getComputedStyle(_this2.$refs.cropper).height);
      });
    },
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


    //checkout pic
    checkedImg: function checkedImg(Img) {
      var _this3 = this;

      var image = Img || this.image;
      if (image === null || image === '') {
        image = '';
        return;
      }

      this.loading = true;
      this.sourceImageData.scale = 1;
      this.rotate = 0;
      var img = new Image();
      img.onload = function () {
        if (image === '') {
          // something will be do
          return;
        }
        var sourceImageData = _this3.sourceImageData;


        var width = img.width;
        var height = img.height;

        _exifJsMin2.default.getData(img).then(function (data) {

          sourceImageData.orientation = data.orientation || 1;
          var max = _this3.maxImgSize;
          if (!_this3.orientation && width < max && height < max) {
            _this3.showImg = image;
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
          _this3.checkOrientationImage(img, sourceImageData.orientation, width, height);
        });
      };
      img.onerror = function () {
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
    checkOrientationImage: function checkOrientationImage(img, orientation, width, height) {
      var _this4 = this;

      // If the chrome kernel version is 81 and safari is above 605, the image rotation will not be processed
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
        URL.revokeObjectURL(_this4.imgs);
        _this4.showImg = data;
      }, "image/" + this.outputType, 1);
    },


    //  reload picture layout function
    reload: function reload() {
      var _this5 = this;

      var img = new Image();
      img.src = this.showImg;
      img.onload = function () {
        var cropperContainer = _this5.cropperContainer,
            sourceImageData = _this5.sourceImageData;

        sourceImageData.width = img.width;
        sourceImageData.height = img.height;

        if (!_this5.original) {
          sourceImageData.scale = _this5.dealMode();
        } else {
          sourceImageData.scale = 1;
        }

        _this5.$nextTick(function () {
          sourceImageData.x = -(sourceImageData.width - sourceImageData.width * sourceImageData.scale) / 2 + (cropperContainer.width - sourceImageData.width * sourceImageData.scale) / 2;
          sourceImageData.y = -(sourceImageData.height - sourceImageData.height * sourceImageData.scale) / 2 + (cropperContainer.height - sourceImageData.height * sourceImageData.scale) / 2;
          _this5.loading = false;
        });
      };
      return;
    },
    dealMode: function dealMode() {
      var mode = this.mode,
          modes = this.modes,
          sourceImageData = this.sourceImageData,
          cropperContainer = this.cropperContainer;

      var scale = 1;
      var md = '';
      var imgWidth = sourceImageData.width,
          imgHeight = sourceImageData.height;
      var contWidth = cropperContainer.width,
          contHeight = cropperContainer.height;
      md = modes.find(function (element) {
        return element === mode;
      });
      if (typeof md === 'undefined') {
        md = mode.split(' ');
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
        case 'cover':
          // 扩展布局 默认填充满整个容器
          // 图片宽度大于容器
          scale = contWidth / imgWidth;
          var h = imgHeight * scale;
          if (h < contHeight) {
            h = contHeight;
            scale = h / imgHeight;
          }
          break;
        default:
          try {
            var str = md[0];
            if (str.search('px') !== -1) {
              str.replace('px', '');
              scale = parseFloat(str) / imgWidth;
            }

            if (str.search('%') !== -1) {
              str = str.replace("%", "");
              scale = parseFloat(str) / 100 * contWidth / imgWidth;
            }
          } catch (e) {
            scale = 1;
          }
      }
      return scale;
    },
    scaleImage: function scaleImage() {
      if (this.canScale) {
        window.addEventListener(this.support, this.changeSize, this.passive);
      }
    },
    cancelScale: function cancelScale() {
      if (this.canScale) {
        window.removeEventListener(this.support, this.changeSize);
      }
    },
    changeSize: function changeSize(e) {
      var _this6 = this;

      e.preventDefault();
      var sourceImageData = this.sourceImageData,
          imgZF = this.imgZF,
          imgZFStatus = this.imgZFStatus;

      var scale = sourceImageData.scale;
      var change = e.deltaY || e.wheelDelta;
      var isFirefox = navigator.userAgent.indexOf("Firefox");
      change = isFirefox > 0 ? change * 30 : change;

      if (this.isIE) {
        change = -change;
      }

      var IZF = imgZF;
      IZF = IZF / sourceImageData.width > IZF / sourceImageData.height ? IZF / sourceImageData.height : IZF / sourceImageData.width;

      var num = IZF * change;

      num < 0 ? scale += Math.abs(num) : scale > Math.abs(num) ? scale -= Math.abs(num) : scale;

      var status = num < 0 ? "add" : "reduce";

      if (status !== imgZFStatus) {
        this.imgZFStatus = status;
        this.imgZF = 0.2;
      }

      if (!this.scaling) {
        this.scalingSet = setTimeout(function () {
          _this6.scaling = false;
          _this6.imgZF = _this6.imgZF += 0.01;
        }, 50);
      }

      this.scaling = true;

      if (!this.checkoutImageAxis(sourceImageData.x, sourceImageData.y, scale)) {
        return false;
      }
      this.sourceImageData.scale = scale;
    },
    checkoutImageAxis: function checkoutImageAxis(x, y, scale) {
      var cropCanOverImageBorder = this.cropCanOverImageBorder,
          sourceImageData = this.sourceImageData;

      x = x || sourceImageData.x;
      y = y || sourceImageData.y;
      scale = scale || sourceImageData.scale;

      var goScale = true;
      if (!cropCanOverImageBorder) {
        var axis = this.getImageAxis(x, y, scale);
        var cropAxis = this.getCropAxis();
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
    getImageAxis: function getImageAxis(x, y, scale) {
      var sourceImageData = this.sourceImageData;

      x = x || sourceImageData.x;
      y = y || sourceImageData.y;
      scale = scale || sourceImageData.scale;
      var obj = {
        x1: 0,
        x2: 0,
        y1: 0,
        y2: 0
      };
      var imgW = sourceImageData.width * sourceImageData.scale;
      var imgH = sourceImageData.height * sourceImageData.scale;

      switch (sourceImageData.rotate) {
        case 0:
          obj.x1 = x + sourceImageData.width * (1 - scale) / 2;
          obj.x2 = obj.x1 + sourceImageData.width * scale;
          obj.y1 = y + sourceImageData.height * (1 - scale) / 2;
          obj.y2 = obj.y1 + sourceImageData.height * scale;
          break;
        case 1:
        case -1:
        case 3:
        case -3:
          obj.x1 = x + sourceImageData.width * (1 - scale) / 2 + (imgW - imgH) / 2;
          obj.x2 = obj.x1 + sourceImageData.height * scale;
          obj.y1 = y + sourceImageData.height * (1 - scale) / 2 + (imgW - imgH) / 2;
          obj.y2 = obj.y1 + sourceImageData.width * scale;
          break;
        default:
          obj.x1 = x + sourceImageData.width * (1 - scale) / 2;
          obj.x2 = obj.x1 + sourceImageData.width * scale;
          obj.y1 = y + sourceImageData.height * (1 - scale) / 2;
          obj.y2 = obj.y1 + sourceImageData.height * scale;
          break;
      }
      return obj;
    },
    moveImage: function moveImage(e) {
      e.preventDefault();
      var ImgMoveData = this.ImgMoveData,
          canMoveImage = this.canMoveImage,
          sourceImageData = this.sourceImageData,
          cropperBox = this.cropperBox;

      if (ImgMoveData.move && !cropperBox.crop) {
        if (!canMoveImage) {
          return;
        } else {
          if (ImgMoveData.move) {
            ImgMoveData.x = (e.clientX ? e.clientX : e.touches[0].clientX) - sourceImageData.x;
            ImgMoveData.y = (e.clientY ? e.clientY : e.touches[0].clientY) - sourceImageData.y;
            if (e.touches) {} else {
              window.addEventListener('mousemove', this.movingImg);
              window.addEventListener('mouseup', this.stopMoveImg);
            }
          }
        }
      } else {}
    },
    movingImg: function movingImg(e) {
      var _this7 = this;

      e.preventDefault();
      if (e.touches && e.touches.length === 2) {
        return;
      }

      var sourceImageData = this.sourceImageData,
          ImgMoveData = this.ImgMoveData,
          cropCanOverImageBorder = this.cropCanOverImageBorder,
          cropperBox = this.cropperBox;


      var nowX = e.clientX ? e.clientX : e.touches[0].clientX;
      var nowY = e.clientY ? e.clientY : e.touches[0].clientY;

      var changeX = void 0,
          changeY = void 0;

      changeX = nowX - ImgMoveData.x;
      changeY = nowY - ImgMoveData.y;

      this.$nextTick(function () {
        if (!cropCanOverImageBorder) {
          var axis = _this7.getImageAxis(changeX, changeY, sourceImageData.scale);
          var cAxis = _this7.getCropAxis();
          var imgW = sourceImageData.width * sourceImageData.scale;
          var imgH = sourceImageData.height * sourceImageData.scale;
          var maxLeft = void 0,
              maxTop = void 0,
              maxRight = void 0,
              maxBottom = void 0;
          switch (sourceImageData.rotate) {
            case 1:
              maxLeft = cropperBox.x - sourceImageData.width * (1 - sourceImageData.scale) / 2 + (imgW - imgH) / 2;
              maxTop = cropperBox.y - sourceImageData.height * (1 - sourceImageData.scale) / 2 + (imgH - imgW) / 2;
              maxRight = maxLeft - imgW + cropperBox.width;
              maxBottom = maxTop - imgH + cropperBox.height;
              break;
            default:
              maxLeft = cropperBox.x - sourceImageData.width * (1 - sourceImageData.scale) / 2;
              maxTop = cropperBox.y - sourceImageData.height * (1 - sourceImageData.scale) / 2;
              maxRight = maxLeft - imgW + cropperBox.width;
              maxBottom = maxTop - imgH + cropperBox.height;
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

        sourceImageData.x = changeX;
        sourceImageData.y = changeY;
      });
    },
    stopMoveImg: function stopMoveImg(e) {
      window.removeEventListener('mousemove', this.movingImg);
    },


    //初始化截图框
    // type ： '10', '10px', '10%', '10px 10', 'auto' **
    initCropBox: function initCropBox(boundary) {
      var showImg = this.showImg,
          cropBoxBoundary = this.cropBoxBoundary,
          cropperContainer = this.cropperContainer;

      if (showImg === '' || showImg === null || typeof showImg === 'undefined') return;
      var cropBoxWidth = 0,
          cropBoxHeight = 0;
      var cbb = boundary || cropBoxBoundary;
      var cbList = cbb.split(' ');
      if (cbList.length === 1) {
        if (cbList[0] === 'auto') {
          this.initCropBox('50% 50%');
          return;
        } else if (cbList[0].search('px') !== -1 || cbList[0].search('%') !== -1) {
          this.initCropBox(cbList[0] + ' ' + cbList[0]);
          return;
        } else if (/^\d{1,}$/.test(cbList[0])) {
          this.initCropBox(cbList[0] + 'px ' + cbList[0] + 'px');
          return;
        } else {
          console.error('参数: crop-box-boundary 不符合规范');
          return;
        }
      } else if (cbList.length === 2) {
        var w = cbList[0].replace(/[^0-9]/ig, ""),
            h = cbList[1].replace(/[^0-9]/ig, "");

        if (cbList[0].search('px') !== -1) {
          cropBoxWidth = w;
          cropBoxHeight = h;
        } else if (cbList[0].search('%') !== -1) {
          var cw = cropperContainer.width,
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
          console.error('参数: crop-box-boundary 不符合规范');
          return;
        }
      } else {
        console.error('参数: crop-box-boundary 不符合规范');
        return;
      }

      this.changeCropBox(cropBoxWidth, cropBoxHeight);
    },
    changeCropBox: function changeCropBox(w, h) {
      var cropperBox = this.cropperBox,
          cropperContainer = this.cropperContainer,
          cropCanOverImageBorder = this.cropCanOverImageBorder,
          sourceImageData = this.sourceImageData,
          fixed = this.fixed,
          fixedNumber = this.fixedNumber;


      this.$nextTick(function () {
        setTimeout(function () {
          var rate = fixed ? typeof fixedNumber === 'undefined' ? cropperContainer.width / cropperContainer.height : fixedNumber[0] / fixedNumber[1] : w / h;
          sourceImageData.rate = rate;
          if (!cropCanOverImageBorder) {
            h = w / rate;
            if (w > sourceImageData.width) {
              w = sourceImageData.width;
              h = w / rate;
            }
            if (h > sourceImageData.height) {
              h = sourceImageData.height;
              w = h * rate;
            }
          }
          cropperBox.width = w;
          cropperBox.height = w / rate;

          cropperBox.x = (cropperContainer.width - cropperBox.width) / 2;
          cropperBox.y = (cropperContainer.height - cropperBox.height) / 2;
          cropperBox.ready = true;
        }, 50);
      });
    },
    moveCrop: function moveCrop(e) {
      var cropperBox = this.cropperBox,
          canMoveCropBox = this.canMoveCropBox;

      e.preventDefault();
      if (!canMoveCropBox) {
        return;
      }
      ;

      if (e.touches && e.touches.length === 2) {
        return false;
      }

      window.addEventListener('mousemove', this.movingCropBox);
      window.addEventListener('mouseup', this.leaveCrop);

      var x = e.clientX ? e.clientX : e.touches[0].clientX;
      var y = e.clientY ? e.clientY : e.touches[0].clientY;

      var nowX = x - cropperBox.x,
          nowY = y - cropperBox.y;

      cropperBox.cropX = nowX;
      cropperBox.cropY = nowY;
    },
    movingCropBox: function movingCropBox(e) {
      var _this8 = this;

      var cropperBox = this.cropperBox,
          cropperContainer = this.cropperContainer,
          sourceImageData = this.sourceImageData,
          cropCanOverImageBorder = this.cropCanOverImageBorder;

      e.preventDefault();

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
        var fw = nowX - cropperBox.cropX;
        var fh = nowY - cropperBox.cropY;

        if (fw <= 0) {
          cx = 2;
        } else if (fw + cropperBox.width >= cropperContainer.width) {
          cx = cropperContainer.width - cropperBox.width - 1;
        } else {
          cx = fw;
        }

        if (fh <= 0) {
          cy = 2;
        } else if (fh + cropperBox.height >= cropperContainer.height) {
          cy = cropperContainer.height - cropperBox.height - 1;
        } else {
          cy = fh;
        }

        if (!cropCanOverImageBorder) {

          var axis = _this8.getImageAxis();

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
      });
    },
    leaveCrop: function leaveCrop(e) {
      e.preventDefault();
      window.removeEventListener("mousemove", this.movingCropBox);
      window.removeEventListener("mouseup", this.leaveCrop);
    },
    resizeCropBox: function resizeCropBox(e, w, h, typeW, typeH, dot) {
      var cropperBox = this.cropperBox,
          fixed = this.fixed;

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
    changeCropNow: function changeCropNow(e) {
      var _this9 = this;

      e.preventDefault();
      var cropperContainer = this.cropperContainer,
          cropperBox = this.cropperBox,
          fixed = this.fixed,
          sourceImageData = this.sourceImageData,
          cropCanOverImageBorder = this.cropCanOverImageBorder;

      var nowX = e.clientX ? e.clientX : e.touches ? e.touches[0].clientX : 0,
          nowY = e.clientY ? e.clientY : e.touches ? e.touches[0].clientY : 0;
      var wrapperW = cropperContainer.width,
          wrapperH = cropperContainer.height;
      // 不能超过的坐标轴
      var minX = 0;
      var minY = 0;

      if (!cropCanOverImageBorder) {
        var axis = this.getImageAxis();
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
        var fw = nowX - cropperBox.cropX;
        var fh = nowY - cropperBox.cropY;

        if (fixed) {
          switch (cropperBox.dot) {
            case 1:
              if (fw > fh) {
                fh = fw / sourceImageData.rate;
              } else {
                fw = fh * sourceImageData.rate;
              }
              break;
            case 3:
              if (Math.abs(fw) > Math.abs(fh)) {
                fh = -fw / sourceImageData.rate;
              } else {
                fw = -fh * sourceImageData.rate;
              }
          }
        }

        if (cropperBox.canChangeX) {
          if (cropperBox.changeCropTypeX === 1) {
            if (cropperBox.cropOldW - fw > 0) {
              cropperBox.width = wrapperW - cropperBox.cropChangeX - fw <= wrapperW - minX ? cropperBox.cropOldW - fw : cropperBox.cropOldW + cropperBox.cropChangeX - minX;
              cropperBox.x = wrapperW - cropperBox.cropChangeX - fw <= wrapperW - minX ? cropperBox.cropChangeX + fw : minX;
            } else {
              _this9.cropW = Math.abs(fw) + _this9.cropChangeX <= wrapperW ? Math.abs(fw) - _this9.cropOldW : wrapperW - _this9.cropOldW - _this9.cropChangeX;
              _this9.cropOffsertX = _this9.cropChangeX + _this9.cropOldW;
            }
          } else if (cropperBox.changeCropTypeX === 2) {
            if (cropperBox.cropOldW + fw > 0) {
              cropperBox.width = cropperBox.cropOldW + fw + cropperBox.x <= wrapperW ? cropperBox.cropOldW + fw : wrapperW - cropperBox.x;
              cropperBox.x = cropperBox.cropChangeX;
            } else {
              cropperBox.width = wrapperW - cropperBox.cropChangeX + Math.abs(fw + cropperBox.cropOldW) <= wrapperW - minX ? Math.abs(fw + cropperBox.cropOldW) : cropperBox.cropChangeX - minX;
              cropperBox.x = wrapperW - cropperBox.cropChangeX + Math.abs(fw + cropperBox.cropOldW) <= wrapperW - minX ? cropperBox.cropChangeX - Math.abs(fw + cropperBox.cropOldW) : minX;
            }
          }
        }
        if (cropperBox.canChangeY) {
          if (cropperBox.changeCropTypeY === 1) {
            if (cropperBox.cropOldH - fh > 0) {
              cropperBox.height = wrapperH - cropperBox.cropChangeY - fh <= wrapperH - minY ? cropperBox.cropOldH - fh : cropperBox.cropOldH + cropperBox.cropChangeY - minY;
              cropperBox.y = wrapperH - cropperBox.cropChangeY - fh <= wrapperH - minY ? cropperBox.cropChangeY + fh : minY;
            } else {
              cropperBox.height = Math.abs(fh) + cropperBox.cropChangeY <= wrapperH ? Math.abs(fh) - cropperBox.cropOldH : wrapperH - cropperBox.cropOldH - cropperBox.cropChangeY;
              cropperBox.y = cropperBox.cropChangeY + cropperBox.cropOldH;
            }
          } else if (cropperBox.changeCropTypeY === 2) {
            if (cropperBox.cropOldH + fh > 0) {
              cropperBox.height = cropperBox.cropOldH + fh + cropperBox.y <= wrapperH ? cropperBox.cropOldH + fh : wrapperH - cropperBox.y;
              cropperBox.y = cropperBox.cropChangeY;
            } else {
              cropperBox.height = wrapperH - cropperBox.cropChangeY + Math.abs(fh + cropperBox.cropOldH) <= wrapperH - minY ? Math.abs(fh + cropperBox.cropOldH) : cropperBox.cropChangeY - minY;
              cropperBox.y = wrapperH - cropperBox.cropChangeY + Math.abs(fh + cropperBox.cropOldH) <= wrapperH - minY ? cropperBox.cropChangeY - Math.abs(fh + cropperBox.cropOldH) : minY;
            }
          }
        }

        if (cropperBox.canChangeX && fixed) {
          var fixedHeight = cropperBox.width / sourceImageData.rate;
          if (fixedHeight + cropperBox.y > wrapperH) {
            cropperBox.height = wrapperH - cropperBox.y;
            cropperBox.width = cropperBox.height * sourceImageData.rate;
          } else {
            cropperBox.height = fixedHeight;
          }
        }

        if (cropperBox.canChangeY && fixed) {
          var fixedWidth = cropperBox.height * sourceImageData.rate;
          if (fixedWidth + cropperBox.x > wrapperW) {
            cropperBox.width = wrapperW - cropperBox.x;
            cropperBox.height = cropperBox.width / sourceImageData.rate;
          } else {
            cropperBox.width = fixedWidth;
          }
        }
      });
    },
    changeCropEnd: function changeCropEnd(e) {
      window.removeEventListener("mousemove", this.changeCropNow);
      window.removeEventListener("mouseup", this.changeCropEnd);
    },
    getCropAxis: function getCropAxis() {
      var cropperBox = this.cropperBox;

      var obj = {
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
    getCropBlob: function getCropBlob(cb) {
      var _this10 = this;

      this.getCropInfo(function (data) {
        data.toBlob(function (blob) {
          return cb(blob);
        }, "image/" + _this10.outputType, 1);
      });
    },
    getCropInfo: function getCropInfo(cb) {
      var _this11 = this;

      var cropperBox = this.cropperBox,
          sourceImageData = this.sourceImageData,
          showImg = this.showImg;

      var canvas = document.createElement("canvas");
      var img = new Image();
      var rotate = sourceImageData.rotate;
      var trueWidth = sourceImageData.width;
      var trueHeight = sourceImageData.height;
      var cropOffsertX = cropperBox.x;
      var cropOffsertY = cropperBox.y;
      img.onload = function () {
        if (cropperBox.width !== 0) {
          var ctx = canvas.getContext("2d");
          var dpr = 1;
          var width = _this11.cropperBox.width * dpr;
          var height = _this11.cropperBox.height * dpr;
          var imgW = trueWidth * sourceImageData.scale * dpr;
          var imgH = trueHeight * sourceImageData.scale * dpr;
          // 图片x轴偏移
          var dx = (sourceImageData.x - cropOffsertX + sourceImageData.width * (1 - sourceImageData.scale) / 2) * dpr;
          // 图片y轴偏移
          var dy = (sourceImageData.y - cropOffsertY + sourceImageData.height * (1 - sourceImageData.scale) / 2) * dpr;
          setCanvasSize(width, height);
          ctx.save();

          switch (rotate) {
            case 0:
              setCanvasSize(width / sourceImageData.scale, height / sourceImageData.scale);
              ctx.drawImage(img, dx / sourceImageData.scale, dy / sourceImageData.scale, imgW / sourceImageData.scale, imgH / sourceImageData.scale);
          }
          ctx.restore();
        }
        cb(canvas);
      };
      var s = this.image.substring(0, 4);
      if (s !== "data") {
        img.crossOrigin = "Anonymous";
      }
      img.src = this.showImg;

      function setCanvasSize(width, height) {
        canvas.width = Math.round(width);
        canvas.height = Math.round(height);
      }
    },
    addImage: function addImage() {
      var el = this.$refs.add;
      el.click();
    },
    addImageChange: function addImageChange() {
      var _this12 = this;

      var el = this.$refs.add;
      if (el.value === '' || el.value === null) return;
      var file = el.files[0];
      var reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = function () {
        _this12.checkedImg(reader.result);
      };
    }
  }
}; //
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

module.exports = exports.default;

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(47), __esModule: true };

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(16);
var $export = __webpack_require__(8);
var redefine = __webpack_require__(53);
var hide = __webpack_require__(4);
var Iterators = __webpack_require__(7);
var $iterCreate = __webpack_require__(54);
var setToStringTag = __webpack_require__(20);
var getPrototypeOf = __webpack_require__(62);
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
/* 26 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),
/* 27 */
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
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(14);
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),
/* 29 */
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
/* 30 */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),
/* 31 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(0).document;
module.exports = document && document.documentElement;


/***/ }),
/* 33 */
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
/* 34 */
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
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(9);
var invoke = __webpack_require__(74);
var html = __webpack_require__(32);
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
/* 36 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return { e: false, v: exec() };
  } catch (e) {
    return { e: true, v: e };
  }
};


/***/ }),
/* 37 */
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
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(84);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(86).default
var update = add("27c5f5de", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/sass-loader/lib/loader.js?indentedSyntax!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./vue-cutter.vue?vue&type=style&index=0&id=c4df5aae&scoped=true&lang=sass&", function() {
     var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/sass-loader/lib/loader.js?indentedSyntax!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./vue-cutter.vue?vue&type=style&index=0&id=c4df5aae&scoped=true&lang=sass&");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__vue_cutter_vue_vue_type_style_index_0_id_c4df5aae_scoped_true_lang_sass___ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__node_modules_vue_loader_lib_runtime_componentNormalizer_js__ = __webpack_require__(88);






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
  var api = require("F:\\project\\vue-cutter\\node_modules\\vue-hot-reload-api\\dist\\index.js")
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
      ref: "cropper",
      staticClass: "container",
      style: {
        width:
          typeof _vm.containerWidth !== "undefined"
            ? _vm.containerWidth + "px"
            : _vm.containerHeight + "px",
        height:
          typeof _vm.containerHeight === "undefined"
            ? _vm.containerWidth + "px"
            : _vm.containerHeight + "px"
      },
      on: { mouseover: _vm.scaleImage, mouseout: _vm.cancelScale }
    },
    [
      _c("div", { staticClass: "cropper-container theme" }, [
        _c("input", {
          ref: "add",
          staticClass: "addImage",
          attrs: { type: "file", id: "addFile" },
          on: { change: _vm.addImageChange }
        }),
        _vm._v(" "),
        _c("span", {
          staticClass: "cropper-container-bg",
          class:
            _vm.themes.indexOf(_vm.theme) !== -1
              ? "theme-" + _vm.theme
              : "theme-dark"
        }),
        _vm._v(" "),
        _vm.showImg
          ? _c("div", { staticClass: "cropper-box" }, [
              !_vm.loading
                ? _c(
                    "div",
                    {
                      ref: "image",
                      staticClass: "cropper-box-canvas",
                      style: {
                        width: _vm.sourceImageData.width + "px",
                        height: _vm.sourceImageData.height + "px",
                        transform:
                          "scale(" +
                          _vm.sourceImageData.scale +
                          "," +
                          _vm.sourceImageData.scale +
                          ") " +
                          "translate3d(" +
                          _vm.sourceImageData.x / _vm.sourceImageData.scale +
                          "px," +
                          _vm.sourceImageData.y / _vm.sourceImageData.scale +
                          "px," +
                          "0)" +
                          "rotateZ(" +
                          _vm.sourceImageData.rotate * 90 +
                          "deg)"
                      }
                    },
                    [_c("img", { attrs: { src: _vm.showImg, alt: "" } })]
                  )
                : _vm._e()
            ])
          : _vm._e(),
        _vm._v(" "),
        _c("div", {
          staticClass: "cropper-drag-box cropper-move",
          on: { mousedown: _vm.moveImage }
        }),
        _vm._v(" "),
        _c(
          "div",
          {
            directives: [
              {
                name: "show",
                rawName: "v-show",
                value: !_vm.loading && _vm.cropperBox.ready,
                expression: "!loading && cropperBox.ready"
              }
            ],
            staticClass: "cropper-context",
            style: {
              width: _vm.cropperBox.width + "px",
              height: _vm.cropperBox.height + "px",
              transform:
                "translate3d(" +
                _vm.cropperBox.x +
                "px," +
                _vm.cropperBox.y +
                "px," +
                "0)"
            }
          },
          [
            _c("span", { staticClass: "cropper-view-box" }, [
              _c("img", {
                style: {
                  width: _vm.sourceImageData.width,
                  height: _vm.sourceImageData.height,
                  transform:
                    "scale(" +
                    _vm.sourceImageData.scale +
                    "," +
                    _vm.sourceImageData.scale +
                    ") " +
                    "translate3d(" +
                    (_vm.sourceImageData.x - _vm.cropperBox.x) /
                      _vm.sourceImageData.scale +
                    "px," +
                    (_vm.sourceImageData.y - _vm.cropperBox.y) /
                      _vm.sourceImageData.scale +
                    "px," +
                    "0)" +
                    "rotateZ(" +
                    _vm.sourceImageData.rotate * 90 +
                    "deg)"
                },
                attrs: { src: _vm.showImg, alt: "" }
              })
            ]),
            _vm._v(" "),
            _c("span", {
              staticClass: "cropper-view-box-dr cropper-view-box-dr-bg",
              on: { mousedown: _vm.moveCrop }
            }),
            _vm._v(" "),
            !_vm.fixedBox && _vm.showImg
              ? _c("div", { staticClass: "fixedBox" }, [
                  _c("span", {
                    staticClass: "f fht",
                    on: {
                      mousedown: function($event) {
                        return _vm.resizeCropBox($event, false, true, 0, 1, 22)
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c("span", {
                    staticClass: "f fvr",
                    on: {
                      mousedown: function($event) {
                        return _vm.resizeCropBox($event, true, false, 2, 0, 2)
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c("span", {
                    staticClass: "f fhb",
                    on: {
                      mousedown: function($event) {
                        return _vm.resizeCropBox($event, false, true, 0, 2, 3)
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c("span", {
                    staticClass: "f fvl",
                    on: {
                      mousedown: function($event) {
                        return _vm.resizeCropBox($event, true, false, 1, 0, 4)
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c("span", {
                    staticClass: "f dot dot-1",
                    on: {
                      mousedown: function($event) {
                        return _vm.resizeCropBox($event, true, true, 1, 1, 1)
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c("span", {
                    staticClass: "f dot dot-2",
                    on: {
                      mousedown: function($event) {
                        return _vm.resizeCropBox($event, false, true, 0, 1, 6)
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c("span", {
                    staticClass: "f dot dot-3",
                    on: {
                      mousedown: function($event) {
                        return _vm.resizeCropBox($event, true, true, 2, 1, 3)
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c("span", {
                    staticClass: "f dot dot-4",
                    on: {
                      mousedown: function($event) {
                        return _vm.resizeCropBox($event, true, false, 2, 0, 8)
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c("span", {
                    staticClass: "f dot dot-5",
                    on: {
                      mousedown: function($event) {
                        return _vm.resizeCropBox($event, true, true, 2, 2, 1)
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c("span", {
                    staticClass: "f dot dot-6",
                    on: {
                      mousedown: function($event) {
                        return _vm.resizeCropBox($event, false, true, 0, 2, 10)
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c("span", {
                    staticClass: "f dot dot-7",
                    on: {
                      mousedown: function($event) {
                        return _vm.resizeCropBox($event, true, true, 1, 2, 3)
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c("span", {
                    staticClass: "f dot dot-8",
                    on: {
                      mousedown: function($event) {
                        return _vm.resizeCropBox($event, true, false, 1, 0, 12)
                      }
                    }
                  })
                ])
              : _vm._e()
          ]
        )
      ])
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(44);


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// This method of obtaining a reference to the global object needs to be
// kept identical to the way it is obtained in runtime.js
var g = (function() { return this })() || Function("return this")();

// Use `getOwnPropertyNames` because not all browsers support calling
// `hasOwnProperty` on the global `self` object in a worker. See #183.
var hadRuntime = g.regeneratorRuntime &&
  Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;

// Save the old regeneratorRuntime in case it needs to be restored later.
var oldRuntime = hadRuntime && g.regeneratorRuntime;

// Force reevalutation of runtime.js.
g.regeneratorRuntime = undefined;

module.exports = __webpack_require__(45);

if (hadRuntime) {
  // Restore the original runtime.
  g.regeneratorRuntime = oldRuntime;
} else {
  // Remove the global property added by runtime.js.
  try {
    delete g.regeneratorRuntime;
  } catch(e) {
    g.regeneratorRuntime = undefined;
  }
}


/***/ }),
/* 45 */
/***/ (function(module, exports) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

!(function(global) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  var inModule = typeof module === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  runtime.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  runtime.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  runtime.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration. If the Promise is rejected, however, the
          // result for this iteration will be rejected with the same
          // reason. Note that rejections of yielded Promises are not
          // thrown back into the generator function, as is the case
          // when an awaited Promise is rejected. This difference in
          // behavior between yield and await is important, because it
          // allows the consumer to decide what to do with the yielded
          // rejection (swallow it and continue, manually .throw it back
          // into the generator, abandon iteration, whatever). With
          // await, by contrast, there is no opportunity to examine the
          // rejection reason outside the generator function, so the
          // only option is to throw it from the await expression, and
          // let the generator function handle the exception.
          result.value = unwrapped;
          resolve(result);
        }, reject);
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  runtime.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return runtime.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        if (delegate.iterator.return) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  runtime.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };
})(
  // In sloppy mode, unbound `this` refers to the global object, fallback to
  // Function constructor if we're in global strict mode. That is sadly a form
  // of indirect eval which violates Content Security Policy.
  (function() { return this })() || Function("return this")()
);


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _promise = __webpack_require__(24);

var _promise2 = _interopRequireDefault(_promise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (fn) {
  return function () {
    var gen = fn.apply(this, arguments);
    return new _promise2.default(function (resolve, reject) {
      function step(key, arg) {
        try {
          var info = gen[key](arg);
          var value = info.value;
        } catch (error) {
          reject(error);
          return;
        }

        if (info.done) {
          resolve(value);
        } else {
          return _promise2.default.resolve(value).then(function (value) {
            step("next", value);
          }, function (err) {
            step("throw", err);
          });
        }
      }

      return step("next");
    });
  };
};

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(48);
__webpack_require__(49);
__webpack_require__(64);
__webpack_require__(68);
__webpack_require__(80);
__webpack_require__(81);
module.exports = __webpack_require__(2).Promise;


/***/ }),
/* 48 */
/***/ (function(module, exports) {



/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__(50)(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(25)(String, 'String', function (iterated) {
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
/* 50 */
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
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(6) && !__webpack_require__(26)(function () {
  return Object.defineProperty(__webpack_require__(17)('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 52 */
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
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(4);


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(55);
var descriptor = __webpack_require__(27);
var setToStringTag = __webpack_require__(20);
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(4)(IteratorPrototype, __webpack_require__(1)('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(3);
var dPs = __webpack_require__(56);
var enumBugKeys = __webpack_require__(31);
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
  __webpack_require__(32).appendChild(iframe);
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
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(11);
var anObject = __webpack_require__(3);
var getKeys = __webpack_require__(57);

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
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(58);
var enumBugKeys = __webpack_require__(31);

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(12);
var toIObject = __webpack_require__(18);
var arrayIndexOf = __webpack_require__(60)(false);
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
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(13);
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(18);
var toLength = __webpack_require__(28);
var toAbsoluteIndex = __webpack_require__(61);
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
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(14);
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(12);
var toObject = __webpack_require__(63);
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
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(15);
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(65);
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
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(66);
var step = __webpack_require__(67);
var Iterators = __webpack_require__(7);
var toIObject = __webpack_require__(18);

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(25)(Array, 'Array', function (iterated, kind) {
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
/* 66 */
/***/ (function(module, exports) {

module.exports = function () { /* empty */ };


/***/ }),
/* 67 */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(16);
var global = __webpack_require__(0);
var ctx = __webpack_require__(9);
var classof = __webpack_require__(33);
var $export = __webpack_require__(8);
var isObject = __webpack_require__(5);
var aFunction = __webpack_require__(10);
var anInstance = __webpack_require__(69);
var forOf = __webpack_require__(70);
var speciesConstructor = __webpack_require__(34);
var task = __webpack_require__(35).set;
var microtask = __webpack_require__(75)();
var newPromiseCapabilityModule = __webpack_require__(21);
var perform = __webpack_require__(36);
var userAgent = __webpack_require__(76);
var promiseResolve = __webpack_require__(37);
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
  Internal.prototype = __webpack_require__(77)($Promise.prototype, {
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
__webpack_require__(78)(PROMISE);
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
$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(79)(function (iter) {
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
/* 69 */
/***/ (function(module, exports) {

module.exports = function (it, Constructor, name, forbiddenField) {
  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};


/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(9);
var call = __webpack_require__(71);
var isArrayIter = __webpack_require__(72);
var anObject = __webpack_require__(3);
var toLength = __webpack_require__(28);
var getIterFn = __webpack_require__(73);
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
/* 71 */
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
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators = __webpack_require__(7);
var ITERATOR = __webpack_require__(1)('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(33);
var ITERATOR = __webpack_require__(1)('iterator');
var Iterators = __webpack_require__(7);
module.exports = __webpack_require__(2).getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),
/* 74 */
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
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(0);
var macrotask = __webpack_require__(35).set;
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
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(0);
var navigator = global.navigator;

module.exports = navigator && navigator.userAgent || '';


/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

var hide = __webpack_require__(4);
module.exports = function (target, src, safe) {
  for (var key in src) {
    if (safe && target[key]) target[key] = src[key];
    else hide(target, key, src[key]);
  } return target;
};


/***/ }),
/* 78 */
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
/* 79 */
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
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// https://github.com/tc39/proposal-promise-finally

var $export = __webpack_require__(8);
var core = __webpack_require__(2);
var global = __webpack_require__(0);
var speciesConstructor = __webpack_require__(34);
var promiseResolve = __webpack_require__(37);

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
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/tc39/proposal-promise-try
var $export = __webpack_require__(8);
var newPromiseCapability = __webpack_require__(21);
var perform = __webpack_require__(36);

$export($export.S, 'Promise', { 'try': function (callbackfn) {
  var promiseCapability = newPromiseCapability.f(this);
  var result = perform(callbackfn);
  (result.e ? promiseCapability.reject : promiseCapability.resolve)(result.v);
  return promiseCapability.promise;
} });


/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _promise = __webpack_require__(24);

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
/* 83 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_indentedSyntax_node_modules_vue_loader_lib_index_js_vue_loader_options_vue_cutter_vue_vue_type_style_index_0_id_c4df5aae_scoped_true_lang_sass___ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_indentedSyntax_node_modules_vue_loader_lib_index_js_vue_loader_options_vue_cutter_vue_vue_type_style_index_0_id_c4df5aae_scoped_true_lang_sass____default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_indentedSyntax_node_modules_vue_loader_lib_index_js_vue_loader_options_vue_cutter_vue_vue_type_style_index_0_id_c4df5aae_scoped_true_lang_sass___);
/* unused harmony reexport namespace */
 /* unused harmony default export */ var _unused_webpack_default_export = (__WEBPACK_IMPORTED_MODULE_0__node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_indentedSyntax_node_modules_vue_loader_lib_index_js_vue_loader_options_vue_cutter_vue_vue_type_style_index_0_id_c4df5aae_scoped_true_lang_sass____default.a); 

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(85)(false);
// imports


// module
exports.push([module.i, ".theme-dark[data-v-c4df5aae] {\n  background: rgba(42, 43, 42, 0.65);\n}\n.theme-warm[data-v-c4df5aae] {\n  background: rgba(249, 192, 78, 0.65);\n}\n.theme-pink[data-v-c4df5aae] {\n  background: rgba(255, 139, 165, 0.5);\n}\n.theme[data-v-c4df5aae] {\n  background-image: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAQMAAAAlPW0iAAAAA3NCSVQICAjb4U/gAAAABlBMVEXMzMz////TjRV2AAAACXBIWXMAAArrAAAK6wGCiw1aAAAAHHRFWHRTb2Z0d2FyZQBBZG9iZSBGaXJld29ya3MgQ1M26LyyjAAAABFJREFUCJlj+M/AgBVhF/0PAH6/D/HkDxOGAAAAAElFTkSuQmCC\") !important;\n}\n.cropper-container-bg[data-v-c4df5aae] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n}\n.container[data-v-c4df5aae] {\n  position: relative;\n  display: inline-block;\n}\n.cropper-container[data-v-c4df5aae] {\n  width: 100%;\n  height: 100%;\n  position: relative;\n  box-sizing: border-box;\n  top: 0;\n  left: 0;\n  overflow-y: hidden;\n  overflow-x: hidden;\n  cursor: move;\n  user-select: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  direction: ltr;\n  touch-action: none;\n  text-align: left;\n}\n.cropper-box-canvas[data-v-c4df5aae],\n.cropper-drag-box[data-v-c4df5aae],\n.cropper-view-box-dr[data-v-c4df5aae],\n.cropper-box[data-v-c4df5aae] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  user-select: none;\n}\n.cropper-box-canvas[data-v-c4df5aae] {\n  display: block;\n  text-align: left;\n}\n.cropper-move[data-v-c4df5aae] {\n  background: rgba(0, 0, 0, 0.1);\n}\n.cropper-context[data-v-c4df5aae] {\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n.cropper-view-box[data-v-c4df5aae] {\n  display: block;\n  overflow: hidden;\n  width: 100%;\n  height: 100%;\n  outline: 2px solid #39f;\n  outline-color: rgba(51, 153, 255, 0.75);\n  user-select: none;\n}\n.cropper-view-box img[data-v-c4df5aae] {\n  user-select: none;\n  text-align: left;\n  max-width: none;\n  max-height: none;\n}\n.cropper-view-box-dr-bg[data-v-c4df5aae] {\n  top: 0;\n  left: 0;\n  background-color: #fff;\n  opacity: 0.2;\n}\n.fixedBox[data-v-c4df5aae] {\n  display: inline-block;\n}\n.f[data-v-c4df5aae] {\n  display: inline-block;\n  position: absolute;\n}\n.fht[data-v-c4df5aae] {\n  top: -1px;\n  left: 0;\n  width: 100%;\n  height: 2px;\n  cursor: n-resize;\n}\n.fhb[data-v-c4df5aae] {\n  bottom: -1px;\n  left: 0;\n  width: 100%;\n  height: 2px;\n  cursor: s-resize;\n}\n.fvl[data-v-c4df5aae] {\n  height: 100%;\n  width: 2px;\n  left: -1px;\n  top: 0;\n  cursor: w-resize;\n}\n.fvr[data-v-c4df5aae] {\n  height: 100%;\n  width: 2px;\n  right: -1px;\n  top: 0;\n  cursor: e-resize;\n}\n.dot[data-v-c4df5aae] {\n  background: #3399ff;\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n}\n.dot-1[data-v-c4df5aae] {\n  top: -4px;\n  left: -4px;\n  cursor: nw-resize;\n}\n.dot-2[data-v-c4df5aae] {\n  top: -4px;\n  left: 50%;\n  transform: translateX(-4px);\n  cursor: n-resize;\n}\n.dot-3[data-v-c4df5aae] {\n  top: -4px;\n  right: -4px;\n  cursor: ne-resize;\n}\n.dot-4[data-v-c4df5aae] {\n  top: 50%;\n  right: -4px;\n  transform: translateY(-4px);\n  cursor: e-resize;\n}\n.dot-5[data-v-c4df5aae] {\n  bottom: -4px;\n  right: -4px;\n  cursor: se-resize;\n}\n.dot-6[data-v-c4df5aae] {\n  bottom: -4px;\n  left: 50%;\n  transform: translateX(-4px);\n  cursor: s-resize;\n}\n.dot-7[data-v-c4df5aae] {\n  bottom: -4px;\n  left: -4px;\n  cursor: sw-resize;\n}\n.dot-8[data-v-c4df5aae] {\n  top: 50%;\n  transform: translateY(-4px);\n  left: -4px;\n  cursor: w-resize;\n}\n.addImage[data-v-c4df5aae] {\n  position: absolute;\n  width: 0.1rem;\n  height: 0.1rem;\n  z-index: -10;\n}\n", ""]);

// exports


/***/ }),
/* 85 */
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
/* 86 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["default"] = addStylesClient;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__listToStyles__ = __webpack_require__(87);
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
/* 87 */
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
/* 88 */
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