<template>
  <div class="dashboard-container">
    <div class="hero">
      <svg-icon icon-class="logo" class="logo"/>
      <h1 class="name">VueCutter.Js</h1>
      <p class="description">
        VueCutter - {{$t('dashboard.description')}}
      </p>
      <el-button style="width: 10rem;height: 3.0rem;margin: 1.8rem auto;background:#4abf8a;"
                 type="success" size="medium">
        {{$t('dashboard.start')}}
        <i class="el-icon-right"></i>
      </el-button>
    </div>

    <div class="features">
      <el-row :gutter="20">
        <el-col v-for="item in featureList" :key="item.id"
                :md="8"
                :sm="12"
                :xs="24"
                class="feature"
        >
          <div>
            <h2>{{item.name}}</h2>
            <p>{{item.description}}</p>
          </div>
        </el-col>
      </el-row>

    </div>
    <div class="content custom">
      <h2 class="tt">
        <a href="#一个简单的例子">#</a>
        一个简单的例子
      </h2>

      <div
        class="language-javascript extra-class">
        <pre class="js" v-html="js">

        </pre>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "index",
    data() {
      return {
        featureList: [
          {
            id: '0',
            name: '可定制',
            description: '完全可定制化， 你可以自定义滚动条、滚动轨道、滚动按钮等'
          },
          {
            id: '1',
            name: '上拉-刷新和下拉-加载',
            description: '支持上拉-刷新和下拉-加载， 并且你可以定制它们的动画效果！'
          },
          {
            id: '2',
            name: '平滑地滚动',
            description: 'Vuescroll 支持平滑地滚动， 你可以在Vue.js上平滑的滚动滚动条！'
          },
          {
            id: '3',
            name: '支持轮播图',
            description: 'Vuescroll 支持轮播图，无需复杂的配置，只要把内容包裹起来就能得到你自己的轮播图组件！'
          }
        ],
        js: '<pre><strong><span style="color: #000080;">import </span>Vue</strong> <span style="color: #000080;"><strong>from</strong></span> <span style="color: #008000;">\'vue\'<br /></span><br /><span style="color: #000080;">import</span> <strong>VueCutter</strong> <span style="color: #000080;">from</span> <span style="color: #008000;">\'vue-cutter\'</span><br /><br /><strong>Vue</strong>.<span style="color: #808080;">use</span>(<strong>VueCutter</strong>)</pre>'
      }
    }
  }
</script>

<style scoped>
  .dashboard-container {
    max-width: 960px;
    min-height: calc(100vh - 58px);
    display: block;
    margin: 0 auto;
    height: 100%;
    padding: 0 2rem 0;
  }

  .hero {
    width: 100%;
    height: 404px;
    text-align: center;
  }

  .logo {
    max-width: 280px;
    display: block;
    margin: 3rem auto 1.5rem;
    font-size: 13rem;
  }

  .name {
    font-size: 2.7rem;
    font-weight: 600;
    margin: 1rem auto;
    line-height: 1.25;
  }

  .description {
    max-width: 30rem;
    font-size: 1.3rem;
    line-height: 1.3;
    color: #6a8bad;
    margin: 0 auto;
  }

  .features {
    border-top: 1px solid #e4e6e9;
    padding: 1.2rem 0;
    margin-top: 2.5rem;
  }

  .feature{
    margin-bottom: 1.0rem;
  }

  .feature h2 {
    font-size: 1.4rem;
    font-weight: 500;
    color: #3a5169;
    line-height: 1.25;
  }

  .feature p {
    color: #4e6e8e;
    line-height: 1.7;
  }
  .content {
    padding: 0;
    margin: 0;
  }
  .tt{
    text-align: left;
    padding-bottom: 0.3rem;
    border-bottom: 1px solid #dadcdf;
  }
  .tt a{
    font-size: 0.85em;
    margin-left: -.87em;
    padding-right: .23em;
    margin-top: .125em;
    opacity: 0;
    color: #3eaf7c;
    text-decoration: none;
    font-weight: 600;
  }
  .tt a:hover{
    opacity: 1;
  }
  .language-javascript {
    width: 100%;
    background: #282c34;
    height: 50px;
    position: relative;
    border-radius: 6px;
    text-align: left;
  }
  .language-javascript:before{
    content: 'js';
    position: absolute;
    z-index: 3;
    top: .8rem;
    right: .3rem;
    font-size: 0.75rem;
    color: hsla(0,0%,100%,.4);
  }
  .js{
    padding: 1.25rem 1.5rem;
    margin: .85rem 0;
  }
</style>
