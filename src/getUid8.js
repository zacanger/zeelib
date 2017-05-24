// @flow

/**
 * Returns a random uid of length 8
 */

const getUid8 = (): string =>
  (Math.random().toString(36) + '00000000000000000').slice(2, 10)

export default getUid8
