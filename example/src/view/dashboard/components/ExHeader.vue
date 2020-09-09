<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <b-navbar-brand href="#">
        VueCutter
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="https://github.com/lyuanshen/vue-cutter/blob/master/README.md">Docs</b-nav-item>
          <b-nav-item href="https://github.com/lyuanshen/vue-cutter">Github</b-nav-item>
          <b-nav-item href="https://www.npmjs.com/package/vue-cutter">Npm</b-nav-item>
          <b-nav-item href="https://codeload.github.com/lyuanshen/vue-cutter/zip/master">download</b-nav-item>
          <b-nav-item href="#">Author Home page</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">

          <b-nav-item-dropdown text="Lang" right>
            <b-dropdown-item href="#">EN</b-dropdown-item>
            <b-dropdown-item href="#">ZH</b-dropdown-item>
          </b-nav-item-dropdown>

        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "ExHeader"
}
</script>

<style scoped>

</style>
