<template>
  <div class="layout">
     <div class="layout-sideBar">
         <sideBar :collapse="collapse"></sideBar>
     </div>
     <div class="layout-content">
       <div class="layout-content-header">
         <Header @toggle="isCollapse"></Header>
       </div>
        <router-view></router-view>
     </div>
  </div>
</template>

<script>
import sideBar from '../Component/backstage_sidebar'
import Header from '../Component/backstageHeader/header'
export default {
  components:{
      sideBar,
      Header
  },
  data() {
    return {
      collapse:''
    }
  },
  methods: {
    isCollapse(val){
      this.collapse=val
    }
  },
}
</script>

<style lang='scss'>
.layout{
  display: flex;
  width: 100%;
  height: 100%;
}
.layout-content{
  width: 100%;
  height: 100%;
  display: flex;
  flex: 1;
}
.layout-content-header{
  width: 100%;
  height: 100%;
  display: flex;
  flex: 1;
}
</style>