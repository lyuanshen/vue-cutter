<template>
<!--  开发测试-->
    <div id="app">
        <vue-cutter
          :container-width="600"
          image="https://cdn1-images.epio.app/image/download/aHR0cHM6Ly93d3cubXlteXBpYy5uZXQvZGF0YS9hdHRhY2htZW50L2ZvcnVtLzIwMTgwMS8wOC8wMzQ5MjdkMXRzcXQ2cjZtZHkyeHZkLmpwZy50aHVtYi5qcGc=/350X500"
        ></vue-cutter>
    </div>
</template>

<script>
    export default {
        name: 'app',
        data() {
            return {
                img: ''
            }
        },
        methods: {
            getCropperAxis() {
                let axis = this.$refs.cropper.getCropBlob((data) => {
                    let url = (window.URL || window.webkitURL).createObjectURL(data);
                    this.img = url;
                })
            },
            addImage() {
                this.$refs.cropper.addImage()
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
