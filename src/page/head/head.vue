<template>
  <div>
      <a-layout-header class="layout-header">
        <a-icon
          class="trigger"
          style="color:#fff"
          :type="collapsed ? 'menu-unfold' : 'menu-fold'"
          @click="() => (collapsed = !collapsed)"
        />
        <a-dropdown class="right-logo">
          <a class="ant-dropdown-link" @click="e => e.preventDefault()">
            Hover me <a-icon type="down" />
          </a>
          <a-menu slot="overlay">
            <a-menu-item>
              <a href="javascript:;">个人设置</a>
            </a-menu-item>
            <a-menu-item>
              <a @click="signOut()" href="javascript:;">退出登录</a>
            </a-menu-item>
          </a-menu>
        </a-dropdown>
      </a-layout-header>
  </div>
</template>

<script>
export default {
    name:'headBox',
    data(){
        return{
            collapsed: false,
        }
    },
    methods:{
      signOut(){
        this.$router.push('/login')
      }
    }

}
</script>

<style lang="scss">
.right-logo{
  position:absolute;
  right:0vw;
  margin-right: 20px;
}
</style>