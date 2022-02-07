<template>
  <div>
    <div class="div-logo" style="height:45px;">
        <img  src="@/imgs/logo2.png" alt="">
        <span class="srm-div">{{collapsed ? '':'SRM'}}</span>
      </div>
      <a-menu class="left-menu"  mode="inline" :default-selected-keys="['1']">
        <a-menu-item key="1">
          <a-icon type="github" />
          <router-link tag="span" to='/home'>首页 </router-link>
        </a-menu-item>
        <a-sub-menu key="sub1">
          <span slot="title"><a-icon type="gitlab" /><span>User</span></span>
          <a-menu-item key="3">
            <router-link to="/myview">
              myview
            </router-link>
          </a-menu-item>
          <a-menu-item key="4">
            <router-link to="/about">
              about
           </router-link>
          </a-menu-item>
          <a-menu-item key="5">
            <router-link  to="/hello"
            >hello
            </router-link>
          </a-menu-item>
        </a-sub-menu>
      </a-menu>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">

  .div-logo{
    display: flex;
    justify-content: center;
    align-items: center;
    background-color:#1890ff;
  img{
    height: 32px;
    width: 32px;
  }
  .srm-div{
    margin-left: 8px;
    font-size:18px;
    font-stretch:100%;
    color: #fff;
    font-weight: 600;
    font-family: 等线;
  }
}
.left-menu{
  height: 100vh;
  overflow-y: scroll;
}
 
</style>