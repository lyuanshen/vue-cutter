<template>
  <div id="app">
    <dashboard></dashboard>
  </div>
</template>

<script>
import dashboard from '@/view/dashboard'
export default {
  name: 'App',
  components: {
    dashboard
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
    overflow-x: hidden;
  }
</style>
