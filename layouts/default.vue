<template>
  <el-container>
    <el-header>
      <OrganismsLayoutsHeader />
    </el-header>
    <el-main>
      <slot />
    </el-main>
    <el-footer>
      <OrganismsLayoutsFooter />
    </el-footer>
    <AtomsBackToTop />
  </el-container>
</template>
<style lang="scss" scoped>
@use '@/assets/scss/main.scss' as *;

:deep(.el-header) {
  padding: 0 !important;
  height: 5rem;
  width: 100%;
  position: fixed;
  background-color: $color-sky-blue;
}
:deep(.el-footer) {
  padding: 0 !important;
  height: 5rem;
  background-color: $color-sky-blue;
}
:deep(.el-main) {
  padding: 0 !important;
  background-color: $color-white;
  min-height: calc(100vh - 5rem);
}
</style>