import { isArrayLike } from './is-array-like'

const iterateArray = <T>(
  arr: T[],
  fn: (a: T, b: string) => T,
): T[] => {
  return arr.map((x: T, i: number) => fn(x, i.toString()))
}

type AnyMap = Record<string, any>
type IOFn <T> = (a: T, b: string) => AnyMap
const iterateObject = <T>(
  obj: AnyMap,
  fn: IOFn<T>,
): AnyMap => {
  const r: AnyMap = {}
  for (const prop in obj) {
    if (Object.hasOwn(obj, prop)) {
      r[prop] = fn(obj[prop] as T, prop)
    }
  }
  return r
}

/**
 * Takes an array or object
 * and a function, and runs the function
 * on each element
 * @example
 * each([ 'a', 'b', 'c' ], id) // => 'a'
 */

export const each = <T>(
  xs: (any[] | Record<string, any> | string),
  fn: ((a: any | null | undefined, b: number | string) => T),
): Record<string, any> | T[] => {
  if (isArrayLike(xs)) {
    return iterateArray((xs as any[]), fn)
  }

  return iterateObject((xs as Record<string, any>), fn as IOFn<T>)
}
