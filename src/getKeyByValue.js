// @flow

/**
 * Get the key for a value
 * `getKeyByValue({ foo: 'bar' }, 'bar')`
 */
const getKeyByValue = (object: Object, value: any): ?string =>
  Object.keys(object).find((key) => object[key] === value)

export default getKeyByValue
