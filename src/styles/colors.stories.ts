import colors from './colors.module.scss'
import ColorCard from './ColorCard.vue'
import { h } from 'vue'

export default {
  title: 'Style/Colors',
  component: ColorCard,
  parameters: {
    layout: 'fullscreen',
  },
}

export const All = () => ({
  components: { ColorCard },
  render() {
    return h(
      'div',
      {
        style: {
          display: 'flex',
          'flex-wrap': 'wrap',
          'margin-bottom': '20px',
        },
      },
      Object.entries(colors).map(([key, value]) => {
        return h(ColorCard, {
          variableName: key,
          colorValue: value,
        })
      })
    )
  },
})
