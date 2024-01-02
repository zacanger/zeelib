import { test } from 'node:test'
import * as assert from 'node:assert'
import { len } from './len'
import { noop } from './noop'
import { sum } from './sum'

void test('length', (): void => {
  const addTwo = (a: number, b: number): number => sum([ a, b ])
  const addFour = (a: number, b: number, c: number, d: number): number =>
    sum([ a, b, c, d ])

  assert.equal(len('foo'), 3, 'works for strings')
  assert.equal(len([ 1, 2 ]), 2, 'works for arrays')
  assert.equal(len(new Set([ 1, 2, 3 ])), 3, 'works for sets')
  assert.equal(len(new Map([ [ 1, 2 ] ])), 1, 'works for maps')
  assert.equal(len({ a: 'a' }), 1, 'works for objects')
  assert.equal(len(noop), 0, 'works for fn with 0 args')
  assert.equal(len(addTwo), 2, 'works for fn with 2 args')
  assert.equal(len(addFour), 4, 'works for fn with 4 args')
  assert.equal(len(3), 3, 'works for numbers')
})
