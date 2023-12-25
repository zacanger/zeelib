import { test } from 'node:test'
import * as assert from 'node:assert'
import stripAnsi from './strip-ansi'

void test('stripAnsi', (): void => {
  const plain = 'hello'
  const colorized = '\x1B[34mhello\x1B[39m'
  assert.equal(stripAnsi(colorized), plain, 'works')
})
