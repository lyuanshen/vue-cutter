<template>
  <div id="app">
    <Layout></Layout>
  </div>
</template>

<script>
  import Layout from './Layout'

  export default {
    name: 'app',
    components: {Layout},
    data() {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    }
  }
</script>

<style>
  *{
    box-sizing: border-box;
  }
  body{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
</style>
