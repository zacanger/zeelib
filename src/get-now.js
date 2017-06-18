// @flow

/**
 * Returns a timestamp for now
 * @example
 * getNow()
 */

const getNow = (): () => number =>
  Date.now || (() => new Date().getTime())

export default getNow
