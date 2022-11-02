<template>
  <h1 class="test"></h1>
  <!-- 
  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>

  <p>
    Check out
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank"
      >create-vue</a
    >, the official Vue + Vite starter
  </p>
  <p>
    Install
    <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
    in your IDE for a better DX
  </p> -->
  <el-input clearable v-model="msg"></el-input>
  <!-- <el-icon class="is-loading"></el-icon -->
  <p class="read-the-docs">C o learn more</p>
</template>
<script setup lang="ts">
  import { ref } from 'vue';
  const msg = ref('123');
</script>
<style lang="less" scoped>
  .test {
    color: @color;
  }
</style>
