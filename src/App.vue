<template>
  <!--  dev test -->
  <div id="app">
    <vue-cutter
      ref="cutter"
      enlarge="0.5"
      v-if="IsPCs"
      :box-in-img="true"
      :container-bounding="['450px','450px']"
      src="http://192.168.31.50:8088/dev/350X500.jfif?b059dfe1ce50f5a64248ee95a7791508"
      :crop-dividing-line="true"
    ></vue-cutter>
    <vue-cutter
      v-else
      :box-in-img="true"
      :container-bounding="['900px','900px']"
      crop-border="dashed"
      :crop-info="true"
      src="http://192.168.31.50:8088/dev/350X500.jfif?b059dfe1ce50f5a64248ee95a7791508"
    ></vue-cutter>
    <input type="text" v-model="img">
    <img :src="url" alt="">
    <div>
      <button @click="add">+1</button>
      <button @click="ji">-1</button>
      <button @click="l">l</button>
      <button @click="r">r</button>
      <button @click="getIm">imgAxis</button>
      <button @click="getImg">getImg</button>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data(){
      return{
        IsPCs:'',
        url: '',
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
      },
      add() {
        this.$refs.cutter.relativeZoom(1)
      },
      ji() {
        this.$refs.cutter.relativeZoom(-1)
      },
      getIm() {
        console.log(this.$refs.cutter.getImgAxis())
      },
      getImg() {
        let axis = this.$refs.cutter.getBase64Data((data) => {
          this.url = data;
        })
      },
      l(){
        this.$refs.cutter.rotateLeft()
      },
      r(){
        this.$refs.cutter.rotateRight()
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
