// @flow

import test from 'tape'
import calc from './calc'

test('calc', (t): void => {
  const add = (a: number, b: number): number => a + b
  const sub = (a: number, b: number): number => a - b
  const div = (a: number, b: number): number => a / b
  const mul = (a: number, b: number): number => a * b
  t.equal(calc(add)(1, 1, 1, 1), 4, 'works for addition')
  t.equal(calc(sub)(3, 1, 1, 1), 0, 'works for subtraction')
  t.equal(calc(mul)(1, 1, 1, 1), 1, 'works for multiplication')
  t.equal(calc(div)(1, 1, 1, 1), 1, 'works for division')
  t.end()
})
