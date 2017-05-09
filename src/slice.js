// @flow

const slice = (ar: any[], from: number, to: ?number): any[] =>
  [].slice.call(ar, from, to || 1)

export default slice
