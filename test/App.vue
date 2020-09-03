<template>
  <div>
    <vue-cutter
      style="width: 300px;"
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
          containerWidth: 600,
          containerHeigh: 300,
          image: 'https://cdn1-images.epio.app/image/download/aHR0cHM6Ly93d3cubXlteXBpYy5uZXQvZGF0YS9hdHRhY2htZW50L2ZvcnVtLzIwMTgwMS8wOC8wMzQ5MjdkMXRzcXQ2cjZtZHkyeHZkLmpwZy50aHVtYi5qcGc=/350X500'
        }
      }
    }
  }
</script>

<style scoped>

</style>
