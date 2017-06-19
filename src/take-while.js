// @flow

/**
 * Returns elements that pass predicate,
 * until failure (ignores matches after failure)
 */

const takeWhile = (
  pred: () => bool,
  arr: any[]
): any[] => {
  let stop = arr.length
  arr.some((n, idx) =>
    pred(n, idx) ? false : ((stop = idx), true))
  return arr.slice(0, stop)
}

export default takeWhile
