// @flow

import test from 'tape'
import product from './product'

test('product', (t): void => {
  t.equal(product([ 1, 2, 3, 4 ]), 24, 'on array of ints')
  t.equal(product([ 1.1, 2.2, 3.3, 4.4 ]), 35.138400000000004, 'on array of floats')
  t.end()
})
