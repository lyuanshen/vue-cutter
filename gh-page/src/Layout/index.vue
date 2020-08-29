<template>
  <div>
    <header class="navbar" role="navigation">

      <div
        v-if="device === 'xs'"
        :style="{
        left: device === 'xs' ? '0.5rem': '1.5rem'
        }"
        class="tags-menu">
        <i @click="SideMenu(drawer)"
          :class="drawer ? 'el-icon-s-unfold':'el-icon-s-fold'"></i>
      </div>

      <div
        :style="{
        left: device === 'xs' ? '3rem': '1.5rem'
        }"
        class="navbar-brand">
        <span style="float: left">
          <a href="#" style="text-decoration: none;color: #2c3e50;">VueCutter.js</a>
        </span>
        <span>
          <iframe src="https://ghbtns.com/github-btn.html?user=Lyuanshen&repo=vue-cutter&type=star&count=true"
                  style="margin: 3px 7px"
                  frameborder="0" scrolling="0" width="150" height="20" title="GitHub"></iframe>
        </span>
      </div>

      <div class="navbar-tag" :style="{
        minWidth:device === 'xs'? '33px': '',
        right: device === 'xs' ? '18px': '1.5rem'
      }">

        <span :id="searchBox.boxId"
              :style="{
          width: device === 'md'? '200px' : '33px',
          margin: device === 'xs'? '-3px 0' : ''
        }"
          class="search-box" :class="searchBox.isActive? 'search-box-active':''">
          <i :class="searchBox.isActive? 'search-box-icon-active':''"
             @click="searchBo"
            class="navbar-tag-search el-icon-search"></i>
          <input type="text"
                 v-if="searchBox.input"
                 placeholder="要搜点什么呢"
                 @blur="searchBox.isActive = !searchBox.isActive"
                 @focus="searchBox.isActive = !searchBox.isActive">
        </span>

        <nav style="display: inline-block;" v-if="device !== 'xs'">
          <div>
            <a href="">GitHub</a>
            <i class="el-icon-link"></i>
          </div>

          <div>
            <el-dropdown
              trigger="hover"
              placement="bottom"
              :show-timeout="50"
              :hide-timeout="50"
              :disabled="false"
              @command="setLang"
              style="margin: -6px 0;float: left;height: auto;">
              <a>
                <span>{{$t('nav.s')}}</span>
                <i class="el-icon-caret-bottom"></i>
              </a>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item
                  command="en"
                >
                  <i :style="{color: $i18n.locale === 'en' ?'#3eaf7c':''}"
                     :class="$i18n.locale === 'en' ? 'el-icon-caret-right' : ''"></i>
                  <span :style="{color: $i18n.locale === 'en' ?'#3eaf7c':''}"
                        style="display: inline-block;float: right" @click="$i18n.locale='en'">England</span>
                </el-dropdown-item>
                <el-dropdown-item
                  command="zh"
                >
                  <i :style="{color: $i18n.locale === 'zh' ?'#3eaf7c':''}"
                     :class="$i18n.locale === 'zh' ? 'el-icon-caret-right' : ''"></i>
                  <span :style="{color: $i18n.locale === 'zh' ?'#3eaf7c':''}"
                        style="display: inline-block;float: right" @click="$i18n.locale='zh'">简体中文</span>
                </el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>

          <div>
            <el-dropdown
              :disabled="false"
              style="margin: -6px 0;float: left;height: auto;">
              <a>
                <span>{{$t('nav.m')}}</span>
                <i class="el-icon-caret-bottom"></i>
              </a>
            </el-dropdown>
          </div>

          <div class="a">
            <a href="">{{$t('nav.d')}}</a>
          </div>

          <div class="a">
            <a href="">Demo</a>
          </div>

          <div style="margin-left: 0" class="a">
            <a href="">{{$t('nav.g')}}</a>
          </div>
        </nav>
      </div>

    </header>
    <div>
      <el-drawer
        style="top: 57px;outline: none"
        direction="ltr"
        v-if="device ===  'xs' "
        size="1"
        :show-close="true"
        :append-to-body="true"
        title="我是标题"
        :visible.sync="drawer"
        :with-header="false"
      >
