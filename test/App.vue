<template>
  <div>
    <vue-cutter
      :container-width="options.containerWidth"
      :container-height="options.containerHeigh"
      :image="options.image"
    ></vue-cutter>
  </div>
</template>
<script>
  export default {
    name: "App",
    data() {
      return{
        options: {
          containerWidth: 450,
          containerHeigh: 300,
          image: ''
        }
      }
    }
  }
</script>

<style scoped>

</style>
