// @flow

/**
 * Get the key for a value
 * @example
 * getKeyByValue('bar', { foo: 'bar' }) // => 'foo'
 */

const getKeyByValue = (value: mixed, object: Object): ?string =>
  Object.keys(object).find((key: string) => object[key] === value)

export default getKeyByValue
