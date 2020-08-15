<template>
  <div id="app">
   <vue-picture-cropper
       :container-width="500"
       :container-height="400"
       theme="warm"
       mode="100px"
       image="http://192.168.38.1:8088/dev/8.png"
   ></vue-picture-cropper>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
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
