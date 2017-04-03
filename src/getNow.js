// @flow

const getNow = (): () => number =>
  Date.now || (() => new Date().getTime())

export default getNow
