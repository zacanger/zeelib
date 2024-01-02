/**
 * Get the key for a value
 * @example
 * getKeyByValue('bar', { foo: 'bar' }) // => 'foo'
 */

export const getKeyByValue = (
  value: any,
  object: Record<string, any>,
): string | undefined =>
  Object.keys(object).find((key: string) => object[key] === value)
