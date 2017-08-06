// @flow

/**
 * Simple flatMap
 * @example
 * const ns = [
 *   { name: 'Zacary', nicks: [ 'Zac', 'Zac Anger' ] },
 *   { name: 'Foo', nicks: [ 'Baz', 'Bar' ] }
 * ]
 * const f = (a) => [a.name].concat(a.nicks)
 * flatMap(f, ns) // => [ 'Zacary', 'Zac', 'Zac Anger', 'Foo', 'Baz', 'Bar' ]
 */

const flatMap = (f: (any) => any, a: any[]): any[] =>
  a.reduce((l: any[], v: any) =>
    l.concat(f(v)), [])

export default flatMap
