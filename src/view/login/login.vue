<template>
  <div>
    <div class="head-box">
      <div class="wrapper">
        <img class="logo" src="@/imgs/logo.png" />
        <div style="padding-left:5px color:#1991ff">QQT SRM</div>
        <span>易学易用</span>
        <span>互联互通</span>
      </div>
    </div>
    <a-carousel autoplay>
      <template v-for="el in banners">
        <div :key="el.id">
          <img class="bj-img" :src="el.src" :alt="el.name" />
        </div>
      </template>
    </a-carousel>
    <a-form
      id="components-form-demo-normal-login"
      :form="form"
      class="login-form"
      @submit="handleSubmit"
    >
      <a-card :bordered="false">
        <a-form-item>
          <div class="head-qqt">
            <span>QQT</span>
            <span style="padding-left: 10px">SRM</span>
            <span style="padding-left: 10px">系统</span>
          </div>
        </a-form-item>
        <a-form-item>
          <!--  v-decorator="[  'userName',  {
                rules: [
                  { required: true, message: '请输入账号!' },
                ],
              },
            ]" -->
          <!-- <a-input
           v-model="loginInfo.username"
            placeholder="请输入els账号"
          >
          </a-input> -->
          <a-input
          v-model="loginInfo.username"
           placeholder="请输入els账号"
          >
          </a-input>
        </a-form-item>
        <a-form-item>
          <!-- v-decorator="['password', {
                rules: [
                  { required: true, message: '请输入密码!' },
                ],
              },
            ]" --> 
          <!-- <a-input
            type="password"
            v-model="loginInfo.password"
            placeholder="请输入密码"
          >
          </a-input> -->
          <a-input
          type='password'
          v-model="loginInfo.password"
           placeholder="请输入密码"
          >

          </a-input>
        </a-form-item>
        <a href="#" style="color: #1890ff">忘记密码</a>
          <a-form-item>
            <a-button
            @click="login"
              type="primary"
              shape="round"
              size="large"
              html-type="submit"
              class="login-form-button"
            >
              登录
            </a-button>
          </a-form-item>
      </a-card>
    </a-form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      loginInfo:{
        username:"",
        password:""
      },
      banners: [
        {
          src: require("@/imgs/banner_1.jpg"),
          name: "banner_1",
          id: "banner_1",
        },
        {
          src: require("@/imgs/banner_2.jpg"),
          name: "banner_2",
          id: "banner_2",
        },
      ],
    };
  },

  methods: {
    login(){
      if(this.loginInfo.username === "admin" &
        this.loginInfo.password ==="123456"
      ){
        this.$message.success('登录成功',2,()=>{
          this.$router.push('/layout')});
      }else{
          this.$message.warning('用户名或密码错误');
      }
    }
  
  },
};
</script>

<style lang="scss">
@import url("./login.scss");
</style>