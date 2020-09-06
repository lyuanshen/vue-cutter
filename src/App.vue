<template>
  <div>
    <vue-cutter
      container-bounding="600"
      :src="img"
      :crop-info="true"
      :crop-dividing-line="true"
      :can-crop-over-img="false"
    ></vue-cutter>
    <input type="text" v-model="img">
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return{
      img: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=4110377719,1460950412&fm=26&gp=0.jpg'
    }
  }
}
</script>

<style scoped>

</style>
