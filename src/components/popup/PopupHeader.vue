<script setup lang="ts">
import ArrowLeft from '../elements/icons/ArrowLeft.vue'
import Close from '../elements/icons/Close.vue'
import Element from '../elements/Element.vue'
import Colors from '@/styles/colors.module.scss'
import { computed } from 'vue'

const props = withDefaults(
  defineProps<{
    title: string
    back: () => void
    close: () => void
  }>(),
  {
    title: '',
    back: undefined,
    close: undefined,
  }
)
const style = computed(() => {
  if (props.title) {
    return { padding: '20px' }
  } else {
    return { padding: '16px' }
  }
})
</script>

<template>
  <div class="popup-header" :style="style">
    <div class="popup-icon">
      <Element v-if="back" name="ArrowLeft" size="big" :color="Colors.grey_999" @click="back" />
    </div>
    <div>
      <span v-if="title" class="title">{{ title }}</span>
    </div>
    <div class="popup-icon">
      <Element v-if="close" name="Close" size="big" :color="Colors.grey_999" @click="close" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '../../styles/colors.module.scss';
@import '../../styles/typeface.module.scss';
.popup-header {
  display: grid;
  grid-template-columns: 30px 1fr 30px;
  place-items: center;
  & > div {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .title {
    @include typeface('Heading_2_m');
    color: color('grey_111');
    text-align: center;
  }
  .icon {
    user-select: none;
    cursor: pointer;
  }
}
</style>
