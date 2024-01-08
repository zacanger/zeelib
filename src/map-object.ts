import { type AnyMap } from './types'

/**
 * Map for objects
 * @example
 * const f = (a) => a + ' world'
 * const d = { a: 'hello', b: 'sup' }
 * mapObject(f, d) // => { a: 'hello world', b: 'sup world' }
 */

export const mapObject = (
  f: (a: any, b: string, c: any) => any,
  o: AnyMap,
  ctx: any = this,
): AnyMap => {
  const res: AnyMap = {}
  Object.keys(o).forEach((k): void => {
    res[k] = f.call(ctx, o[k], k, o)
  })
  return res
}
