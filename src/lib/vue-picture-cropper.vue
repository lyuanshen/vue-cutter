<template>
    <div
        class="container"
        :style="{
        width: containerWidth + 'px',
        height: typeof containerHeight === 'undefined' ? containerWidth + 'px' : containerHeight + 'px' }"
    >
        <div
            class="cropper-container theme"
            :class="themes.indexOf(theme) !== -1 ? 'theme-' + theme : 'theme-dark'"
        >

        </div>

    </div>
</template>

<script>
    import Exif from './exif-js-min'

    export default {
        name: "vue-picture-cropper",
        props: {
            containerWidth: {
                type: Number
            },
            containerHeight: {
                type: Number
            },
            theme: {
                type: String,
                default: 'dark'
            },
            image: {
                type: [String, Blob, null, File],
                default: ''
            },
            mode: {
                type: String,
                default: 'contain'
            },
            // 可以压缩图片宽高  默认不超过200
            maxImgSize: {
                type: [Number, String],
                default: 2000
            }
        },
        data() {
            return {
                themes: ['dark', 'warm', 'pink'],
                modes: ['contain', 'cover', 'auto'],
                // 图片加载
                loading: true,
                scale: 1,
                rotate: 0,
                sourceImageData: {
                    width: '',
                    height: '',
                    orientation: 0
                }
            }
        },
        computed: {
            isIE() {
                var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串
                const isIE = !!window.ActiveXObject || 'ActiveXObject' in window; //判断是否IE浏览器
                return isIE;
            }
        },
        mounted() {
            this.checkedImg()
        },
        methods: {
            //checkout pic
            checkedImg() {
                if (this.image === null || this.image === '') {
                    this.image = '';
                    return
                }
                this.loading = true;
                this.scale = 1;
                this.rotate = 0;
                let img = new Image();
                img.onload = () => {
                    if (this.image === '') {
                        // something will be do
                        return
                    }
                    const {sourceImageData} = this;

                    let width = img.width;
                    let height = img.height;

                    sourceImageData.height = height;
                    sourceImageData.width = width;

                    Exif.getData(img).then(data => {
                        sourceImageData.orientation = data.orientation || 1;
                        let max = this.maxImgSize;

                    })

                };


                img.onerror = () => {
                    // something will be do
                    return;
                };
                // 判断如果不是base64图片 再添加crossOrigin属性，否则会导致iOS低版本(10.2)无法显示图片
                if (this.image.substring(0, 4) !== "data") {
                    img.crossOrigin = "";
                }
                if (this.isIE) {
                    var xhr = new XMLHttpRequest();
                    xhr.onload = function () {
                        var url = URL.createObjectURL(this.response);
                        img.src = url;
                    };
                    xhr.open("GET", this.img, true);
                    xhr.responseType = "blob";
                    xhr.send();
                } else {
                    img.src = this.image;
                }
            },
            checkOrientationImage() {

            },
            getVersion(name) {

            }
        }
    }
</script>

<style scoped lang="sass">
    @import "./styles/index"
</style>
