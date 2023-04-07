<script setup lang="ts">
import Colors from '@/styles/colors.module.scss'

defineProps({
  size: {
    type: String,
    default: 'medium',
  },
  color: {
    type: String,
    default: Colors.notice,
  },
})
</script>
<template>
  <svg
    v-if="size === 'big'"
    id="caution-sign-circle"
    fill="#999999"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    class="icon line"
    :stroke="color"
    width="30"
    height="30"
  >
    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
    <g id="SVGRepo_iconCarrier">
      <line
        id="primary-upstroke"
        x1="11.95"
        y1="16.5"
        x2="12.05"
        y2="16.5"
        style="
          fill: none;
          stroke: #000000;
          stroke-linecap: round;
          stroke-linejoin: round;
          stroke-width: 1.95;
        "
      ></line>
      <path
        id="primary"
        d="M3,12a9,9,0,0,1,9-9h0a9,9,0,0,1,9,9h0a9,9,0,0,1-9,9h0a9,9,0,0,1-9-9Zm9,0V7"
        style="
          fill: none;
          stroke: #000000;
          stroke-linecap: round;
          stroke-linejoin: round;
          stroke-width: 1.5;
        "
      ></path>
    </g>
  </svg>
  <svg
    v-else-if="size === 'medium'"
    id="caution-sign-circle"
    fill="#999999"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    class="icon line"
    :stroke="color"
    width="24"
    height="24"
  >
    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
    <g id="SVGRepo_iconCarrier">
      <line
        id="primary-upstroke"
        x1="11.95"
        y1="16.5"
        x2="12.05"
        y2="16.5"
        style="
          fill: none;
          stroke: #000000;
          stroke-linecap: round;
          stroke-linejoin: round;
          stroke-width: 1.95;
        "
      ></line>
      <path
        id="primary"
        d="M3,12a9,9,0,0,1,9-9h0a9,9,0,0,1,9,9h0a9,9,0,0,1-9,9h0a9,9,0,0,1-9-9Zm9,0V7"
        style="
          fill: none;
          stroke: #000000;
          stroke-linecap: round;
          stroke-linejoin: round;
          stroke-width: 1.5;
        "
      ></path>
    </g>
  </svg>
  <svg
    v-else
    id="caution-sign-circle"
    fill="#999999"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    class="icon line"
    :stroke="color"
    width="20"
    height="20"
  >
    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
    <g id="SVGRepo_iconCarrier">
      <line
        id="primary-upstroke"
        x1="11.95"
        y1="16.5"
        x2="12.05"
        y2="16.5"
        style="
          fill: none;
          stroke: #000000;
          stroke-linecap: round;
          stroke-linejoin: round;
          stroke-width: 1.95;
        "
      ></line>
      <path
        id="primary"
        d="M3,12a9,9,0,0,1,9-9h0a9,9,0,0,1,9,9h0a9,9,0,0,1-9,9h0a9,9,0,0,1-9-9Zm9,0V7"
        style="
          fill: none;
          stroke: #000000;
          stroke-linecap: round;
          stroke-linejoin: round;
          stroke-width: 1.5;
        "
      ></path>
    </g>
  </svg>
</template>

<style scoped>

</style>