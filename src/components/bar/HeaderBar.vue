<script setup lang="ts">
import { computed } from 'vue'
import { Element } from '../elements'

defineProps({
  title: {
    type: String,
    default: '',
  },
  backFunc: {
    type: Function,
    default: undefined,
  },
  isMobile: {
    type: Boolean,
    default: false,
  },
  color: {
    type: String,
    default: '#111',
  },
})
</script>
<template>
  <div class="appBar" :class="isMobile ? 'mobile' : ''">
    <Element
      v-show="backFunc"
      name="ArrowLeft"
      :color="color"
      @click="backFunc ? backFunc() : () => {}"
    />
    <span>{{ title }}</span>
  </div>
</template>


<style lang="scss" scoped>
@import '../../styles/colors.module.scss';
@import '../../styles/typeface.module.scss';
.appBar {
  display: flex;
  gap: 10px;
  background-color: #fff;
  padding: 14px 40px;
  border-bottom: 1px solid color('line_02');
  &.mobile {
    padding: 14px 20px;
  }
  & > span {
    @include typeface('Heading_3');
  }
}
</style>