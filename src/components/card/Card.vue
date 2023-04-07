<script lang="ts" setup>
import { computed } from 'vue'

const props = withDefaults(
  defineProps<{
    imageUrl: string
    height: string | undefined
    objectFit: string | undefined
  }>(),
  {
    imageUrl: '',
    height: '280px',
    objectFit: 'fill',
  }
)
const computedStyle = computed<{ [key: string]: string }>(() => {
  return {
    height: props.height,
    objectFit: props.objectFit,
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
