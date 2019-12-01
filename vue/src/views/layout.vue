<template>
  <div class="layout">
    <div class="layout-sideBar">
      <sideBar :collapse="collapse"></sideBar>
    </div>
    <div class="layout-content">
      <div class="layout-content-header">
        <Header @toggle="isCollapse"></Header>
      </div>

      <el-breadcrumb separator="/">
        <el-breadcrumb-item v-for="(v,i) in levelList" :key="i" >{{v.name}}</el-breadcrumb-item>
      </el-breadcrumb>

      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import sideBar from '../Component/backstage_sidebar'
  import Header from '../Component/backstageHeader/header'
  export default {
    components: {
      sideBar,
      Header
    },
    data() {
      return {
        collapse: '',
        levelList: null
      }
    },
    watch: {
      $route() {
        this.getBreadcrumb()
      }
    },
    methods: {
      isCollapse(val) {
        this.collapse = val
      },
      getBreadcrumb() {
        let matched = this.$route.matched.filter(item => item.name)
        const first = matched[0];
        if (first && first.name.trim().toLocaleLowerCase() !== 'Dashboard'.toLocaleLowerCase()) {
          matched = [{
            path: '/dashboard',
            meta: {
              title: 'dashboard'
            }
          }].concat(matched)
        }
        this.levelList = matched
        console.log(this.levelList)
      }
    },
    created() {
      this.getBreadcrumb()
    },
  }
</script>

<style lang='scss'>
  .layout {
    display: flex;
    max-width: 100vw;
    min-height: 100vh;
  }
  .layout-content {
    flex-grow: 1;
  } // .layout-content-header{
  //   width: 100%;
  //   height: 100%;
  //   display: flex;
  //   flex: 1;
  // }
</style>