// @flow

/**
 * Map for objects
 * @example
 * const f = (a) => a + ' world'
 * const d = { a: 'hello', b: 'sup' }
 * mapObject(f, d) // => { a: 'hello world', b: 'sup world' }
 */

const mapObject = (
  f: (any, any, any) => any,
  o: Object,
  ctx: any = this
): Object => {
  const res = {}
  Object.keys(o).forEach((k): void => {
    res[k] = f.call(ctx, o[k], k, o)
  })
  return res
}

export default mapObject
