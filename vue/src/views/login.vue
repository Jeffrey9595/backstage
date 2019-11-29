<template>
  <div class="login">
    <div class="login-leftimg">
      <img src="../assets/8a49f320a74dcac3dd616d74fbc62d6.jpg" alt />
    </div>
    <div class="login-box">
      <div class="login-img">
        <i class="el-icon-user"></i>
      </div>
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item prop="user" label-width="0px">
          <el-input prefix-icon="el-icon-user-solid" v-model="ruleForm.user" placeholder="请输入账号"></el-input>
        </el-form-item>

        <el-form-item prop="pass" label-width="0px">
          <el-input
            prefix-icon="el-icon-lock"
            v-model="ruleForm.pass"
            show-password
            placeholder="请输入账号"
          ></el-input>
        </el-form-item>
        <el-button type="primary" style="width:100%" @click="submit">登录</el-button>
      </el-form>
    </div>
  </div>
</template>

<script>
import Product from "../services/login";
const _product = new Product();
export default {
  component: {},
  data() {
    return {
      ruleForm: {
        clientId: "lkb65617f842ad4c37895a733b8de43cbb",
        ip: "127.0.0.0",
        user: "13800000000",
        pass: "123456"
      },
      rules: {
        user: [
          { required: true, message: "请输入账号", trigger: "blur" },
          { min: 1, max: 15, message: "请输入账号", trigger: "blur" }
        ],
        pass: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { min: 1, max: 15, message: "请输入密码", trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    submit() {
      console.log(this.ruleForm);
      _product.login(this.ruleForm).then(res => {
        console.log(res);
        if(res.data.code==200){
          localStorage.setItem('token',JSON.stringify(res.data.data.token))
          this.$router.push({
            path:'/dashboard'
          })
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.login {
  position: relative;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: #93defe;
  .login-leftimg {
    position: absolute;
    top: 25%;
    left: 55%;
    width: 500px;
    height: 300px;
    overflow: hidden;
    img {
      transform: rotate(90deg);
      height: 100%;
    }
  }
  .login-box {
    width: 400px;
    height: 400px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(80%, -70%);
    background-color: white;
    border-radius: 10px;
    padding-top: 150px;
    padding-left: 30px;
    padding-right: 30px;
    box-sizing: border-box;
    .login-img {
      position: absolute;
      top: 0;
      left: 50%;
      transform: translate(-50%, -50px);
      width: 150px;
      height: 150px;
      background-color: #fff;
      border: 5px solid #93defe;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: space-around;
      i {
        font-size: 80px;
        color: #93defe;
      }
    }
  }
}
.el-form-item__content {
  margin-left: 0 !important;
}
</style>