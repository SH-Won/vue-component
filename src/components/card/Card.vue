<script lang="ts" setup>
import { computed } from 'vue'

const props = defineProps<{
  imageUrl: string
  height?: string
}>()
const computedStyle = computed(() => {
  return {
    height: props.height,
  }
})
</script>
<template>
  <div class="card-container">
    <div class="card">
      <img :src="imageUrl" :style="computedStyle" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card-container {
  position: relative;
  .card {
    border-radius: 8px;
    box-sizing: border-box;
    width: 100%;
    & > img {
      border-radius: 8px;
      width: 100%;
    }
  }
}
</style>
