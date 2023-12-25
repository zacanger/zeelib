import { test } from 'node:test'
import * as assert from 'node:assert'
import leftPad from './left-pad'

void test('leftPad', (): void => {
  assert.equal(leftPad('asdf', 8), '    asdf', 'works')
  assert.equal(leftPad('asdf', 8, 'z'), 'zzzzasdf', 'works with supplied pad')
})
