<script setup lang="ts">
import { OverLay } from '../../layout'

defineProps({
  isShow: {
    type: Boolean,
    default: false,
  },
  isMobile: {
    type: Boolean,
    default: false,
  },
})
const emits = defineEmits(['click:overlay'])
</script>
<template>
  <OverLay
    :is-show="isShow"
    :opacity="0.4"
    @onClick:overlay.self="(event) => emits('click:overlay', event)"
  >
    <div class="wrapper" :class="isMobile ? 'mobile' : ''">
      <slot />
    </div>
  </OverLay>
</template>

<style lang="scss" scoped>
@import '../../styles/typeface.module.scss';
@import '../../styles/colors.module.scss';
.wrapper {
  min-width: 460px;
  background: color('white');
  box-shadow: 0 20px 10px rgba($color: #000000, $alpha: 0.2);
  border-radius: 8px;
  display: flex;
  flex-flow: column;
  gap: 10px;
}
.mobile.wrapper {
  min-width: unset;
  width: 100%;
  height: 100%;
  border-radius: 0;
  display: flex;
  overflow-y: scroll;
}
</style>