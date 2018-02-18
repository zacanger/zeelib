// @flow

import test from 'tape'
import filterFloat from './filter-float'

test('filterFloat', (t): void => {
  t.equal(filterFloat('-111.111111111111'), -111.111111111111, 'works')
  t.true(isNaN(filterFloat('asdf')), 'is NaN for invalid string')
  t.end()
})
