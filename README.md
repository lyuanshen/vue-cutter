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

- 基于`vue`和`javascript`开发的一款图片剪裁处理工具
- 优点：**原生、轻量、使用简单、功能全面、扩展性强**
- 目前功能：**缩放、翻折、旋转、边缘校验、矩形剪裁**
- 关于缩放：鼠标（鼠标滚轮缩放）、触屏（双指缩放）（双指缩放）

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

### 属性
| 参数                     | 说明             | 类型                 | 可选值                                                  | 默认值                  |
|:----------------------:|:--------------:|:------------------:|:----------------------------------------------------:|:--------------------:|
| image                  | 裁剪图片的地址        | String             | url 地址 \|\| base64 \|\| blob                         | 空                    |
| containerWidth         | 插件容器的宽度        | Number             | 0~max                                                | 0                    |
| containerHeight        | 插件容器的高度        | Number             | 0~max                                                | 0                    |
| theme                  | 容器背景主题         | String             | dark \|\| warm \|\| pink                             | dark                 |
| mode                   | 图片默认渲染方式       | String             | contain , cover, 100px, 100% auto                    | contain              |
| maxImgSize             | 限制图片最大宽度和高度    | Number             | 0~max                                                | 2000                 |
| outputType             | 裁剪生成图片的格式      | String             | jpeg \|\| png \|\| webp                              | jpg \(jpg 需要传入jpeg\) |
| original               | 上传图片按照原始比例渲染   | Boolean            | true \| false                                        | false                |
| canScale               | 图片是否允许滚轮缩放     | Boolean            | true \| false                                        | true                 |
| canMoveImage           | 是否能移动图片        | Boolean            | true \| false                                        | true                 |
| cropBoxBoundary        | 裁剪框宽高          | String \|\| Number | auto \|\| 200 \|\| 200px \|\| 200px 200px \|\| 50% 等 | auto \(容器宽高的50%\)    |
| fixed                  | 是否开启固定宽高比      | Boolean            | true \| false                                        | false                |
| fixedNumber            | 插件框宽高比         | Array              | \[1, 1\] \|\| other                                  | 空 （默认容器的宽高比）         |
| fixedBox               | 固定大小 禁止改变截图框大小 | Boolean            | true \| false                                        | false                |
| canMoveCropBox         | 是否能移动裁剪框       | Boolean            | true \| false                                        | true                 |
| cropCanOverImageBorder | 截图框是否被限制在图片里面  | Boolean            | true \| false                                        | false                |

