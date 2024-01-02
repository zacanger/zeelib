import { test } from 'node:test'
import * as assert from 'node:assert'
import { range } from './range'

void test('range', (): void => {
  assert.deepEqual(range(0, 10), [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ], 'generates arr')
  assert.deepEqual(range(0, 10, 2), [ 0, 2, 4, 6, 8, 10 ], 'generates arr with skip')
  assert.deepEqual(
    range('A'.charCodeAt(0), 'D'.charCodeAt(0)).map((c) => String.fromCharCode(c)),
    [ 'A', 'B', 'C', 'D' ],
    'generates arr of char',
  )
})
