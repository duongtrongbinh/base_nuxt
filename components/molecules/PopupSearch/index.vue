<template>
  <el-dialog
    v-model="isShow"
    class="popup-search"
    :show-close="false"
    @close="uiStore.setUiState('isSearch' ,!uiStore.getUiState('isSearch'))"
  >
  </el-dialog>
</template>
<script lang="ts" setup>
import { useUiStore } from '@/stores'

const uiStore = useUiStore()
const isShow = defineModel<boolean>({ default: false });
</script>
<style lang="scss" scoped>
@use 'index.scss';
</style>