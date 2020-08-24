<p align="center">
  <img width="200" src="https://raw.githubusercontent.com/lyuanshen/vue-pictrue-cropper/a2319bbac4f56274e90fe1f0cc22a84e91b00667/src/assets/logo2.svg">
</p>

<p align="center">
  <a href="https://github.com/vuejs/vue">
      <img src="https://img.shields.io/badge/vue-2.5.17-brightgreen.svg" alt="vue">
   </a>
   <a href="#">
      <img src="https://img.shields.io/github/license/mashape/apistatus.svg" alt="license">
   </a>
   <a href="#">
      <img src="https://img.shields.io/badge/releases-1.0.2-ff69b4.svg" alt="license">
   </a>
</p>

## 简介

基于`vue`和`javascript`开发的一款图片剪裁处理工具  
优点：**原生、轻量、使用简单、功能全面、扩展性强**  
目前功能：**缩放、翻折、旋转、边缘校验、矩形剪裁**  
关于缩放：鼠标（鼠标滚轮缩放）、触屏（双指缩放）

## 在线预览

> [demo : https://lyuanshen.github.io/vue-pictrue-cropper](https://lyuanshen.github.io/vue-pictrue-cropper/)

## 使用方法
### 安装 
[![NPM](https://nodei.co/npm/vue-picture-cropper.png?downloadRank=true)](https://nodei.co/npm/vue-picture-cropper/)


```
npm install --save vue-picture-cropper
```

### 用法

```js
// main.js里面使用
import vuePictureCropper from 'vue-picture-cropper'
Vue.use(vuePictureCropper)

// 组件内使用
import { VuePictureCropper } from 'vue-picture-cropper'
components: { VuePictureCropper }
```

```vue
<vue-picture-cropper
   ref="cropper"
   :container-width="option.width"
   :container-height="option.height"
   :outputType="option.type">
</vue-picture-cropper>
```