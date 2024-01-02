import { test } from 'node:test'
import * as assert from 'node:assert'
import { initials } from './initials'

void test('initials', (): void => {
  assert.equal(initials('Zacary Erik Anger'), 'ZEA', 'shortens my name to my initials')
  assert.equal(initials('foo'), 'foo', 'returns str if no caps')
})
