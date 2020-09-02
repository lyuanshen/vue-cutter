<template>
  <!--  dev test -->
  <div id="app">
    <vue-cutter
      v-if="IsPCs"
      :container-bounding="['450px','450px']"
      :src="img"
    ></vue-cutter>
    <vue-cutter
      v-else
      :container-bounding="['900px','900px']"
      src="http://192.168.31.50:8088/dev/350X500.jfif?b059dfe1ce50f5a64248ee95a7791508"
    ></vue-cutter>
    <input type="text" v-model="img">
<!--    <img src="./assets/350X500.jfif" alt="">-->
  </div>
</template>

<script>
  export default {
    name: 'app',
    data(){
      return{
        IsPCs:'',
        img: 'https://cdn1-images.epio.app/image/download/aHR0cHM6Ly93d3cubXlteXBpYy5uZXQvZGF0YS9hdHRhY2htZW50L2ZvcnVtLzIwMTgwMS8wOC8wMzQ5MjdkMXRzcXQ2cjZtZHkyeHZkLmpwZy50aHVtYi5qcGc=/350X500'
      }
    },
    created() {
      this.IsPCs = this.IsPC();
    },
    methods:{
      IsPC() {
        var userAgentInfo = navigator.userAgent;
        var Agents = ["Android", "iPhone","SymbianOS", "Windows Phone", "iPod"];
        var flag = true;
        for (var v = 0; v < Agents.length; v++) {
          if (userAgentInfo.indexOf(Agents[v]) > 0) {
            flag = false;
            break;
          }
        }
        if(window.screen.width>=768){
          flag = true;
        }
        return flag;
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
