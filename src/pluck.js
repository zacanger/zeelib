// @flow

/**
 * Simple `pluck`
 */

const pluck = (key: string, arr: any[]): any[] =>
  arr.map((obj) => obj[key])

export default pluck
