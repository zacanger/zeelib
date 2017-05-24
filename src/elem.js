// @flow

/**
 * Here because of Haskell's `elem`
 * Like `contains`, with reversed args
 */

const elem = (el: any, a: string | any[]): bool =>
  a.includes(el)

export default elem
