import each from './each'

type AnyMapOrArr = Record<string, any> | any[]

/**
 * `filter` for array and object
 * @example
 * filter(id, [ 1, 2 ]) // => [ 1, 2 ]
 * filter(lessThanThree, [ 1, 2, 3, 4 ]) // => [ 1, 2 ]
 * filter(lessThanThree, { a: 1, b: 4 }) // =>  { a: 1 }
 */

const filter = <T>(
  fn: (x: T, y: string | number) => boolean,
  list: T[] | string | Record<string, any>,
): Record<string, T> | T[] => {
  const isArr = Array.isArray(list)
  const filtered: AnyMapOrArr = isArr ? [] : {}

  // @ts-expect-error gotta figure that out
  each(list, (item: T, index: number) => {
    if (fn(item, index)) {
      const idx: number | string = isArr ? filtered.length : index
      // @ts-expect-error gotta figure that out
      filtered[idx] = item
    }
  })

  return filtered
}

export default filter
