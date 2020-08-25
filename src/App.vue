<template>
    <div id="app">
        <vue-picture-cropper
            ref="cropper"
            :container-width="600"
            image="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3995073927,3598178723&fm=26&gp=0.jpg"
            :crop-can-over-image-border="false"
            :container-height="450"
        ></vue-picture-cropper>
        <img :src="img" alt="">
        <div style="width: 100%;margin-top: 38px">
            <el-button @click="getCropperAxis"
                       type="primary">主要按钮
            </el-button>
            <el-button @click="addImage"
                       type="primary">addImage
            </el-button>
        </div>
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
