<script setup lang="ts">
import Colors from '@/styles/colors.module.scss'

defineProps({
  size: {
    type: String,
    default: 'medium',
  },
  color: {
    type: String,
    default: Colors.grey_666,
  },
})
</script>
<template>
  <svg v-if="size === 'big'" width="30" height="30" fill="none" xmlns="http://www.w3.org/2000/svg">
    <mask
      id="a"
      style="mask-type: alpha"
      maskUnits="userSpaceOnUse"
      x="0"
      y="0"
      width="30"
      height="30"
    >
      <path fill="#D9D9D9" d="M0 0h24v24H0z" />
    </mask>
    <g mask="url(#a)">
      <path d="M9.4 17.65 8.35 16.6l4.6-4.6-4.6-4.6L9.4 6.35 15.05 12 9.4 17.65Z" :fill="color" />
    </g>
  </svg>
  <svg
    v-else-if="size === 'medium'"
    width="24"
    height="24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
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
      <path fill="#D9D9D9" d="M0 0h24v24H0z" />
    </mask>
    <g mask="url(#a)">
      <path d="M9.4 17.65 8.35 16.6l4.6-4.6-4.6-4.6L9.4 6.35 15.05 12 9.4 17.65Z" :fill="color" />
    </g>
  </svg>
  <svg v-else width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <mask
      id="a"
      style="mask-type: alpha"
      maskUnits="userSpaceOnUse"
      x="0"
      y="0"
      width="20"
      height="20"
    >
      <path fill="#D9D9D9" d="M0 0h20v20H0z" />
    </mask>
    <g mask="url(#a)">
      <path d="m8 14.7-.77-.76L11.17 10 7.23 6.06 8 5.3 12.7 10 8 14.7Z" :fill="color" />
    </g>
  </svg>
</template>

<style scoped>

</style>