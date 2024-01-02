/**
 * Map for objects
 * @example
 * const f = (a) => a + ' world'
 * const d = { a: 'hello', b: 'sup' }
 * mapObject(f, d) // => { a: 'hello world', b: 'sup world' }
 */

export const mapObject = (
  f: (a: any, b: string, c: any) => any,
  o: Record<string, any>,
  ctx: any = this,
): Record<string, any> => {
  const res: Record<string, any> = {}
  Object.keys(o).forEach((k): void => {
    res[k] = f.call(ctx, o[k], k, o)
  })
  return res
}
