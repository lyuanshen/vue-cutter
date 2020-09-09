<template>
  <div>
    <ExHeader></ExHeader>
    <div>
      <div style="position:relative;">
        <b-jumbotron :header-html="title"
                     lead="A image crop plug-in for Vue.js 2,you can use it to rotate、zoom images and cut any size"
                     container-fluid="true" class="main">
          <div class="c">
            <img src="https://img.shields.io/badge/VUE-2.5.17-green?style=for-the-badge" alt="">
            <img src="https://img.shields.io/github/stars/lyuanshen/vue-cutter?style=for-the-badge" alt="">
            <img src="https://img.shields.io/badge/license-MIT-yellow?style=for-the-badge" alt="">
            <img src="https://img.shields.io/npm/v/vue-cutter?style=for-the-badge" alt="">
            <img src="https://img.shields.io/npm/dt/vue-cutter?style=for-the-badge" alt="">
          </div>
          <div class="cc">
            <button type="button" class="btn btn-success btn-lg"><i class="el-icon-download"></i> Download</button>
            <button type="button" class="btn btn-light btn-lg" @click="github">GitHub</button>
          </div>
          <span class="wb"></span>
          <wavify></wavify>
        </b-jumbotron>
      </div>
    </div>
    <b-container fluid>
      <b-row class="bg">
        <div class="col-md-10 offset-md-1">
          <h1 class="bd-title">
            <i class="el-icon-s-help"></i>
            Easy to use
            <small class="text-secondary" style="color: #a8c1dc">Increase of efficiency</small>
          </h1>
          <p class="lead text-muted">You can use it in a few simple steps</p>
          <div class="alert alert-light" style="margin-top: 40px;">
            <code class="language-html">
              <pre>1.Install: npm i vue-cutter --save-dev</pre>
            </code>
            <code class="language-html">
              <pre>2.Import: import VueCutter from 'vue-cutter';</pre>
            </code>
            <code class="language-html">
              <pre>3.Register: Vue.use(VueCutter)  or  components: { VueCutter }</pre>
            </code>
            <code class="language-javascript">
              <pre>4.use: {{use}}
              </pre>
            </code>
          </div>
        </div>
      </b-row>
    </b-container>
    <div class="row bg bg-light" style="padding-bottom: 60px;">
      <div class="col-md-10 offset-md-1">

        <h1 class="bd-title">
          <i class="el-icon-s-tools"></i>
          Online configuration
          <small class="text-secondary" style="color: #a8c1dc">Preview and generate code</small>
        </h1>

        <p class="lead text-muted">Use this tool to preview and generate code。</p>

        <div class="row" style="margin: 66px 0">
          <div class="col-md-6" style="overflow: hidden;height: 458px;" id="vcc">
            <vue-cutter
              ref="cutter"
              :container-bounding="option.bounding"
              :crop-box-bounding="option.cropB"
              :crop-dividing-line="true"
              :src="option.src"
              :crop-info="true"
              @preview="preview"
              @imgLoad="imgLoad"
            ></vue-cutter>
            <div class="vc-controller dockMain" v-if="option.imageload === 'success'">
              <span>
                <i class="el-icon-remove controller-icon-scale icon" @click="zoom(-1)"></i>
                <span class="scale">1.0</span>
                <i class="el-icon-circle-plus controller-icon-scale icon" @click="zoom(1)"></i>
              </span>
              <span style="margin: 0 25px">
                <i class="el-icon-arrow-left controller-icon-turn icon" @click="rotateLeft"></i>
                <i class="el-icon-arrow-right controller-icon-turn icon" @click="rotateRight"></i>
              </span>
              <i class="el-icon-refresh controller-icon icon" @click="rotateClear"></i>
            </div>
          </div>
          <div class="col-md-3">
            <div class="showBox">
              <div class="imgCutDownBoxContainer" v-html="preHtml">
              </div>
              <b-button variant="outline-primary" style="display: block;margin: 0 auto">download</b-button>
            </div>
          </div>
          <div class="col-md-3">
            <form action="">
              <div class="form-group">
                <label for="exampleInputEmail1">Remote pictures src:</label>
                <input type="text" class="form-control" id="exampleInputEmail1" placeholder="" v-model="remotePic">
              </div>
              <div class="form-group">
                <label for="pictures">Remote pictures width：</label>
                <input type="text" class="form-control" id="pictures" placeholder="">
              </div>
              <div class="form-group">
                <label for="picturess">Remote pictures height：</label>
                <input type="text" class="form-control" id="picturess" placeholder="">
              </div>
              <div class="form-group">
                <button type="button" class="btn btn-primary btn-block" @click="addlocal">crop local pictures</button>
              </div>
              <div class="form-group">
                <button type="button"  class="btn btn-secondary btn-block" @click="remote">Crop remote pictures（For IE9+）</button>
              </div>
              <div class="form-group">
                <button type="button" class="btn btn-success btn-block">crop local pictures</button>
              </div>
              <div class="form-group">
                <button type="button" class="btn btn-dark btn-block">reset</button>
              </div>
            </form>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
  import ExHeader from "@/view/dashboard/components/ExHeader";
  import wavify from '@/components/wavify'

  export default {
    name: "index",
    components: {
      ExHeader,
      wavify
    },
    data() {
      return {
        title: '<h1 class="display-3" style="margin-bottom: 20px;">VueCutter' +
          '<span class="badge badge-success" style="font-size: 57% !important;position: relative;bottom: 11px;left: 11px">2.0.2</span>' +
          '</h1>',
        use: '\t<vue-cutter\n' +
          '      \t:container-bounding="options.bounding"\n' +
          '     \t:src="options.src"\n' +
          '      \t:output-type="options.outputType"\n' +
          '    \t></vue-cutter>',
        option: {
          bounding: '',
          src: '',
          cropB: '50%',
          imageload: ''
        },
        preHtml: '',
        remotePic: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=4110377719,1460950412&fm=26&gp=0.jpg'
      }
    },
    mounted() {
      this.$nextTick(() => {
        this.windowResz()
      });
    },
    methods: {
      windowResz() {
        let vcc = document.getElementById('vcc').getBoundingClientRect().width;
        this.option.bounding = Math.round(vcc) + 'px 458px'
      },
      preview(data) {
        this.preHtml = data.html
      },
      addlocal(){
        this.$refs.cutter.addLocalImage()
      },
      imgLoad(params){
        this.option.imageload = params
      },
      remote(){
        this.option.src = this.remotePic
      },
      zoom(param){
        this.$refs.cutter.relativeZoom(param)
      },
      rotateLeft(){
        this.$refs.cutter.rotateLeft()
      },
      rotateRight(){
        this.$refs.cutter.rotateRight()
      },
      rotateClear(){
        this.$refs.cutter.rotateClear()
      },
      github(){
        window.open('https://github.com/lyuanshen/vue-cutter')
      }
    }
  }
