import { test } from 'node:test'
import * as assert from 'node:assert'
import { isSemver } from './is-semver'

void test('isSemver', (): void => {
  assert.ok(isSemver('0.0.1'), 'regular')
  assert.ok(isSemver('1.0.1-beta'), 'with beta')
  assert.ok(isSemver('1.0.1-beta.2'), 'with beta and beta version')
  assert.ok(!isSemver('stable'), 'random string')
  assert.ok(!isSemver('truncated version'), 'random string')
})
