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
           style="color: #445e7a"
          :class="drawer ? 'el-icon-s-unfold':'el-icon-s-fold'"></i>
      </div>

      <div
        :style="{
        left: device === 'xs' ? '3rem': '1.5rem'
        }"
        class="navbar-brand">
        <span style="float: left">
          <a @click="$router.push({path: '/'})" style="text-decoration: none;color: #2c3e50;cursor: pointer">VueCutter.js</a>
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
             @click="searchBo(searchBox.oIn)"
            class="navbar-tag-search el-icon-search"></i>
          <input type="text"
                 v-if="searchBox.input"
                 :placeholder="$t('nav.searchBox')"
                 @blur="searchBox.isActive = !searchBox.isActive"
                 @focus="searchBox.isActive = !searchBox.isActive">
        </span>

        <nav style="display: inline-block;" v-if="device !== 'xs'">
          <div>
            <a href="https://github.com/lyuanshen/vue-cutter">GitHub</a>
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
                  :disabled="false"
                  command="en"
                >
                  <i :style="{color: $i18n.locale === 'en' ?'#3eaf7c':''}"
                     :class="$i18n.locale === 'en' ? 'el-icon-caret-right' : ''"></i>
                  <span :style="{color: $i18n.locale === 'en' ?'#3eaf7c':''}"
                        style="display: inline-block;float: right">England</span>
                </el-dropdown-item>
                <el-dropdown-item
                  :disabled="false"
                  command="zh"
                >
                  <i :style="{color: $i18n.locale === 'zh' ?'#3eaf7c':''}"
                     :class="$i18n.locale === 'zh' ? 'el-icon-caret-right' : ''"></i>
                  <span :style="{color: $i18n.locale === 'zh' ?'#3eaf7c':''}"
                        style="display: inline-block;float: right">简体中文</span>
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
            <a>{{$t('nav.d')}}</a>
          </div>

          <div class="a">
            <a @click="$router.push({path: '/demo'})">Demo</a>
          </div>

          <div style="margin-left: 0" class="a">
            <a @click="$router.push({path: '/guide'})">{{$t('nav.g')}}</a>
          </div>
        </nav>
      </div>

    </header>

    <div
      v-if="device ===  'xs' "
    >
      <el-drawer
        style="top: 57px"
        direction="ltr"
        size="1"
        :show-close="true"
        :append-to-body="true"
        :visible.sync="drawer"
        :modal="false"
        :with-header="false"
      >
        <div class="side-menu-context">
          <div class="close-bb">
            <el-menu
              style="width: 100%;height: 100%;"
              mode="horizontal "
            >
              <el-menu-item>
                <i class="el-icon-s-promotion"></i>
                <span class="s-m-i-name">{{$t('nav.g')}}</span>
              </el-menu-item>

              <el-menu-item>
                <i class="el-icon-crop"></i>
                <span class="s-m-i-name">demo</span>
              </el-menu-item>

              <el-menu-item>
                <i class="el-icon-coffee-cup"></i>
                <span class="s-m-i-name">{{$t('nav.d')}}</span>
              </el-menu-item>

              <el-submenu index="1">
                <template slot="title">
                  <i class="el-icon-connection"></i>
                  <span>{{$t('nav.m')}}</span>
                </template>
              </el-submenu>

              <el-submenu index="2">
                <template slot="title">
                  <i class="el-icon-setting"></i>
                  <span>{{$t('nav.s')}}</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item @click="setLang('en')">
                    <span :style="{color: $i18n.locale === 'en' ?'#3eaf7c':''}">
                      England
                    </span>
                  </el-menu-item >
                  <el-menu-item @click="setLang('zh')">
                    <span :style="{color: $i18n.locale === 'zh' ?'#3eaf7c':''}">
                      简体中文
                    </span>
                  </el-menu-item>
                </el-menu-item-group>
              </el-submenu>

              <el-menu-item>
                <svg-icon icon-class="github"
                          style="font-size: 20px;float: left;margin: 18px 0"/>
                <span style="margin: 0 12px"
                  class="s-m-i-name"><a href="https://github.com/lyuanshen/vue-cutter" style="text-decoration: none">Github</a></span>
              </el-menu-item>
            </el-menu>
          </div>
        </div>
      </el-drawer>
    </div>

    <div
      v-if="device !== 'md'"
    >
      <el-drawer
        direction="ttb"
        style="top: 57px;"
        :show-close="false"
        size="1"
        :withHeader="false"
        :visible.sync="searchBox.oIn"
      >
        <div class="sub-searchBox">
          <div
            :class="searchBox.isActive? 'search-box-active':''"
            class="box">
            <input
              :placeholder="$t('nav.searchBox')"
              type="text">
          </div>
        </div>
      </el-drawer>
    </div>

    <git-hub-corner
      v-if="device === 'xs'"
      class="githubCorner"></git-hub-corner>

    <AppMain/>

  </div>
</template>

<script>
  import ResizeHandler from "@/Layout/mixin/ResizeHandler";
  import GitHubCorner from '@/components/GithubCorner'
  import AppMain from "@/Layout/components/AppMain";
  import { mapState } from 'vuex'
  export default {
    name: "index",
    mixins: [ResizeHandler],
    components: {
      GitHubCorner,
      AppMain
    },
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
        sideMenu:{
          colse: false
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
    inject:['reload'],
    methods: {
      setLang(e) {
        this.$i18n.locale = e
        this.$store.dispatch('app/setLanguage',e)
        this.reload()
      },
      searchBo(params){
        this.searchBox.isActive = !this.searchBox.isActive
        if (params){
          this.searchBox.oIn = false;
          return;
        }
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
        if (params){
          this.drawer = false
          return;
        }
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
    background: white;
    width: 100%;
    height: 57px;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
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
  .side-menu-context{
    height: 100%;
    background: white;
    width: 230px;
  }
  .s-m-i-name{
    font-size: 0.9rem;
    color: #2c3e50;
  }
  .sub-searchBox{
    width: 100%;
    height: 50px;
  }
  .sub-searchBox .box{
    width: 90%;
    display: inline-block;
    margin: 7px auto;
    height: 35px;
    border: 1px solid #cfd4db;
    border-radius: 17px;
  }
  .sub-searchBox .box input{
    width: 90%;
    height: 100%;
    margin: 0 auto;
    border: none;
    outline: none;
    background: none;
    color: #4e6e8e;
  }
  .githubCorner{
    position: fixed;
    top: 57px;
    right: 0;
    z-index: 999;
  }
</style>
