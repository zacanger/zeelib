import test from 'tape'
import removeNumeric from './removeNumeric'

test('removeNumeric', (t) => {
  t.plan(1)
  t.equal(removeNumeric('123abc'), 'abc', 'removes numbers')
})
