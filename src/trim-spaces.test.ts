import { test } from 'node:test'
import * as assert from 'node:assert'
import trimSpaces from './trim-spaces'

void test('trimSpaces', (): void => {
  assert.equal(trimSpaces(' asdf asdf '), 'asdfasdf', 'works')
})
