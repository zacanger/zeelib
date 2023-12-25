import { test } from 'node:test'
import * as assert from 'node:assert'
import sortBy from './sort-by'

void test('sortBy', (): void => {
  interface A { id: number }
  const f = ({ id }: A): number => id
  const l = [ { id: 1 }, { id: 3 }, { id: 2 } ]
  const e = [ { id: 1 }, { id: 2 }, { id: 3 } ]
  assert.deepEqual(sortBy(f, l), e, 'works')
})
