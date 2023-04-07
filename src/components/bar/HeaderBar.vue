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
})
</script>
<template>
  <div class="appBar">
    <Element
      v-show="backFunc"
      name="ArrowLeft"
      color="#111"
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
  & > span {
    @include typeface('Heading_3');
  }
}
</style>