</script>

<style scoped>
  .main {
    text-align: center;
    background: linear-gradient(60deg, #543ab7, #00acc1) !important;
    border-radius: 0;
    padding: 4rem 0 10rem 0;
    color: #fff;
  }

  .c img {
    margin: 0.3rem 0.5rem;
  }

  .cc button {
    margin: 1rem 0.5rem;
  }

  .wb {
    position: absolute;
    width: 100%;
    left: 0;
    bottom: 0;
    height: 50px;
    background: linear-gradient(to bottom, #543ab7, #fff);
  }

  .showBox {
    width: 100%;
    height: 458px;
    background: #dedede;
    border: 1px solid #dedede;
  }

  .imgCutDownBoxContainer {
    width: 90%;
    height: 360px;
    margin: 20px auto;
    border: 1px solid #ccc;
    background: #fff;
    text-align: center;
    overflow: hidden;
  }

  .vc-controller {
    width: 100%;
    height: 25px;
    background: rgba(255, 255, 255, 0.07);
    position: absolute;
    bottom: 0;
  }

  .scale {
    font-size: 11px;
    padding: 1px 6px;
    background: #79a7d1;
    position: relative;
    bottom: 2px;
    border-radius: 3px;
    color: white;
  }

  .controller-icon-scale {
    padding: 0 8px;
    cursor: pointer;
    color: #c5cbd1;
  }

  .controller-icon-turn {
    color: #f9f9f9;
    margin: 0 5px;
    border-radius: 50%;
    background: #c5cbd1;
  }

  .icon{
    opacity: 0.5;
    cursor: pointer;
  }
  .icon:hover{
    opacity: 1;
  }

  .vc-controller:hover{
    background: rgba(255, 255, 255, 0.2);
  }

  .controller-icon{
    color: #f9f9f9;
    margin: 0 5px;
    border-radius: 50%;
    background: #c5cbd1;
  }
</style>
