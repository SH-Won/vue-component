<script setup lang="ts">
import Colors from '@/styles/colors.module.scss'

withDefaults(
  defineProps<{
    size: 'big' | 'medium' | 'small'
    color: string
  }>(),
  {
    size: 'medium',
    color: Colors.main,
  }
)
</script>
<template>
  <svg v-if="size === 'big'" width="30" height="30" fill="none" xmlns="http://www.w3.org/2000/svg">
    <mask
      id="a"
      width="30"
      height="30"
      x="0"
      y="0"
      maskUnits="userSpaceOnUse"
      style="mask-type: alpha"
    >
      <path fill="#D9D9D9" d="M0 0h24v24H0z" />
    </mask>
    <g mask="url(#a)">
      <path
        :fill="color"
        d="m9.55 17.65-5.33-5.32 1.05-1.08 4.28 4.28 9.18-9.18 1.04 1.08L9.55 17.64Z"
      />
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
      width="24"
      height="24"
      x="0"
      y="0"
      maskUnits="userSpaceOnUse"
      style="mask-type: alpha"
    >
      <path fill="#D9D9D9" d="M0 0h24v24H0z" />
    </mask>
    <g mask="url(#a)">
      <path
        :fill="color"
        d="m9.55 17.65-5.33-5.32 1.05-1.08 4.28 4.28 9.18-9.18 1.04 1.08L9.55 17.64Z"
      />
    </g>
  </svg>
  <svg v-else width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <mask
      id="a"
      width="20"
      height="20"
      x="0"
      y="0"
      maskUnits="userSpaceOnUse"
      style="mask-type: alpha"
    >
      <path fill="#D9D9D9" d="M0 0h24v24H0z" />
    </mask>
    <g mask="url(#a)">
      <path
        :fill="color"
        d="m9.55 17.65-5.33-5.32 1.05-1.08 4.28 4.28 9.18-9.18 1.04 1.08L9.55 17.64Z"
      />
    </g>
  </svg>
</template>


<style scoped>

</style>