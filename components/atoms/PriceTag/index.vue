<template>
  <div></div>
</template>

<script setup lang="ts">
import { useButton } from '@/components/atoms/PriceTag/index';

defineProps<{
  type?: string;
  variant?: string;
}>();

const emit = defineEmits<{
  (e: 'click'): void;
}>();

const { buttonClass, handleClick } = useButton();
</script>

<style scoped lang="scss">
@use '@/components/atoms/PriceTag/index.scss';
</style>