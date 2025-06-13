<template>
  <el-dialog
    v-model="isShow"
    class="popup-search"
    :show-close="false"
  >
  </el-dialog>
</template>
<script lang="ts" setup>
const isShow = defineModel<boolean>({ default: false });
</script>
<style lang="scss" scoped>
@use 'index.scss';
</style>