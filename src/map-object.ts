type O = Record<string, any>

/**
 * Map for objects
 * @example
 * const f = (a) => a + ' world'
 * const d = { a: 'hello', b: 'sup' }
 * mapObject(f, d) // => { a: 'hello world', b: 'sup world' }
 */

const mapObject = (
  f: (a: any, b: string, c: any) => any,
  o: O,
  ctx: any = this,
): O => {
  const res: O = {}
  Object.keys(o).forEach((k): void => {
    res[k] = f.call(ctx, o[k], k, o)
  })
  return res
}

export default mapObject
