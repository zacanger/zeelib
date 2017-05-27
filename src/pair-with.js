// @flow

/**
 * Returns an empty array if xs is shorter than two
 * Otherwise returns an array made from calling f on
 * pairs of adjacent elements
 */

const pairWith = (xs: any[]) =>
  (f: () => any) =>
    xs.length < 2
      ? []
      : [ f(xs[0], xs[1]) ].concat(pairWith(xs.slice(1), f))

export default pairWith
