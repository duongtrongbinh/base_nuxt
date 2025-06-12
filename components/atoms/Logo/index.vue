<template>
  <div class="logo">
    <el-image :src="props.logo" fit="contain">
      <template #error>
        <div class="avatar">
          <img
            src="@/assets/images/avatar-default.png"
            alt="logo default"
          />
        </div>
      </template>
    </el-image>
  </div>
</template>
<script lang="ts" setup>

const props = defineProps({
  logo: {
    type: String,
    required: true,
  },
})
</script>
<style lang="scss" scoped>
@use 'index.scss';
</style>