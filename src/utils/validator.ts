type PropsValidator = (a: any) => boolean

export const colorValidator: PropsValidator = (value: string) => {
  if (value.startsWith('#') && value.length < 8) return true
  return false
}

export const sizeValidator: PropsValidator = (value: string) => {
  return ['small', 'medium', 'big'].indexOf(value) !== -1
}
