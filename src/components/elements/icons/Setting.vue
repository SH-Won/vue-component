<script setup lang="ts">
import Colors from '@/styles/colors.module.scss'

defineProps({
  size: {
    type: String,
    default: 'medium',
  },
  color: {
    type: String,
    default: Colors.white,
  },
})
</script>

<template>
  <svg
    v-if="size === 'big'"
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    width="30"
    height="30"
  >
    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
    <g id="SVGRepo_iconCarrier">
      <rect width="48" height="48" :fill="color" fill-opacity="0.01"></rect>
      <path
        d="M41.5 10H35.5"
        stroke="#000000"
        stroke-width="0.9600000000000002"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></path>
      <path
        d="M27.5 6V14"
        stroke="#000000"
        stroke-width="0.9600000000000002"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></path>
      <path
        d="M27.5 10L5.5 10"
        stroke="#000000"
        stroke-width="0.9600000000000002"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></path>
      <path
        d="M13.5 24H5.5"
        stroke="#000000"
        stroke-width="0.9600000000000002"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></path>
      <path
        d="M21.5 20V28"
        stroke="#000000"
        stroke-width="0.9600000000000002"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></path>
      <path
        d="M43.5 24H21.5"
        stroke="#000000"
        stroke-width="0.9600000000000002"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></path>
      <path
        d="M41.5 38H35.5"
        stroke="#000000"
        stroke-width="0.9600000000000002"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></path>
      <path
        d="M27.5 34V42"
        stroke="#000000"
        stroke-width="0.9600000000000002"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></path>
      <path
        d="M27.5 38H5.5"
        stroke="#000000"
        stroke-width="0.9600000000000002"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></path>
    </g>
  </svg>
  <svg
    v-else-if="size === 'medium'"
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
  >
    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
    <g id="SVGRepo_iconCarrier">
      <rect width="48" height="48" :fill="color" fill-opacity="0.01"></rect>
      <path
        d="M41.5 10H35.5"
        stroke="#000000"
        stroke-width="0.9600000000000002"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></path>
      <path
        d="M27.5 6V14"
        stroke="#000000"
        stroke-width="0.9600000000000002"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></path>
      <path
        d="M27.5 10L5.5 10"
        stroke="#000000"
        stroke-width="0.9600000000000002"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></path>
      <path
        d="M13.5 24H5.5"
        stroke="#000000"
        stroke-width="0.9600000000000002"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></path>
      <path
        d="M21.5 20V28"
        stroke="#000000"
        stroke-width="0.9600000000000002"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></path>
      <path
        d="M43.5 24H21.5"
        stroke="#000000"
        stroke-width="0.9600000000000002"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></path>
      <path
        d="M41.5 38H35.5"
        stroke="#000000"
        stroke-width="0.9600000000000002"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></path>
      <path
        d="M27.5 34V42"
        stroke="#000000"
        stroke-width="0.9600000000000002"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></path>
      <path
        d="M27.5 38H5.5"
        stroke="#000000"
        stroke-width="0.9600000000000002"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></path>
    </g>
  </svg>
  <svg
    v-else
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
  >
    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
    <g id="SVGRepo_iconCarrier">
      <rect width="48" height="48" :fill="color" fill-opacity="0.01"></rect>
      <path
        d="M41.5 10H35.5"
        stroke="#000000"
        stroke-width="0.9600000000000002"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></path>
      <path
        d="M27.5 6V14"
        stroke="#000000"
        stroke-width="0.9600000000000002"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></path>
      <path
        d="M27.5 10L5.5 10"
        stroke="#000000"
        stroke-width="0.9600000000000002"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></path>
      <path
        d="M13.5 24H5.5"
        stroke="#000000"
        stroke-width="0.9600000000000002"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></path>
      <path
        d="M21.5 20V28"
        stroke="#000000"
        stroke-width="0.9600000000000002"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></path>
      <path
        d="M43.5 24H21.5"
        stroke="#000000"
        stroke-width="0.9600000000000002"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></path>
      <path
        d="M41.5 38H35.5"
        stroke="#000000"
        stroke-width="0.9600000000000002"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></path>
      <path
        d="M27.5 34V42"
        stroke="#000000"
        stroke-width="0.9600000000000002"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></path>
      <path
        d="M27.5 38H5.5"
        stroke="#000000"
        stroke-width="0.9600000000000002"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></path>
    </g>
  </svg>
</template>

<style scoped></style>
