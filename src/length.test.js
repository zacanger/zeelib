// @flow

import test from 'tape'
import length from './length'
import noop from './noop'
import sum from './sum'

test('length', (t): void => {
  const addTwo = (a: number, b: number): number => sum([ a, b ])
  const addFour = (a: number, b: number, c: number, d: number): number =>
    sum([ a, b, c, d ])

  t.equal(length('foo'), 3, 'works for strings')
  t.equal(length([ 1, 2 ]), 2, 'works for arrays')
  t.equal(length(new Set([ 1, 2, 3 ])), 3, 'works for sets')
  t.equal(length(new Map([ [ 1, 2 ] ])), 1, 'works for maps')
  t.equal(length({ a: 'a' }), 1, 'works for objects')
  t.equal(length(noop), 0, 'works for fn with 0 args')
  t.equal(length(addTwo), 2, 'works for fn with 2 args')
  t.equal(length(addFour), 4, 'works for fn with 4 args')
  t.end()
})
