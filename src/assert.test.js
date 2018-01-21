// @flow

import test from 'tape'
import assert from './assert'

test('assert', (t): void => {
  t.equal(assert(1, 'heyo'), undefined, 'returns undefined for truthy first arg')
  t.throws(() => assert(false, 'nope'), /nope/, 'fails with provided error')
  t.throws(() => assert(false), /Assertion Failed:/, 'fails with default error')
  t.end()
})
