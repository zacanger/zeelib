import test from 'tape'
import getIsNode from './get-is-node'

test('getIsNode', (t) => {
  t.true(getIsNode(), 'is true')
  t.end()
})
