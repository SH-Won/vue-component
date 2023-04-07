import IconCard from './IconCard.vue'
import type { Meta, StoryFn } from '@storybook/vue3'
import { bigElements, mediumElements, smallElements } from '../../const/ElementList'
import Color from '../../styles/colors.module.scss'
import { h } from 'vue'

export default {
  title: 'Component/Element',
  component: IconCard,
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'bg_main',
      values: [
        {
          name: 'bg_main',
          value: Color.bg_main,
        },
        {
          name: 'main',
          value: Color.main,
        },
      ],
    },
  },
} as Meta<typeof IconCard>

export const Big_30px: StoryFn<typeof IconCard> = () => ({
  components: { IconCard },
  render() {
    return h(
      'div',
      {
        style: {
          display: 'flex',
          'flex-wrap': 'wrap',
          gap: '20px',
          margin: '20px',
        },
      },
      bigElements.map((element) => {
        return h(IconCard, {
          name: element.name,
          size: element.size,
          color: element.color,
          pigma: element.pigma,
          backGround: element.backGround,
        })
      })
    )
  },
})

export const Medium_24px: StoryFn<typeof IconCard> = () => ({
  components: { IconCard },
  render() {
    return h(
      'div',
      {
        style: {
          display: 'flex',
          'flex-wrap': 'wrap',
          gap: '20px',
          margin: '20px',
        },
      },
      mediumElements.map((element) => {
        return h(IconCard, {
          name: element.name,
          size: element.size,
          color: element.color,
          pigma: element.pigma,
          backGround: element.backGround,
        })
      })
    )
  },
})

export const Small_20px: StoryFn<typeof IconCard> = () => ({
  components: { IconCard },
  render() {
    return h(
      'div',
      {
        style: {
          display: 'flex',
          'flex-wrap': 'wrap',
          gap: '20px',
          margin: '20px',
        },
      },
      smallElements.map((element) => {
        return h(IconCard, {
          name: element.name,
          size: element.size,
          color: element.color,
          pigma: element.pigma,
          backGround: element.backGround,
        })
      })
    )
  },
})
