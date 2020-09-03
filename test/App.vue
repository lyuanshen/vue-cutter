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
          bounding: ['450px', '450px'],
          src: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=4110377719,1460950412&fm=26&gp=0.jpg',
          outputType: 'png'
        }
      }
    }
  }
</script>

<style scoped>

</style>
