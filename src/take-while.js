// @flow

/**
 * Returns elements that pass predicate,
 * until failure (ignores matches after failure)
 */

const takeWhile = (
  pred: () => bool,
  arr: any[]
): any[] => {
  const a1 = []
  arr.forEach((el) => {
    if (pred(el)) {
      a1.push(el)
    } else {
      return a1
    }
  })
  return a1
}

export default takeWhile
