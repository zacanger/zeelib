// @flow

import test from 'tape'
import countItemsInArray from './count-items-in-array'

test('countItemsInArray', (t): void => {
  // this method is dumb and breaks when importing it for some stupid reason
  // $FlowFixMe
  t.deepEqual(countItemsInArray([ 1, 1, 2, 3, 4 ]), { '1': 2, '2': 1, '3': 1, '4': 1 }, 'works')
  t.end()
})
