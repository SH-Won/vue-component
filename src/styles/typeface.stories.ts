import TypefaceCard from './TypefaceCard.vue'
import typefaces from './typeface.module.scss'

import Color from './colors.module.scss'
import { h } from 'vue'

export default {
  title: 'Style/Typefaces',
  component: TypefaceCard,
  argTypes: {
    text: {
      control: 'text',
    },
  },
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
}

export const SUIT = () => ({
  component: { TypefaceCard },
  render() {
    return h(
      'div',
      {
        style: {
          display: 'flex',
          'flex-wrap': 'wrap',
          margin: '20px',
          gap: '20px',
        },
      },
      Object.keys(typefaces).map((key) => {
        if (!key.includes('_key')) return
        const typefaceKey = key.replace('_key', '')
        return h(
          TypefaceCard,
          {
            variableName: typefaceKey,
            size: typefaces[typefaceKey + '_size'],
            line: typefaces[typefaceKey + '_line_height'],
            weight: typefaces[typefaceKey + '_weight'],
          },
          [
            h('span', ['The quick brown fox jumps over the lazy dog']),
            h('br'),
            h('span', ['귤빛 여우, 야생 코요테 점프한다.']),
          ]
        )
      })
    )
  },
})

export const Inconsolata = () => ({
  component: { TypefaceCard },
  render() {
    return h(
      'div',
      {
        style: {
          display: 'flex',
          'flex-wrap': 'wrap',
          margin: '20px',
          gap: '20px',
        },
      },
      Object.keys(typefaces).map((key) => {
        if (!key.includes('_key')) return
        const typefaceKey = key.replace('_key', '')
        return h(
          TypefaceCard,
          {
            variableName: typefaceKey,
            family: 'Inconsolata',
            size: typefaces[typefaceKey + '_size'],
            line: typefaces[typefaceKey + '_line_height'],
            weight: typefaces[typefaceKey + '_weight'],
          },
          [
            h('span', ['The quick brown fox jumps over the lazy dog']),
            h('br'),
            h('span', ['귤빛 여우, 야생 코요테 점프한다.']),
          ]
        )
      })
    )
  },
})
