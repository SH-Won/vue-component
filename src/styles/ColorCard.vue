<script setup lang="ts">
import { computed } from 'vue'
const props = defineProps({
  colorValue: {
    type: String,
    default: '#fff',
  },
  variableName: {
    type: String,
    default: '$Undefined',
  },
})
const tagBGcolor = computed((): string => props.colorValue + '20')
</script>
<template>
  <div class="wrapper">
    <div class="colorContainer" />
    <div class="tag">
      <span>{{ variableName }}</span>
      <span>{{ colorValue }}</span>
    </div>
  </div>
</template>
<style scoped lang="scss">
@import './colors.module';
.wrapper {
  margin: 20px 0 0 20px;
  display: flex;
  flex-flow: column;
  outline: 1px solid color(main);
  .colorContainer {
    flex-basis: 50px;
    width: 200px;
    background-color: v-bind(colorValue);
  }
  .tag {
    background-color: v-bind(tagBGcolor);
    padding: 8px;
    display: flex;
    flex-flow: column;
    gap: 4px;
  }
}
</style>