<p style="padding: 0 50px"> sss</p>
      </el-drawer>
    </div>

    <div>
      <el-drawer
        direction="ttb"
        style="top: 57px;"
        :visible.sync="searchBox.oIn"
      ></el-drawer>
    </div>

  </div>
</template>

<script>
  import ResizeHandler from "@/Layout/mixin/ResizeHandler";
  import { mapState } from 'vuex'
  export default {
    name: "index",
    mixins: [ResizeHandler],
    computed: {
      ...mapState({
        device: state => state.app.device
      })
    },
    data() {
      return {
        searchBox: {
          isActive: false,
          boxId: '',
          input: true,
          oIn: false
        },
        drawer: false
      }
    },
    created() {
      this.searchBox.input = this.device === 'md'
    },
    watch: {
      device(newVal, oldVal) {
        if (oldVal === 'md' && newVal === 'sm'){
          this.searchBox.input = false
          this.searchBox.boxId = 'search-toSm'
        }else if (oldVal === 'sm' && newVal === 'md'){
          this.searchBox.boxId = 'search-toDm'
          setTimeout(() => {
            this.searchBox.input = true
          },505)
        }
      }
    },
    methods: {
      setLang(e) {
        this.$store.dispatch('app/setLanguage',e)
      },
      searchBo(){
        if (this.device === 'md') {
          return
        }else {
          if (this.drawer) {
            this.drawer = false
            setTimeout(() => {
              this.searchBox.oIn = true
            },250)
          }else {
            this.searchBox.oIn = true
          }
        }
      },
      SideMenu(params) {
        if (!params) return;
        if (this.device !== 'xs'){
          return;
        }else {
          if (this.searchBox.oIn) {
            this.searchBox.oIn = false
            setTimeout(() => {
              this.drawer = true
            },250)
          }else {
            this.drawer = true
          }
        }
      }
    }
  }
</script>

<style scoped>
  .navbar {
    width: 100%;
    height: 57px;
    position: relative;
    border-bottom: 1px solid #eaecef;
  }

  .tags-menu{
    width: 33px;
    height: 100%;
    display: inline-block;
    position: absolute;
    left: 1.5rem;
  }
  .tags-menu i{
    font-size: 26px;
    margin: 18px 0;
  }

  .navbar-brand {
    position: absolute;
    left: 1.5rem;
    width: 280px;
    display: inline-block;
    height: 100%;
    float: left;
    padding: 18px 0;
    font-size: 1.3rem;
  }

  .navbar-tag {
    position: absolute;
    min-width: 470px;
    height: 100%;
    float: left;
    padding: 18px 0;
    box-sizing: border-box;
    white-space: nowrap;
    font-size: 0.9rem;
    right: 1.5rem;
    display: flex;
    font-weight: 500;
  }

  .navbar-tag div{
    display: inline-block;
    float: right;
    height: 23px;
    margin: 4px 0 0 20px;
    cursor: pointer;
  }

  .navbar-tag a{
    text-decoration: none;
    line-height: 0;
    display: inline-block;
    color: #2c3e50;
    transform: translateY(50%);
  }
  .a:hover{
    border-bottom: 2px solid #3eaf7c;
  }
  .search-box{
    height: 30px;
    width: 200px;
    display: inline-block;
    border: 1px solid #cfd4db;
    float: left;
    margin: -3px 15px;
    border-radius: 15px;
    position: relative;
  }
  .search-box input{
    float: right;
    height: 29px;
    width: 170px;
    border-radius: 0 15px 15px 0;
    border: none;
    font-size: inherit;
    color: #4e6e8e;
    outline: none;
    background: none;
  }
  .search-box i {
    color: #678db5;
  }
  .search-box-active{
    border: 1px solid #3eaf7c;
  }
  .search-box-icon-active{
    color: #3eaf7c;
  }
  .navbar-tag-search{
    font-size: 17px;
    margin: 6px 0;
    position: absolute;
    left: 7px;
  }

  #search-toSm{
    animation: MdToSm 500ms infinite;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
  }
  @keyframes MdToSm {
    from{
      width: 200px;
    }
    to{
      width: 33px;
    }
  }
  #search-toDm{
    animation: SdToDm 500ms infinite;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
  }
  @keyframes SdToDm {
    from{
      width: 33px;
    }
    to{
      width: 200px;
    }
  }
</style>
