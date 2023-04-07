<script setup lang="ts">
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
.appBar {
  display: flex;
  gap: 10px;
  background-color: #fff;
  padding: 20px 40px;
  & > span {
    font-size: 24px;
  }
}
</style>