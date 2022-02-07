<template>
  <div>
    <a-row class="inquire-row">
      <a-col :span="2">
        <div class="text-div">{{ name }}:</div>
      </a-col>
      <a-col :span="4">
        <a-auto-complete class="inputBox" />
      </a-col>
      <a-col class="text-div" :span="2">
        <div>inquire:</div>
      </a-col>
      <a-col :span="4">
        <a-auto-complete class="inputBox" />
      </a-col>
      <a-col :span="4" />
        <a-col :span="2">
          <a-button type="primary" icon="search"> 查询 </a-button>
        </a-col>
        <a-col :span="3">
          <a-button type="primary" icon="monitor">高级查询 </a-button>
        </a-col>
        <a-col :span="2">
          <a-button type="primary"> 重置 </a-button>
        </a-col>
    </a-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "关键字",
    };
  },
};
</script>

<style lang="scss" scoped>
.inquire-row {
  padding: 6px;
  border: 1px solid #e8eaec;
  .text-div {
    text-align: right;
    line-height: 30px;
  }
  .inputBox {
    padding-left: 11px;
  }

}
</style>