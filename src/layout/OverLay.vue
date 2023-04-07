<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps({
  isShow: {
    type: Boolean,
    default: false,
  },
  opacity: {
    type: Number,
    default: 0.6,
    validator: (num: number) => {
      return num >= 0 && num <= 1
    },
  },
})
const style = computed(() => {
  return {
    backgroundColor: `rgba(0,0,0,${props.opacity})`,
  }
})
</script>
<template>
  <div v-if="isShow" class="overlay" :style="style" @click="$emit('onClick:overlay', $event)">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.overlay {
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 100;
  left: 0;
  top: 0;
  display: grid;
  place-items: center;
  z-index: 10000;
}
</style>