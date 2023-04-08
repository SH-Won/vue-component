<script setup lang="ts">
import { colorValidator } from '../../../utils/validator'

defineProps({
  color: {
    type: String,
    default: '#111',
    validator: colorValidator,
  },
  size: {
    type: String,
    default: 'big',
    validator: (value: string): boolean => {
      return ['big', 'medium', 'small'].indexOf(value) !== -1
    },
  },
})
const emits = defineEmits<{
  (event: 'custom:close'): void
}>()
</script>
<template>
  <svg
    v-if="size === 'big'"
    width="30"
    height="30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    @click="emits('custom:close')"
  >
    <mask
      id="a"
      style="mask-type: alpha"
      maskUnits="userSpaceOnUse"
      x="0"
      y="0"
      width="30"
      height="30"
    >
      <path fill="#D9D9D9" d="M0 0h30v30H0z" />
    </mask>
    <g mask="url(#a)">
      <path
        d="M15 23.53 6.47 15 15 6.47l1.16 1.19-6.57 6.53h13.94v1.62H9.6l6.57 6.53-1.16 1.2Z"
        :fill="color"
      />
    </g>
  </svg>
  <svg
    v-else-if="size === 'medium'"
    width="24"
    height="24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    @click="emits('custom:close')"
  >
    <mask
      id="a"
      style="mask-type: alpha"
      maskUnits="userSpaceOnUse"
      x="0"
      y="0"
      width="24"
      height="24"
    >
      <path fill="#D9D9D9" d="M0 0h30v30H0z" />
    </mask>
    <g mask="url(#a)">
      <path
        d="M15 23.53 6.47 15 15 6.47l1.16 1.19-6.57 6.53h13.94v1.62H9.6l6.57 6.53-1.16 1.2Z"
        :fill="color"
      />
    </g>
  </svg>
  <svg
    v-else-if="size === 'small'"
    width="20"
    height="20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    @click="emits('custom:close')"
  >
    <mask
      id="a"
      style="mask-type: alpha"
      maskUnits="userSpaceOnUse"
      x="0"
      y="0"
      width="20"
      height="20"
    >
      <path fill="#D9D9D9" d="M0 0h30v30H0z" />
    </mask>
    <g mask="url(#a)">
      <path
        d="M15 23.53 6.47 15 15 6.47l1.16 1.19-6.57 6.53h13.94v1.62H9.6l6.57 6.53-1.16 1.2Z"
        :fill="color"
      />
    </g>
  </svg>
</template>

<style lang="scss" scoped></style>
