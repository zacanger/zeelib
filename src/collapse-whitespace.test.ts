import { test } from 'node:test'
import * as assert from 'node:assert'
import collapseWhitespace from './collapse-whitespace'

void test('collapseWhitespace', (): void => {
  assert.equal(collapseWhitespace('a\n\r\t\nb'), 'a b', 'works')
})
