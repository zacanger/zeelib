// @flow

const contains = (a: string | any[], el: any): bool =>
  typeof a === 'string'
    ? a.split('').includes(el)
    : a.includes(el)

export default contains
