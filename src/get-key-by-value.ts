/**
 * Get the key for a value
 * @example
 * getKeyByValue('bar', { foo: 'bar' }) // => 'foo'
 */

const getKeyByValue = (value: any, object: Record<string, any>): string | undefined =>
  Object.keys(object).find((key: string) => object[key] === value)

export default getKeyByValue
