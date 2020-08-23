<template>
  <div id="app">
    <vue-picture-cropper
      ref="cropper"
      :container-width="600"
      :container-height="450"
      :fixed="true"
      :crop-can-over-image-border="false"
      image="https://raw.githubusercontent.com/lyuanshen/vue-pictrue-cropper/master/src/assets/8.png"
    ></vue-picture-cropper>
    <img :src="img" alt="">
    <div style="width: 100%;margin-top: 38px">
      <el-button @click="getCropperAxis"
        type="primary">主要按钮</el-button>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data() {
      return {
        img: ''
      }
    },
    methods: {
      getCropperAxis() {
        let axis = this.$refs.cropper.getCropBlob((data) => {
          let url = (window.URL || window.webkitURL).createObjectURL(data);
          this.img = url;
        })
      }
    }
  }
</script>

<style lang="scss">
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
