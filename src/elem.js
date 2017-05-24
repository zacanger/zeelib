// @flow

/**
 * Here because of Haskell's `elem`
 * Like `contains`, with reversed args
 */

const elem = (el: any, ls: string | any[]): bool =>
  ls.includes(el)

export default elem
