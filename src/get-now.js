// @flow

/**
 * Returns a timestamp for now
 */

const getNow = (): () => number =>
  Date.now || (() => new Date().getTime())

export default getNow
