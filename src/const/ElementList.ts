import colors from '../styles/colors.module.scss'
import type { MyElement } from '../types/Element'

export const bigElements: MyElement[] = (
  [
    {
      name: 'Hamburger',
      color: colors.grey_111,
      pigma: 'menu',
    },
    {
      name: 'ArrowLeft',
      color: colors.grey_111,
      pigma: 'menue',
    },
    {
      name: 'Depth',
      color: colors.grey_111,
      pigma: 'menue',
    },
    {
      name: 'Close',
      color: colors.grey_111,
      pigma: 'menue',
    },
    {
      name: 'Check',
      color: colors.main,
      pigma: 'menue',
    },
    {
      name: 'Setting',
      color: colors.grey_111,
      pigma: 'menue',
    },
    {
      name: 'Check',
      color: colors.main,
      pigma: 'menue',
    },
  ] as MyElement[]
).map((e) => {
  e.size = 'big'
  return e
})
export const mediumElements: MyElement[] = (
  [
    {
      name: 'Hamburger',
      color: colors.grey_111,
      pigma: 'menu',
    },
    {
      name: 'ArrowLeft',
      color: colors.grey_111,
      pigma: 'menue',
    },
    {
      name: 'Depth',
      color: colors.grey_111,
      pigma: 'menue',
    },
    {
      name: 'Close',
      color: colors.grey_111,
      pigma: 'menue',
    },
    {
      name: 'Check',
      color: colors.main,
      pigma: 'menue',
    },
    {
      name: 'Setting',
      color: colors.grey_111,
      pigma: 'menue',
    },
    {
      name: 'Check',
      color: colors.main,
      pigma: 'menue',
    },
  ] as MyElement[]
).map((e) => {
  e.size = 'medium'
  return e
})

export const smallElements: MyElement[] = (
  [
    {
      name: 'Hamburger',
      color: colors.grey_111,
      pigma: 'menu',
    },
    {
      name: 'ArrowLeft',
      color: colors.grey_111,
      pigma: 'menue',
    },
    {
      name: 'Depth',
      color: colors.grey_111,
      pigma: 'menue',
    },
    {
      name: 'Close',
      color: colors.grey_111,
      pigma: 'menue',
    },
    {
      name: 'Check',
      color: colors.main,
      pigma: 'menue',
    },
    {
      name: 'Setting',
      color: colors.grey_111,
      pigma: 'menue',
    },
    {
      name: 'Check',
      color: colors.main,
      pigma: 'menue',
    },
  ] as MyElement[]
).map((e) => {
  e.size = 'small'
  return e
})
