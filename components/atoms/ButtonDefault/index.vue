<template>
  <div class="button-default">
    <el-button @click="redirectTo()">
      {{ props.title }}
    </el-button>
  </div>
</template>
<script lang="ts" setup>
import { useRouter } from 'vue-router'

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: false
  }
})
const router = useRouter()
const redirectTo = () => {
  if (!props.url) return
  router.push(props.url)
}
</script>
<style lang="scss" scoped>
@use 'index.scss';
</style>