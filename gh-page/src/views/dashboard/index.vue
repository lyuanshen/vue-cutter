<template>
  <div class="dashboard-container">
    <div class="hero">
      <svg-icon icon-class="logo" class="logo"/>
      <h1 class="name">VueCutter.Js</h1>
      <p class="description">
        VueCutter - {{$t('dashboard.description')}}
      </p>
      <el-button style="width: 10rem;height: 3.0rem;margin: 1.8rem auto;background:#4abf8a;"
                 type="success" size="medium">
        {{$t('dashboard.start')}}
        <i class="el-icon-right"></i>
      </el-button>
    </div>

    <div class="features">
      <el-row :gutter="40">
        <el-col v-for="item in featureList" :key="item.id"
                :md="8"
                :sm="12"
                :xs="24"
                class="feature"
        >
          <div>
            <h2>{{item.name}}</h2>
            <p>{{item.description}}</p>
          </div>
        </el-col>
      </el-row>

      <el-row :gutter="40">
        <el-col
          :md="8"
          :sm="12"
          :xs="24"
          class="feature"
        >
          <h2>{{features4.name}}</h2>
          <p>{{features4.description}}</p>
        </el-col>
      </el-row>

    </div>

    <div class="content custom">
      <h2 class="tt">
        <a href="#一个简单的例子">#</a>
        {{$t('dashboard.example')}}
      </h2>

      <div
        class="language-javascript extra-class">
        <pre v-highlight="dashboardJs"><code class="javascript"></code></pre>
      </div>

      <div
           class="language-vue extra-class">
                <pre v-highlight="dashboardVue"><code></code></pre>
      </div>
    </div>

    <div class="content custom">
      <h2 class="tt">
        <a href="#预览">#</a>
        {{$t('dashboard.pre')}}
      </h2>

      <vue-cutter
        style="width: 100%;"
        :container-height="300"
        theme="pink"
        image="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=4110377719,1460950412&fm=26&gp=0.jpg"
      >

      </vue-cutter>

      <foot/>

    </div>

  </div>
</template>

<script>
  import { mapState } from 'vuex'
  import foot from "@/views/dashboard/foot";
  export default {
    name: "index",
    data() {
      return {
        featureList: [
          {
            id: '0',
            name: this.$t('dashboard.Custom'),
            description: this.$t('dashboard.CustomMS')
          },
          {
            id: '1',
            name: this.$t('dashboard.supM'),
            description: this.$t('dashboard.sipMMS'),
          },
          {
            id: '2',
            name: this.$t('dashboard.RZ'),
            description: this.$t('dashboard.SM')
          }
        ],
        features4: {
          id: '3',
          name: this.$t('dashboard.EU'),
          description: this.$t('dashboard.EUMS'),
        }
      }
    },
    computed: {
      ...mapState({
        dashboardJs: state => state.code.dashboardJs,
        dashboardVue:state => state.code.dashboardVue
      })
    },
    components: {
      foot
    }
  }
</script>

<style scoped>
  .dashboard-container {
    max-width: 960px;
    min-height: calc(100vh - 58px);
    display: block;
    margin: 0 auto;
    height: 100%;
    padding: 0 2rem 0;
  }

  .hero {
    width: 100%;
    height: fit-content;
    text-align: center;
  }

  .logo {
    max-width: 280px;
    display: block;
    margin: 3rem auto 1.5rem;
    font-size: 13rem;
  }

  .name {
    font-size: 2.7rem;
    font-weight: 600;
    margin: 1rem auto;
    line-height: 1.25;
  }

  .description {
    max-width: 30rem;
    font-size: 1.3rem;
    line-height: 1.3;
    color: #6a8bad;
    margin: 0 auto;
  }

  .features {
    border-top: 1px solid #e4e6e9;
    padding: 1.2rem 0;
    margin-top: 1rem;
  }

  .feature{
    margin-bottom: 1.0rem;
  }

  .feature h2 {
    font-size: 1.4rem;
    font-weight: 500;
    color: #3a5169;
    line-height: 1.25;
  }

  .feature p {
    color: #4e6e8e;
    line-height: 1.7;
  }
  .content {
    padding: 0;
    margin: 0 0 35px 0;
  }
  .tt{
    text-align: left;
    padding-bottom: 0.3rem;
    border-bottom: 1px solid #dadcdf;
  }
  .tt a{
    font-size: 0.85em;
    margin-left: -.87em;
    padding-right: .23em;
    margin-top: .125em;
    opacity: 0;
    color: #3eaf7c;
    text-decoration: none;
    font-weight: 600;
  }
  .tt a:hover{
    opacity: 1;
  }
  .language-javascript {
    width: 100%;
    background: #282c34;
    position: relative;
    border-radius: 6px;
    text-align: left;
    padding: 0.1rem 1rem;
  }
  .language-javascript:before{
    content: 'js';
    position: absolute;
    z-index: 3;
    top: .5rem;
    right: .5rem;
    font-size: 0.75rem;
    color: hsla(0,0%,100%,.4);
  }
  .language-javascript pre{
    margin: 0;
    font-size: .85rem;
  }
  .language-javascript pre span{
    padding: .2rem;
  }
  .language-vue{
    margin: 1.5rem 0;
    width: 100%;
    background: #282c34;
    position: relative;
    border-radius: 6px;
    text-align: left;
    padding: 0.1rem 1rem;
  }
  .language-vue:before{
    content: 'vue';
    position: absolute;
    z-index: 3;
    top: .5rem;
    right: .5rem;
    font-size: 0.75rem;
    color: hsla(0,0%,100%,.4);
  }
</style>
