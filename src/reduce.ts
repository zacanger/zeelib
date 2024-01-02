/**
 * Reduce
 * @example
 * reduce((a, b) => a + b, 0, [ 1, 2, 3, 4 ]) // => 10
 */

export const reduce = <A, B>(
  fn: (b: B, a: A) => B,
  initialValue: B,
  data: A[],
): B => {
  let reducedValue: B = initialValue
  for (let i: number = 0; i < data.length; i++) {
    reducedValue = fn(reducedValue, data[i])
  }
  return reducedValue
}
