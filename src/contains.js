// @flow

const contains = (ls: string | any[], el: any): bool => {
  console.error('`contains` is deprecated. Please use `elem` instead.')
  return ls.includes(el)
}

export default contains
