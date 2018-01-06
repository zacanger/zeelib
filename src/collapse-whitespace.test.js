// @flow

import test from 'tape'
import collapseWhitespace from './collapse-whitespace'

test('collapseWhitespace', (t): void => {
  t.equal(collapseWhitespace('a\n\r\t\nb'), 'a b', 'works')
  t.end()
})
