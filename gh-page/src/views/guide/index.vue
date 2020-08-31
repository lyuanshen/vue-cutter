<template>
  <div class="guide-container">
    <side-bar-menu></side-bar-menu>
  </div>
</template>

<script>
  import sideBarMenu from "@/views/guide/components/sideBarMenu";

  export default {
    name: "index",
    components: {
      sideBarMenu
    }
  }
</script>

<style scoped>
  .guide-container {
    width: 100%;
    min-height: calc(100vh - 58px);
    display: block;
    margin: 0 auto;
    height: 100%;
    padding: 0 2rem 0;
  }
</style>
