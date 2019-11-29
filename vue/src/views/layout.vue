<template>
  <div class="layout">
     <div class="layout">
         <sideBar></sideBar>
     </div>
     <div class="layout-content">
        <router-view></router-view>
     </div>
  </div>
</template>

<script>
import sideBar from '../Component/backstage_sidebar'
export default {
  components:{
      sideBar
  }
}
</script>

<style>

</style>