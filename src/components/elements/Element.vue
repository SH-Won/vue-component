<script setup lang="ts">
import { sizeValidator } from '../../utils/validator'
import { defineAsyncComponent, computed, type Component, type PropType } from 'vue'
import type { ElementName } from '../../types/Element'
const props = defineProps({
  size: {
    type: String,
    validator: sizeValidator,
    default: 'medium',
  },
  name: {
    type: String as PropType<ElementName>,
    default: '',
  },
  color: {
    type: String,
    default: '#fff',
  },
})

const iconComponent = defineAsyncComponent(async () => {
  const modules = import.meta.glob(`./icons/*.vue`)
  const entries = Object.entries(modules)
  const findModule = entries.find(([fileName]) => {
    const findName = './icons/' + props.name + '.vue'
    return fileName === findName
  })
  if (!findModule) throw new Error('cannot find icon component: ' + props.name)
  return (await findModule[1]()) as Component
})
const adjustHeigth = computed(() => {
  if (props.size === 'big') return '30px'
  else if (props.size === 'medium') return '24px'
  else return '20px'
})
</script>
<template>
  <div :style="{ height: adjustHeigth }">
    <component :is="iconComponent" v-bind="props" />
  </div>
</template>
<style scoped>
div {
  display: inline-block;
}
</style>