<script setup lang="ts">
defineProps({
  text: {
    type: String,
    default: undefined,
  },
  variableName: {
    type: String,
    default: 'TypeFace variable name set on scss file',
  },
  family: {
    type: String,
    default: 'SUIT',
  },
  size: {
    type: String,
    default: 'Size needed to be set on scss file',
  },
  line: {
    type: String,
    default: 'Line Height to be set on scss file',
  },
  weight: {
    type: String,
    default: 'Weight needed to be set on scss file',
  },
})
</script>
<template>
  <div class="wrapper">
    <div class="textContainer">
      <template v-if="text">{{ text }}</template>
      <slot v-else></slot>
    </div>
    <div class="tag">
      <span>{{ variableName }}</span>
      <div class="property">
        <span class="propertyKey">Size</span>
        <span class="propertyValue">{{ size }}</span>
        <span class="propertyKey">Line</span>
        <span class="propertyValue">{{ line }}</span>
        <span class="propertyKey">Weight</span>
        <span class="propertyValue">{{ weight }}</span>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import './typeface.module.scss';
@import './colors.module.scss';

.wrapper {
  display: flex;
  flex-flow: column;
  border: 2px dashed #9747ff;
  border-radius: 5px;
  min-width: 200px;
  .textContainer {
    font-size: v-bind(size);
    font-weight: v-bind(weight);
    line-height: v-bind(line);
    font-family: v-bind(family);
    padding: 20px;
    background: color('white');
  }
  .tag {
    display: flex;
    flex-flow: column;
    padding: 8px;
    gap: 4px;
    font-size: 12px;
    & > span:first-child {
      font-weight: bold;
      font-size: 14px;
      padding-bottom: 4px;
    }
    & > .property {
      display: grid;
      grid-template-columns: 1fr 1fr;
      .propertyKey {
        color: color('grey_999');
        font-size: 14px;
      }
    }
  }
}
</style>