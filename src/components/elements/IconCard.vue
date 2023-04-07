<script setup lang="ts">
import type { ElementName } from '../../types/Element'
import type { PropType } from 'vue'
import Element from './Element.vue'
defineProps({
  name: {
    type: String as PropType<ElementName>,
    default: 'It should be Component name',
  },
  size: {
    type: String,
    default: 'It is up to given size',
  },
  color: {
    type: String,
    default: 'It must be hex code',
  },
  pigma: {
    type: String,
    default: 'Reference ID',
  },
  backGround: {
    type: String,
    default: undefined,
  },
})
</script>
<template>
  <div class="wrapper">
    <div class="iconContainer">
      <Element :name="name" :size="size" :color="color" />
    </div>
    <div class="tag">
      <span>{{ pigma }}</span>
      <span>name: {{ name }}</span>
      <span>size: {{ size }}</span>
      <span>color: {{ color }}</span>
    </div>
  </div>
</template>
<style scoped lang="scss">
@import '../../styles/colors.module.scss';
.wrapper {
  display: flex;
  flex-flow: column;
  border: 2px dashed #9747ff;
  border-radius: 5px;
  width: 200px;

  .iconContainer {
    display: grid;
    place-items: center;
    padding: 20px;
    background-color: v-bind(backGround);
  }
  .tag {
    display: flex;
    flex-flow: column;
    padding: 8px;
    gap: 4px;
    background: #eeeeee;
    font-size: 12px;
    & > span:first-child {
      font-weight: bold;
      font-size: 14px;
      padding-bottom: 4px;
    }
  }
}
</style>