<template>
  <div class="common-button" :style="style">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import Colors from '../../styles/colors.module.scss'

const props = withDefaults(
  defineProps<{
    size?: 'big' | 'medium' | 'small'
    color: string
    border?: string
    disable?: boolean
    width?: string
    fontColor?: string
  }>(),
  {
    size: 'medium',
    color: Colors.main,
    border: '',
    disable: false,
    width: '100px',
    fontColor: '#111',
  }
)
const style = computed(() => {
  if (props.disable) {
    return {
      backgroundColor: Colors.bg_disable,
      padding: props.size === 'big' ? '14px 24px' : '12px 20px',
      border: props.border ? `1px solid ${props.border}` : '',
      width: props.width,
      color: props.fontColor,
    }
  } else {
    return {
      backgroundColor: props.color,
      padding: props.size === 'big' ? '14px 24px' : '12px 20px',
      border: props.border ? `1px solid ${props.border}` : '',
      width: props.width,
      color: props.fontColor,
    }
  }
})
</script>

<style lang='scss' scoped>
.common-button {
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  /* user-select: none; */
}
</style>