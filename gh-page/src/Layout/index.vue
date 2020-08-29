<template>
  <div>
    <header class="navbar" role="navigation">

      <div class="navbar-brand">
        <span style="float: left">
          <a href="#" style="text-decoration: none;color: #2c3e50;">VueCutter.js</a>
        </span>
        <span>
          <iframe src="https://ghbtns.com/github-btn.html?user=Lyuanshen&repo=vue-cutter&type=star&count=true"
                  style="margin: 3px 7px"
                  frameborder="0" scrolling="0" width="150" height="20" title="GitHub"></iframe>
        </span>
      </div>

      <div class="navbar-tag">

        <span class="search-box" :class="searchBox.isActive? 'search-box-active':''">
          <i :class="searchBox.isActive? 'search-box-icon-active':''"
            class="el-icon-search" style="font-size: 17px;margin: 6px 0"></i>
          <input type="text"
                 placeholder="要搜点什么呢"
                 @blur="searchBox.isActive = !searchBox.isActive"
                 @focus="searchBox.isActive = !searchBox.isActive">
        </span>

        <nav style="display: inline-block;">
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
              style="margin: -6px 0;float: left;height: auto;">
              <a>
                <span>{{$t('nav.s')}}</span>
                <i class="el-icon-caret-bottom"></i>
              </a>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>
                  <i :style="{color: $i18n.locale === 'en' ?'#3eaf7c':''}"
                     :class="$i18n.locale === 'en' ? 'el-icon-caret-right' : ''"></i>
                  <span :style="{color: $i18n.locale === 'en' ?'#3eaf7c':''}"
                        style="display: inline-block;float: right" @click="$i18n.locale='en'">England</span>
                </el-dropdown-item>
                <el-dropdown-item>
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
  </div>
</template>

<script>
  export default {
    name: "index",
    data() {
      return {
        searchBox: {
          isActive: false
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
    margin: 4px 0 0 27px;
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
</style>
