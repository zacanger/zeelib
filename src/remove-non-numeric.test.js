// @flow

import test from 'tape'
import removeNonNumeric from './remove-non-numeric'

test('removeNonNumeric', (t): void => {
  t.equal(removeNonNumeric('asdf22\n!'), '22', 'works')
  t.end()
})
