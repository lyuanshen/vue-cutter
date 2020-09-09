<template>
  <div style="display: inline-block">
    <vue-cutter
      ref="cutter"
      container-bounding="600"
      cropBoxBounding="auto"
      mode="contain"
      :src="img"
      :crop-info="true"
      :crop-dividing-line="true"
      @preview="pre"
    ></vue-cutter>


<!--    <span v-html="html" style="display: inline-block"></span>-->
    <img :src="uur" alt="" style="display: inline-block">
    <input type="text" v-model="img">
    <button @click="get">get</button>
    <button @click="l">l</button>
    <button @click="r">r</button>
    <button @click="relativeZoom">relativeZoom</button>
    <button @click="addLocalImage">addLocalImage</button>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return{
      uur: '',
      html: '',
      img: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=4110377719,1460950412&fm=26&gp=0.jpg'
    }
  },
  methods: {
    get(){
      this.$refs.cutter.getCropBlob(data => {
        this.uur = window.URL.createObjectURL(data)

      })
    },
    l(){
      this.$refs.cutter.rotateLeft()
    },
    r(){
      this.$refs.cutter.rotateRight()
    },
    pre(data){
      this.html = data.html
    },
    relativeZoom(){
      this.$refs.cutter.relativeZoom(1)
    },
    addLocalImage(){
      this.$refs.cutter.addLocalImage()
    }
  }
}
</script>

<style scoped>

</style>
