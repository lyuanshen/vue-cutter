<p align="center">
  <img width="158" src="https://raw.githubusercontent.com/lyuanshen/vue-cutter/5c243a0243b44ed5388419fa5493d7850e2413fd/src/assets/logo.svg">
</p>

<p align="center">
  <img width="408" height="67" src="https://github.com/lyuanshen/vue-cutter/blob/master/src/assets/name.png?raw=true">
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
- 目前功能：**支持旋转、缩放、平移，固定比例，固定尺寸**
- 支持 `PC端` 和 `移动端`
- 关于缩放：鼠标（鼠标滚轮缩放）, 移动端双指缩放

## 在线预览

> [demo : https://lyuanshen.github.io/vue-cutter/](https://lyuanshen.github.io/vue-cutter/)

## 使用方法
### 安装

```
// npm 安装
npm install vue-cutter --save
```

```
// yarn 安装
yarn add vue-cutter --save
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
<template>
  <div>
    <vue-cutter
      :container-bounding="options.bounding"
      :src="options.src"
      :output-type="options.outputType"
    ></vue-cutter>
  </div>
</template>

<script>
  export default {
    name: "App",
    data() {
      return{
        options: {
          bounding: '500px 300px',
          src: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=4110377719,1460950412&fm=26&gp=0.jpg',
          outputType: 'png'
        }
      }
    }
  }
</script>
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
        <td>containerBounding</td>
        <td>插件容器的宽高（必填）</td>
        <td>String</td>
        <td>'450px 300px' | '45% 30%' | '450px' | '45%' | '450'</td>
        <td>空  || 字符串可以有两个或一个参数，两个参数时分别为容器的宽高，一个参数时容器的宽高同为参数</td>
    </tr>
    <tr>
        <td>src</td>
        <td>裁剪图片的地址</td>
        <td>String</td>
        <td>url 地址  |  base64  | blob</td>
        <td>空</td>
    </tr>
    <tr>
        <td>mode</td>
        <td>图片默认渲染方式</td>
        <td>String</td>
        <td>contain  | cover |  100px, 100% auto | original</td>
        <td> contain </td>
    </tr>
    <tr>
        <td>outputType</td>
        <td>裁剪生成图片的格式</td>
        <td>String</td>
        <td>jpeg  |  png  |  webp  |  jgif</td>
        <td>jpeg  </td>
    </tr>
    <tr>
        <td>highQuality</td>
        <td>输出高清的图片</td>
        <td>Boolean</td>
        <td>true  |  false</td>
        <td>false</td>
    </tr>
    <tr>
        <td>canImgMoved</td>
        <td>是否能移动图片</td>
        <td>Boolean</td>
        <td>true | false</td>
        <td>true</td>
    </tr>
    <tr>
        <td>canImgScale</td>
        <td>图片是否允许缩放</td>
        <td>Boolean</td>
        <td>true | false</td>
        <td>true</td>
    </tr>
    <tr>
        <td>cropBoxBounding</td>
        <td>裁剪框宽高</td>
        <td>String</td>
        <td>auto || 200 || 200px || 200px 200px || 50% 等</td>
        <td>auto (图片宽高的80%)</td>
    </tr>
    <tr>
        <td>canCropMove</td>
        <td>是否能移动裁剪框</td>
        <td>Boolean</td>
        <td>true | false</td>
        <td>true</td>
    </tr>
    <tr>
        <td>canCropOverImg</td>
        <td>裁剪框是否被限制在图片里面</td>
        <td>Boolean</td>
        <td>true | false</td>
        <td>true</td>
    </tr>
    <tr>
        <td>fixed</td>
        <td>裁剪款的宽高比</td>
        <td>[Array, String]</td>
        <td>auto | [4, 3] 等</td>
        <td>默认为空，不开启宽高比；值 `auto` 时 为源图片的宽高比，数组时为两数比</td>
    </tr>
    <tr>
        <td>canCropResized</td>
        <td>裁剪框是否允许缩放</td>
        <td>Boolean</td>
        <td>true | false</td>
        <td>true</td>
    </tr>
    <tr>
        <td>cropDividingLine</td>
        <td>裁剪框内的分割线</td>
        <td>Boolean</td>
        <td>true | false</td>
        <td>false</td>
    </tr>
    <tr>
        <td>cropInfo</td>
        <td>是否开启显示裁剪宽的宽高比</td>
        <td>Boolean</td>
        <td>true | false</td>
        <td>false</td>
    </tr>
</table>

### 内置方法
##### 通过 `ref` 和 `$refs` 调用

```vue
// 在标签上添加 ref= "cutter"
<vue-cutter
   ref="cutter"
 >
</vue-cutter>
```

<table>
    <tr>
        <td>方法</td>
        <td>说明</td>
    </tr>
    <tr>
        <td>this.$refs.cutter.addLocalImage()</td>
        <td>添加本地要裁剪的图片</td>
    </tr>
    <tr>
        <td>this.$refs.cutter.relativeZoom(param)</td>
        <td>对图片进行缩放，正数为放大，负数为缩小</td>
    </tr>
    <tr>
        <td>this.$refs.cutter.rotateLeft()</td>
        <td>图片逆时针旋转 90 度</td>
    </tr>
    <tr>
        <td>this.$refs.cutter.rotateRight()</td>
        <td>图片顺时针旋转 90 度</td>
    </tr>
    <tr>
        <td>this.$refs.cutter.rotateClear()</td>
        <td>清除旋转</td>
    </tr>
    <tr>
        <td>this.$refs.cutter.getImgAxis()</td>
        <td>获取图像的轴</td>
    </tr>
    <tr>
        <td>this.$refs.cutter.getCropAxis()</td>
        <td>获取裁剪框的轴</td>
    </tr>
    <tr>
        <td>this.$refs.cutter.getBase64Data(funtion)</td>
        <td>获取 base64 格式的图片</td>
    </tr>
    <tr>
        <td>this.$refs.cutter.getBlobData(funtion)</td>
        <td>获取 blob 格式的图片</td>
    </tr>
</table>

```javascript

//获取 base64 格式的图片
this.$refs.cutter.getBase64Data(data => {
  console.log(data)
})

//获取 blob 格式的图片
this.$refs.cutter.getBlobData(data => {
   console.log(data)
})
```

### 钩子函数：
##### 图片实时预览函数 @preview

```vue
<vue-cutter
   @preview="preview"
 >
</vue-cutter>
```

```vue
// data
data(){
   return{
     html: ''
  }
}

// method
preview(data) {
   const { html } = data;
   this.html = html;
}

// html
<div v-html="html"></div>
```

### License
###### Released under the MIT License.
