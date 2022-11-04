<template>
  <div class="card">
    <div class="header">
      <div>{{ title }}</div>
    </div>
    <div class="content">
      {{ content }}
    </div>
  </div>
</template>
<script setup lang="ts">
  type Props = {
    content?: string;
    title?: string;
  };
  withDefaults(defineProps<Props>(), {
    title: '暂无数据',
    content: '暂无数据'
  });
</script>
<style lang="less" scoped>
  @border: #ccc;
  .card {
    border: 1px solid @border;
    height: 300px;
    width: 500px;
    &-header {
      height: 100px;
      border-bottom: 1px solid @border;
    }
    &-content {
      height: 200px;
    }
  }
</style>
