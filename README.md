<p align="center">
  <img width="450" src="https://raw.githubusercontent.com/gracy520/vue-cutter/f13673823bc0f396c931215b9185f83c7e86f32f/src/assets/logo.svg">
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

- 基于`vue`和`javascript`开发的一款图片剪裁处理工具
- 优点：**原生、轻量、使用简单、功能全面、扩展性强**
- 目前功能：**缩放、矩形剪裁**
- 关于缩放：鼠标（鼠标滚轮缩放）

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
import VueCutter from 'vue-cutter'
Vue.use(VueCutter)

// 组件内使用
import { VueCutter } from 'vue-cutter'
components: { VueCutter }
```

```vue
<vue-cutter
   :container-width="option.width"
   :container-height="option.height"
   :outputType="option.type">
</vue-cutter>
```

### 属性
<table>
    <tr>
        <td>参数</td>
        <td>说明</td>
        <td>类型</td>
        <td>可选值</td>
        <td>默认值</td>
    </tr>
    <tr>
        <td>image</td>
        <td>裁剪图片的地址</td>
        <td>String</td>
        <td>url 地址 || base64 || blob</td>
        <td>空</td>
    </tr>
    <tr>
        <td>containerWidth</td>
        <td>插件容器的宽度</td>
        <td>Number</td>
        <td>0~max</td>
        <td>0</td>
    </tr>
    <tr>
        <td>containerHeight</td>
        <td>插件容器的高度</td>
        <td>Number</td>
        <td>0~max</td>
        <td>0</td>
    </tr>
    <tr>
        <td>theme</td>
        <td>容器背景主题</td>
        <td>String</td>
        <td>dark || warm || pink</td>
        <td>dark</td>
    </tr>
    <tr>
        <td>mode</td>
        <td>图片默认渲染方式</td>
        <td>String</td>
        <td>contain , cover, 100px, 100% auto</td>
        <td>contain</td>
    </tr>
    <tr>
        <td>maxImgSize</td>
        <td>限制图片最大宽度和高度</td>
        <td>Number</td>
        <td>0~max</td>
        <td>2000</td>
    </tr>
    <tr>
        <td>outputType</td>
        <td>裁剪生成图片的格式</td>
        <td>String</td>
        <td>jpeg || png || webp</td>
        <td>jpg (jpg 需要传入jpeg)</td>
    </tr>
    <tr>
        <td>original</td>
        <td>上传图片按照原始比例渲染</td>
        <td>Boolean</td>
        <td>true | false</td>
        <td>false</td>
    </tr>
    <tr>
        <td>canScale</td>
        <td>图片是否允许滚轮缩放</td>
        <td>Boolean</td>
        <td>true | false</td>
        <td>true</td>
    </tr>
    <tr>
        <td>canMoveImage</td>
        <td>是否能移动图片</td>
        <td>Boolean</td>
        <td>true | false</td>
        <td>true</td>
    </tr>
    <tr>
        <td>cropBoxBoundary</td>
        <td>裁剪框宽高</td>
        <td>String || Number</td>
        <td>auto || 200 || 200px || 200px 200px || 50% 等</td>
        <td>auto (容器宽高的50%)</td>
    </tr>
    <tr>
        <td>fixed</td>
        <td>是否开启固定宽高比</td>
        <td>Boolean</td>
        <td>true | false</td>
        <td>false</td>
    </tr>
    <tr>
        <td>fixedNumber</td>
        <td>插件框宽高比</td>
        <td>Array</td>
        <td>[1, 1] || other</td>
        <td>空 （默认容器的宽高比）</td>
    </tr>
    <tr>
        <td>fixedBox</td>
        <td>固定大小 禁止改变截图框大小</td>
        <td>Boolean</td>
        <td>true | false</td>
        <td>false</td>
    </tr>
    <tr>
        <td>canMoveCropBox</td>
        <td>是否能移动裁剪框</td>
        <td>Boolean</td>
        <td>true | false</td>
        <td>true</td>
    </tr>
    <tr>
        <td>cropCanOverImageBorder</td>
        <td>截图框是否被限制在图片里面</td>
        <td>Boolean</td>
        <td>true | false</td>
        <td>false</td>
    </tr>
</table>

### 内置方法
##### 通过 `ref` 和 `$refs` 调用

```vue
// 在标签上添加 ref= "cropper"
<vue-picture-cropper
    ref="cropper"
>
</vue-picture-cropper>
```

<table>
    <tr>
        <td>方法</td>
        <td>说明</td>
    </tr>
    <tr>
        <td>this.$refs.cropper.addImage()</td>
        <td>添加将要裁剪的图片</td>
    </tr>
     <tr>
        <td>this.$refs.cropper.getCropBlob(function)</td>
        <td>获取 Blob 格式的图片</td>
     </tr>
</table>

### License
###### Released under the MIT License.
