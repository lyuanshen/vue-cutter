<template>
  <div class="sideBar">
    <div>

    </div>
  </div>
</template>

<script>
  export default {
    name: "sideBarMenu",
    components: {

    },
    data() {
      return{
        menu: [
          {
            header: true,
            title: 'Main Navigation',
            hiddenOnCollapse: true
          },
          {
            href: '/',
            title: 'Dashboard',
            icon: 'fa fa-user'
          },
          {
            href: '/charts',
            title: 'Charts',
            icon: 'fa fa-chart-area',
            child: [
              {
                href: '/charts/sublink',
                title: 'Sub Link'
              }
            ]
          }
        ]
      }
    }
  }
</script>

<style scoped>
  .sideBar {
    width: 20rem;
    position: fixed;
    left: 0;
    z-index: 10;
    margin: 0;
    top: 3.6rem;
    bottom: 0;
    box-sizing: border-box;
    border-right: 1px solid #eaecef;
    overflow-y: auto;
    color: #2c3e50;
  }
</style>
