<template>
  <div class="welcome_left">
    <el-menu
      default-active="1"
      class="el-menu-vertical-demo"
      :collapse="collapse"
      text-color="#fff"
      background-color="#373d41"
      v-for="(v,i) in menu"
      :key="i"
      router
    >
      <!-- 一级 -->
      <el-submenu :index="v.path" v-if="(v.children.length!==0)" :title="v.name" >
        <template slot="title" >
          <span slot="title">{{v.name}}</span>
        </template>

          <!-- 此处为二级导航数组长度判定 -->
          <div v-for="(s,x) in v.children" :key="x">
            <el-menu-item :index="s.path" v-if="s.children.length == 0" :router="s" >
              {{s.name}}
            </el-menu-item>

            <el-submenu :index="s.path" v-if="s.children.length !== 0" >
              <span slot="title">{{s.name}}</span>

              <el-menu-item :index="z.path" v-for="(z,c) in s.children" :key="c">{{z.name}} </el-menu-item>
            </el-submenu>
          </div>

      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
import Product from "../services/menu";
const _product = new Product();
export default {
  props: ["collapse"],
  data() {
    return {
      menu: []
    };
  },
  methods: {
  },
  created() {
    let token = JSON.parse(localStorage.getItem("token"));
    // console.log(token);
    _product.menu(token).then(res => {
      this.menu = res.data.data.sysMenu;
      // console.log(res);
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
  min-height: 100vh;
}
.el-menu {
  border: none;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  background-color: #373d41;
}
</style>