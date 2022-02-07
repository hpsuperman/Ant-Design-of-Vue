<template>
  <a-table :columns="columns" :data-source="data">


  </a-table>
</template>
<script>
const columns = [
  {
    title:'日期',
    dataIndex: 'startdate',
    key: 'startdate',
  },
  {
    title: '照片名',
    dataIndex: 'copyright',
    key: 'copyright',
  },
  {
    title: '作者',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '图片',
    dataIndex: 'url',
    key: 'url',
  },
];



export default {
  data() {
    return {
      columns,
    };
  },
};
</script>
