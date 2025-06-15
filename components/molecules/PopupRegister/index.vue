<template>
  <el-dialog
    v-model="isShow"
    class="popup-register"
    :show-close="false"
    @close="uiStore.setUiState('isRegisterDialog' ,!uiStore.getUiState('isRegisterDialog'))"
  >
    <template #header>
      <h3>Register</h3>
    </template>
    <div class="content"></div>
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