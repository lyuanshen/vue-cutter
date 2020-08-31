<template>
  <section class="app-main">
    <transition name="el-fade-in-linear">
      <router-view :key="key"></router-view>
    </transition>
  </section>
</template>

<script>
  export default {
    name: "AppMain",
    computed: {
      key(){
        return this.$route.path
      }
    }
  }
</script>

<style scoped>
  .app-main {
    width: 100%;
    position: relative;
    overflow: hidden;
    top: 57px;
    min-height: calc(100vh - 58px);
  }
</style>
