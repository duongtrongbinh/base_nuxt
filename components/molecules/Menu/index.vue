<template>
  <div class="menu">
    <el-menu
      :default-active="activeIndex2"
      mode="horizontal"
    >
      <el-menu-item to="/" index="1">Trang chủ</el-menu-item>
      <el-menu-item index="2">Danh mục</el-menu-item>
      <el-menu-item index="3">Trang tin tức</el-menu-item>
      <el-menu-item index="4">Liên hệ</el-menu-item>
    </el-menu>
  </div>
</template>
<script lang="ts" setup>
const activeIndex2 = ref('1')
</script>
<style lang="scss" scoped>
@use 'index.scss';
</style>