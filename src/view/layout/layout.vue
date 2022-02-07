<template>
  <a-layout
  
    class="layout"
  >
    <a-layout-sider
      theme="light"
      v-model="collapsed"
      collapsible
    >
      <Left />
    </a-layout-sider>
    <a-layout>
      <a-layout-header 
      class="layout-header">
        <Head />
      </a-layout-header>
      <a-layout-content
        :style="{
          margin: '36px 16px',
          padding: '24px',
          background: '#fff',
          minHeight: '220px',
        }"
      >
        <router-view></router-view>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script>
import Left from "@/page/left/left";
import Head from "@/page/head/head";
export default {
  data() {
    return {
      collapsed: false,
    };
  },
  methods:{
    
  },
  components: {
    Left,
    Head,
  },
};
</script>
<style lang="scss">
@import url("./layout.scss");
</style>
