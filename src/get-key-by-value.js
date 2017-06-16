// @flow

/**
 * Get the key for a value
 * @example
 * getKeyByValue('bar', { foo: 'bar' })
 */

const getKeyByValue = (value: any, object: Object): ?string =>
  Object.keys(object).find((key) => object[key] === value)

export default getKeyByValue
