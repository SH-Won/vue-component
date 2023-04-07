<script setup lang="ts">
import { colorValidator } from '../../../utils/validator'
defineProps({
  size: {
    type: String,
    default: 'big',
    validator: (value: string): boolean => {
      return ['big', 'medium', 'small'].indexOf(value) !== -1
    },
  },
  color: {
    type: String,
    validator: colorValidator,
    default: '#111',
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
      <path fill="#D9D9D9" d="M0 0h30v30H0z" />
    </mask>
    <g mask="url(#a)">
      <path
        d="M6 20.25v-1.5h17.5v1.5H6Zm0-4.88v-1.5h17.5v1.5H6Zm0-4.87V9h17.5v1.5H6Z"
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
      <path
        d="M3.25 17.63v-1.5h17.5v1.5H3.25Zm0-4.88v-1.5h17.5v1.5H3.25Zm0-4.88v-1.5h17.5v1.5H3.25Z"
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
      <path fill="#D9D9D9" d="M0 0h20v20H0z" />
    </mask>
    <g mask="url(#a)">
      <path
        d="M3.2 14.19V13.1h13.6v1.09H3.2Zm0-3.65V9.46h13.6v1.08H3.2Zm0-3.64V5.8h13.6V6.9H3.2Z"
        :fill="color"
      />
    </g>
  </svg>
</template>