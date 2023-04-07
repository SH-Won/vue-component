<script setup lang="ts">
import Element from '../elements/Element.vue'

withDefaults(
  defineProps<{
    imageUrl: string
    label: string
    isSub?: boolean
  }>(),
  {
    imageUrl: '',
    label: '',
    isSub: false,
  }
)
</script>

<template>
  <div class="group-card">
    <Element v-if="isSub" name="Depth" :width="17" :height="34" />
    <div class="card">
      <img class="card-image" :src="imageUrl" />
      <div class="card-explain">
        <span>{{ label }}</span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '../../styles/colors.module.scss';
@import '../../styles/typeface.module.scss';
.group-card {
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 14px;
}
.card {
  width: 100%;
  flex-grow: 1;
  & > .card-image {
    width: 80px;
    height: 80px;
  }
  background-color: color('white');
  display: flex;
  gap: 30px;
  padding: 16px;
  border-radius: 8px;
  align-items: center;
  & > .card-explain {
    @include typeface('Heading_3');
  }
}
</style>
