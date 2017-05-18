// @flow

/**
 * Simple `pluck`
 */

const pluck = (arr: any[], key: string): any[] =>
  arr.map((obj) => obj[key])

export default pluck
