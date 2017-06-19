import test from 'tape'
import isNode from './is-node'

test('isNode', (t) => {
  t.true(isNode(), 'is true')
  t.end()
})
