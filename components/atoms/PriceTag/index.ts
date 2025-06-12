import { computed } from 'vue'
const emit = defineEmits(['change'])
const props = defineProps({
  title: String
})

export const useButton = () => {
  const buttonClass = computed(() => `btn btn--${props.title}`);

  const handleClick = () => {
    emit('change', true);
  };

  return { buttonClass, handleClick };
};