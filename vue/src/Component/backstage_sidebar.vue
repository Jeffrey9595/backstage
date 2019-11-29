<template>
  <div class="welcome_left">
    <el-menu
      default-active="1-4-1"
      class="el-menu-vertical-demo"
      :collapse="collapse"
      text-color="#fff"
      background-color="#373d41"
      router
    >
      <el-submenu
        v-show="item.hidden==false"
        :key="index"
        v-for="(item,index) in menu"
        :index="String(item.id)"
      >
        <template slot="title">
          <i class="el-icon-user-solid" v-if="item.name=='订单管理'"></i>
          <i class="el-icon-suitcase-1" v-if="item.name=='首页管理'"></i>
          <i class="el-icon-s-goods" v-if="item.name=='课程管理'"></i>
          <i class="el-icon-s-order" v-if="item.name=='讲师管理'"></i>
          <i class="el-icon-data-line" v-if="item.name=='学员管理'"></i>
          <span :index="item.path" slot="title">{{item.name}}</span>
        </template>
        <el-menu-item :key="indexs" v-for="(items,indexs) in item.children" :index="items.path">
          <i class="el-icon-menu"></i>
          <span>{{items.name}}</span>
          <el-submenu :key="indexss" v-for="(itemss,indexss) in items.children" >
            <el-menu-item :index="itemss.path">{{itemss.name}}</el-menu-item>
          </el-submenu>
        </el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
import Product from "../services/menu";
const _product = new Product();
export default {
  props:['collapse'],
  data() {
    return {
      menu: []
    };
  },
  methods: {},
  created() {
    let token = JSON.parse(localStorage.getItem("token"));
    console.log(token);
    _product.menu(token).then(res => {
      this.menu = res.data.data.sysMenu;
      console.log(res);
    });
  }
};
</script>

<style lang='scss'>
* {
  margin: 0;
  padding: 0;
  list-style: none;
}
.welcome_left {
  background-color: #373d41;
  flex-shrink: 0;
  min-height: 877px;
}
.el-menu {
  border: none;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
  background-color: #373d41;
}
</style>