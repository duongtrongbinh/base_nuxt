<template>
  <div class="header">
    <AtomsLogo :logo="Logo" />
    <MoleculesMenu />
    <div class="header__redirect">
      <AtomsButtonSearch @click="isActive" />
      <AtomsButtonDefault :title="`Đăng ký`" :url="`/`" />
      <AtomsButtonDefault :title="`Đăng nhập`" :url="`/`" />
    </div>
  </div>
  <MoleculesPopupSearch v-model="disablePopup" />
</template>
<script lang="ts" setup>
import Logo from '@/assets/images/gai-xinh-tu-suong-28.webp'
const disablePopup = ref(false)
const isActive = () => {
  disablePopup.value = !disablePopup.value
}
</script>
<style lang="scss" scoped>
@use 'index.scss';
</style>