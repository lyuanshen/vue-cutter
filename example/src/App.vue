<template>
  <div id="app">
    <show></show>
  </div>
</template>

<script>
import show from '@/view/show'
export default {
  name: 'App',
  components: {
    show
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
  body{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    overflow: hidden;
  }
</style>
